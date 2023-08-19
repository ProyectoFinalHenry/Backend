// Cadena en base64 del archivo
const base64Data = "data:image/jpeg;base64,/9j/4AAQSkZJRg..."; // Ejemplo de base64

// Decodificar el archivo en base64
const binaryData = atob(base64Data.split(',')[1]);

// Función para obtener la extensión del archivo a partir del tipo MIME
function getExtensionFromMimeType(mimeType) {
  const extensions = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    // Agrega más tipos MIME y extensiones aquí
  };

  return extensions[mimeType] || 'unknown';
}

// Tipo MIME del archivo (extraído de la cadena en base64)
const mimeType = base64Data.split(':')[1].split(';')[0];

// Obtener la extensión del archivo
const fileExtension = getExtensionFromMimeType(mimeType);

console.log('Tipo MIME:', mimeType);
console.log('Extensión del archivo:', fileExtension);
