export default (word1, word2) => {
  // Eliminar espacios y pasar a minúsculas
  let normalize = (word) =>
    word
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");

  return normalize(word1) === normalize(word2);
};
