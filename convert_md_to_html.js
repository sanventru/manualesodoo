const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Configuración de marked para que genere HTML adecuado
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    return code;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

// Plantilla HTML
const htmlTemplate = (title, content) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
    .page-header {
      background-color: #159957;
      background-image: linear-gradient(120deg, #155799, #159957);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    .btn {
      display: inline-block;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.7);
      background-color: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      border-style: solid;
      border-width: 1px;
      border-radius: 0.3rem;
      transition: color 0.2s, background-color 0.2s, border-color 0.2s;
      padding: 0.75rem 1rem;
      text-decoration: none;
      margin-right: 1rem;
    }
    .btn:hover {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }
    .main-content-nav {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eaecef;
    }
    .main-content-nav a {
      margin-right: 15px;
      text-decoration: none;
      color: #0366d6;
    }
    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      padding: 16px;
      overflow: auto;
    }
    code {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      background-color: rgba(27,31,35,0.05);
      border-radius: 3px;
      font-size: 85%;
      padding: 0.2em 0.4em;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #dfe2e5;
      padding: 8px 12px;
    }
    th {
      background-color: #f6f8fa;
    }
    .site-footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eaecef;
      text-align: center;
      font-size: 0.8em;
      color: #777;
    }
  </style>
</head>
<body>
  <header class="page-header">
    <h1 class="project-name">Manuales Odoo 16 Ecuador</h1>
    <p class="project-tagline">Documentación y manuales para Odoo 16 en Ecuador</p>
    <a href="index.html" class="btn">Inicio</a>
    <a href="Manual_Odoo16_Ecuador_Completo.html" class="btn">Manual Completo</a>
    <a href="Manual_Odoo16_Ecuador_Tecnico_Parte1.html" class="btn">Manual Técnico</a>
  </header>

  <div class="main-content">
    <div class="main-content-nav">
      <a href="index.html">Inicio</a>
      <a href="Manual_Odoo16_Ecuador_Completo.html">Manual Completo</a>
      <a href="Manual_Odoo16_Ecuador_Parte1.html">Parte 1</a>
      <a href="Manual_Odoo16_Ecuador_Parte2.html">Parte 2</a>
      <a href="Manual_Odoo16_Ecuador_Parte3.html">Parte 3</a>
      <a href="Manual_Odoo16_Ecuador_Parte4.html">Parte 4</a>
    </div>

    <div class="markdown-body">
      ${content}
    </div>

    <footer class="site-footer">
      <p>© 2025 - Manuales Odoo 16 Ecuador</p>
    </footer>
  </div>
</body>
</html>
`;

// Función para extraer el título del contenido Markdown
function extractTitle(content) {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.substring(2).trim();
    }
  }
  return 'Manual Odoo 16 Ecuador';
}

// Función para convertir un archivo Markdown a HTML
function convertMdToHtml(mdFilePath) {
  try {
    const mdContent = fs.readFileSync(mdFilePath, 'utf8');
    const title = extractTitle(mdContent);
    const htmlContent = marked.parse(mdContent);
    
    const htmlFilePath = mdFilePath.replace('.md', '.html');
    const fullHtml = htmlTemplate(title, htmlContent);
    
    fs.writeFileSync(htmlFilePath, fullHtml);
    console.log(`Convertido: ${mdFilePath} -> ${htmlFilePath}`);
  } catch (error) {
    console.error(`Error al convertir ${mdFilePath}:`, error);
  }
}

// Función para actualizar los enlaces en el archivo index.html
function updateIndexLinks() {
  try {
    const indexPath = path.join(__dirname, 'index.html');
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Reemplazar enlaces .md por .html
    indexContent = indexContent.replace(/href="([^"]+)\.md"/g, 'href="$1.html"');
    
    fs.writeFileSync(indexPath, indexContent);
    console.log('Enlaces actualizados en index.html');
  } catch (error) {
    console.error('Error al actualizar index.html:', error);
  }
}

// Procesar todos los archivos Markdown en el directorio
const directoryPath = __dirname;
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Error al leer el directorio:', err);
  }
  
  // Filtrar solo archivos Markdown
  const mdFiles = files.filter(file => file.endsWith('.md') && file !== 'README.md');
  
  // Convertir cada archivo
  mdFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    convertMdToHtml(filePath);
  });
  
  // Actualizar enlaces en index.html
  updateIndexLinks();
  
  console.log('Conversión completada.');
});
