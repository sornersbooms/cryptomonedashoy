import React from 'react';

const MarkdownRenderer = ({ text }) => {
  if (!text) {
    return null;
  }

  // Expresión regular para encontrar **texto** y convertirlo en <strong>texto</strong>
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
