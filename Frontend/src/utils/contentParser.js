// Función para parsear el contenido y extraer secciones
export const parseContent = (summary) => {
  if (!summary) {
    return {
      resumen: '',
      puntosClave: '',
      comentario: '',
      fuente: '',
    };
  }

  const sections = {};
  // Regex específica para las secciones que buscamos
  const markerRegex = /\*\*(resumen|puntos clave|comentario|fuente)\*\*\s*:?/i;

  if (!markerRegex.test(summary)) {
    return {
      resumen: summary,
      puntosClave: '',
      comentario: '',
      fuente: '',
    };
  }

  // Usamos una regex que capture cualquiera de las palabras clave
  const lines = summary.split(/\*\*(resumen|puntos clave|comentario|fuente)\*\*\s*:?/i).map(line => line.trim());
  lines.shift();

  for (let i = 0; i < lines.length; i += 2) {
    const key = lines[i].toLowerCase().replace(/ /g, '');
    const value = lines[i + 1];
    sections[key] = value;
  }

  return {
    resumen: sections.resumen || '',
    puntosClave: sections.puntosclave || '',
    comentario: sections.comentario || '',
    fuente: sections.fuente || '',
  };
};