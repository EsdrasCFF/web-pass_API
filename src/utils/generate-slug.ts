export function generateSlug(slug: string) {
  // Remove acentos
  let stringWithoutAccents = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Substitui espaços por "-"
  let stringWithoutSpaces = stringWithoutAccents.trim().replaceAll(" ","-");

  // Transforma em minúsculas
  let lowercaseString = stringWithoutSpaces.toLowerCase();

  // Remove pontos
  let stringWithoutDots = lowercaseString.replace(/\./g, "");

  return stringWithoutDots;
}


