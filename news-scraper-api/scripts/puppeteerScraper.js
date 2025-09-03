const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config({ path: __dirname + '/../config/config.env' });
const News = require('../models/News');
const connectDB = require('../config/db');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function summarizeTextWithChatGPT(articleData) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `Eres un asistente experto en criptomonedas y redacción SEO.
Tu tarea es transformar la noticia cruda en un artículo único para el sitio web "cryptomonedashoy.com", optimizado para la palabra clave principal "cryptomonedas hoy" y otras keywords relacionadas como "bitcoin hoy" y "ethereum hoy".

Toma los siguientes datos del artículo:
Título: ${articleData.title}
URL: ${articleData.url}
Contenido: ${articleData.content}

Requisitos para el artículo:

1. Redacta un título atractivo y optimizado para SEO (menos de 70 caracteres).
2. Genera un resumen de 150-200 palabras en un tono informativo y claro.
3. Incluye 3 bullets con los puntos más importantes.
4. Agrega un pequeño comentario de análisis al final (1-2 frases) mostrando el impacto del evento en el mercado hoy.
5. Incluye la fuente original y un enlace al artículo original.
6. Evita copiar frases textuales; parafrasea.
7. Usa subtítulos H2 para separar secciones y mejora la legibilidad.
8. Mantén un estilo amigable pero profesional.` }],
      model: 'gpt-3.5-turbo',
      max_tokens: 800, // Aumentado para permitir un artículo completo
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error summarizing with ChatGPT:', error);
    return null;
  }
}

// Connect to DB
connectDB();

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
  const browser = await puppeteer.launch({ headless: true }); // Use headless: false for debugging
  const page = await browser.newPage();

  for (const source of sources) {
    console.log(`Scraping ${source.name} from ${source.url}`);
    try {
      await page.goto(source.url, { waitUntil: 'networkidle2' });

      const articleUrls = await page.evaluate((selector) => {
        const links = [];
        document.querySelectorAll(selector).forEach(item => {
          links.push(item.href);
        });
        return links;
      }, source.articleSelector);

      console.log(`Found ${articleUrls.length} articles from ${source.name}`);

      for (const articleUrl of articleUrls) {
        try {
          await page.goto(articleUrl, { waitUntil: 'networkidle2' });

          const articleData = await page.evaluate((s) => {
            const titleElement = document.querySelector(s.titleSelector);
            const imageElement = document.querySelector(s.imageSelector);
            const contentElement = document.querySelector(s.contentSelector);

            return {
              title: titleElement ? titleElement.innerText.trim() : null,
              imageUrl: null, // No longer scraping image URLs
              content: contentElement ? contentElement.innerText.trim() : null,
            };
          }, source);

          if (articleData.title && articleData.content) {
            // Add URL to the data
            articleData.url = articleUrl;

            // Summarize with ChatGPT
            const summary = await summarizeTextWithChatGPT(articleData);
            articleData.summary = summary || articleData.content.substring(0, 200) + '...'; // Use summary or a truncated version if summarization fails

            // Save to DB
            try {
              await News.create(articleData);
              console.log(`✅Guardado: ${articleData.title}`);
            } catch (dbError) {
              if (dbError.code === 11000) {
                console.log(`Duplicate article skipped: ${articleData.title}`);
              } else {
                console.error(`Error saving article to DB: ${dbError.message}`);
              }
            }
          }
        } catch (articleError) {
          console.error(`Error scraping article ${articleUrl}: ${articleError.message}`);
        }
      }

    } catch (sourceError) {
      console.error(`Error scraping source ${source.name}: ${sourceError.message}`);
    }
  }

  await browser.close();
  console.log('Scraping complete.');
  process.exit(0);
};

scrapeNews();