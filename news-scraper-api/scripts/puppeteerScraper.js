const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', 'config', 'config.env') });

const puppeteer = require('puppeteer');
const OpenAI = require('openai');


const News = require('../models/News');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// The new, powerful AI function
async function generateStructuredArticle(articleData) {
  const prompt = `
Eres un experto mundial en SEO y redactor jefe del portal de noticias "cryptomonedas hoy.com".
Tu misión es convertir una noticia cruda en un artículo perfectamente optimizado para SEO, estructurado como un objeto JSON.

**Noticia Cruda:**
- Título: "${articleData.title}"
- URL Original: "${articleData.url}"
- Contenido Crudo: "${articleData.content.substring(0, 4000)}" // Limit content to avoid token limits

**Tu Tarea:**
Devuelve EXCLUSIVAMENTE un objeto JSON válido, sin texto introductorio ni comentarios. El objeto debe tener la siguiente estructura:

{
  "seoTitle": "Un título conciso y potente para SEO, de 50-60 caracteres.",
  "slug": "un-slug-para-la-url-basado-en-el-seotitle",
  "metaDescription": "Una meta descripción atractiva para los resultados de Google, de 140-155 caracteres.",
  "articleBody": "El cuerpo completo del artículo, en formato Markdown. Debe ser único, bien estructurado con H2 y H3, listas, y negritas. Naturalmente, incluye palabras clave como 'criptomonedas hoy', 'bitcoin', 'ethereum'. Termina con una referencia a la fuente original.",
  "imageAltText": "Un texto alternativo descriptivo para la imagen, relacionado con el título.",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "structuredData": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "El mismo valor que seoTitle",
    "image": ["URL_de_la_imagen_principal_si_la_tienes"],
    "datePublished": "${new Date().toISOString()}",
    "dateModified": "${new Date().toISOString()}",
    "author": [{
        "@type": "Organization",
        "name": "cryptomonedashoy.com"
    }]
  }
}
`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4-turbo-preview', // Using a more advanced model for JSON mode
      response_format: { type: "json_object" },
    });

    const jsonResponse = JSON.parse(completion.choices[0].message.content);
    return jsonResponse;

  } catch (error) {
    console.error('Error generating structured article with ChatGPT:', error);
    return null;
  }
}

const sources = [
    {
      name: 'Cointelegraph',
      url: 'https://es.cointelegraph.com/',
      articleSelector: 'a', // Selector for individual article links on the main page
      titleSelector: '.post__title', // Selector for the article title on the article page
      imageSelector: '.text-fg-default , .post-content_margin', // Selector for the main image on the article page
      contentSelector: '.post-content_margin', // Selector for the main content on the article page
    },
    {
      name: 'CriptoNoticias',
      url: 'https://www.criptonoticias.com/',
      articleSelector: '.jeg_post_title a', // Selector for individual article links on the main page
      titleSelector: '.jeg_post_title', // Selector for the article title on the article page
      imageSelector: ' img', // Selector for the main image on the article page
      contentSelector: '.entry-content', // Selector for the main content on the article page
    },
  ];

const scrapeNews = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  for (const source of sources) {
    console.log(`Scraping ${source.name} from ${source.url}`);
    try {
      await page.goto(source.url, { waitUntil: 'networkidle2' });

      const articleUrls = await page.evaluate((selector) => {
        const links = Array.from(document.querySelectorAll(selector)).map(item => item.href);
        // Filter and deduplicate URLs
        const uniqueLinks = [...new Set(links)];
        return uniqueLinks.filter(link => link.includes('/news/') || link.includes('noticias')); // Basic filtering
      }, source.articleSelector);

      console.log(`Found ${articleUrls.length} potential articles from ${source.name}`);

      for (const articleUrl of articleUrls) {
        try {
          await page.goto(articleUrl, { waitUntil: 'networkidle2' });

          const rawArticleData = await page.evaluate((s, url) => {
            const titleElement = document.querySelector(s.titleSelector);
            const contentElement = document.querySelector(s.contentSelector);
            const imageElement = document.querySelector(s.imageSelector);

            return {
              title: titleElement ? titleElement.innerText.trim() : null,
              content: contentElement ? contentElement.innerText.trim() : null,
              imageUrl: imageElement ? imageElement.src : null,
              url: url,
            };
          }, source, articleUrl);

          if (rawArticleData.title && rawArticleData.content) {
            console.log(`Processing: ${rawArticleData.title}`);
            const aiContent = await generateStructuredArticle(rawArticleData);

            if (aiContent) {
              // Use a slugify function. Make sure you have one.
                            const titleForSlug = aiContent.seoTitle || rawArticleData.title;
              const slug = titleForSlug
                .toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-');

              const newsToSave = {
                title: rawArticleData.title,
                url: rawArticleData.url,
                imageUrl: rawArticleData.imageUrl,
                content: rawArticleData.content,
                seoTitle: aiContent.seoTitle,
                slug: slug,
                metaDescription: aiContent.metaDescription,
                articleBody: aiContent.articleBody,
                imageAltText: aiContent.imageAltText,
                keywords: aiContent.keywords,
                structuredData: JSON.stringify(aiContent.structuredData),
              };

              try {
                await News.create(newsToSave);
                console.log(`✅ Guardado: ${aiContent.seoTitle}`);
              } catch (dbError) {
                if (dbError.code === 11000) {
                  console.log(`⏩ Artículo duplicado omitido: ${aiContent.seoTitle}`);
                } else {
                  console.error(`❌ Error guardando en DB: ${dbError.message}`);
                }
              }
            }
          }
        } catch (articleError) {
          console.error(`❌ Error en artículo ${articleUrl}: ${articleError.message}`);
        }
      }
    } catch (sourceError) {
      console.error(`❌ Error en fuente ${source.name}: ${sourceError.message}`);
    }
  }

  await browser.close();
  console.log('Scraping completo.');
};

// This allows the script to be run directly
if (require.main === module) {
  const connectDB = require('../config/db');
  console.log('Running scraper as a standalone script...');
  connectDB().then(() => {
    scrapeNews().then(() => {
      console.log('Standalone script finished.');
      process.exit(0);
    }).catch(error => {
      console.error('Error running standalone script:', error);
      process.exit(1);
    });
  });
}


module.exports = scrapeNews;