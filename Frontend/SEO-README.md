# Guía de SEO - Criptomonedas Hoy

## Sitemap Dinámico

### ¿Qué es?
El sitemap.xml es un archivo que ayuda a los motores de búsqueda (como Google) a descubrir y indexar todas las páginas de tu sitio web de manera eficiente.

### Características Implementadas

1. **Generación Automática**: El sitemap se genera dinámicamente usando Next.js 13+ App Router
2. **Páginas Estáticas**: Incluye automáticamente la página principal y la sección de noticias
3. **Noticias Dinámicas**: Lee desde tu API todas las noticias y genera una entrada para cada una
4. **Revalidación**: Se actualiza automáticamente cada hora

### Archivos Clave

- `src/app/sitemap.js` - Función principal que genera el sitemap
- `src/app/sitemap.config.js` - Configuración centralizada del sitemap
- `public/robots.txt` - Instrucciones para crawlers
- `src/app/metadata.js` - Configuración de metadatos del sitio

### Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
API_URL=http://localhost:5000

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cryptomonedashoy.com
```

### URLs del Sitemap

El sitemap incluirá automáticamente:

- **Página Principal**: `https://cryptomonedashoy.com/` (Prioridad: 1.0)
- **Sección Noticias**: `https://cryptomonedashoy.com/noticias` (Prioridad: 0.9)
- **Noticias Individuales**: `https://cryptomonedashoy.com/noticias/[slug]` (Prioridad: 0.7)

### Metadatos Implementados

- **Open Graph**: Para compartir en redes sociales
- **Twitter Cards**: Optimización para Twitter
- **Meta Tags**: Títulos, descripciones y palabras clave
- **Robots**: Instrucciones para motores de búsqueda

### Verificación

1. **Sitemap**: Visita `https://cryptomonedashoy.com/sitemap.xml`
2. **Robots**: Visita `https://cryptomonedashoy.com/robots.txt`
3. **Google Search Console**: Envía tu sitemap para indexación

### Próximos Pasos Recomendados

1. **Google Search Console**: Configura tu sitio y envía el sitemap
2. **Bing Webmaster Tools**: Similar a Google Search Console
3. **Analytics**: Implementa Google Analytics para monitorear el tráfico
4. **PageSpeed Insights**: Optimiza la velocidad de carga
5. **Mobile-Friendly Test**: Asegúrate de que sea responsive

### Troubleshooting

**Error de Conexión a la API**: 
- Verifica que tu API esté corriendo en el puerto 5000
- El sitemap funcionará con solo las páginas estáticas si la API no está disponible

**Sitemap No Se Genera**:
- Verifica que Next.js esté corriendo
- Revisa la consola para errores
- Asegúrate de que los archivos estén en las ubicaciones correctas

### Beneficios del Sitemap

- ✅ **Indexación Rápida**: Google encuentra todas tus páginas más rápido
- ✅ **SEO Mejorado**: Mejor posicionamiento en resultados de búsqueda
- ✅ **Trazabilidad**: Puedes ver qué páginas están indexadas
- ✅ **Actualizaciones**: Las nuevas noticias se indexan automáticamente
