// src/utils/generate-slug.ts
function generateSlug(slug) {
  let stringWithoutAccents = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let stringWithoutSpaces = stringWithoutAccents.trim().replaceAll(" ", "-");
  let lowercaseString = stringWithoutSpaces.toLowerCase();
  let stringWithoutDots = lowercaseString.replace(/\./g, "");
  return stringWithoutDots;
}

export {
  generateSlug
};
