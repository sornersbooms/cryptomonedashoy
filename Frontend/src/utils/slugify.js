// src/utils/slugify.js
export const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Reemplazar espacios con -
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Normalizar y quitar tildes
    .replace(/[^\w\-]+/g, '') // Quitar caracteres no alfanuméricos (excepto guiones)
    .replace(/\-\-+/g, '-') // Reemplazar múltiples guiones por uno solo
    .replace(/^-+/, '') // Quitar guiones del inicio
    .replace(/-+$/, ''); // Quitar guiones del final
};
