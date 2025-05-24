export default (json) => {
  return json.map((persona) => {
    let { nombre, apellido, apellido2 } = persona;

    let partes = [nombre, apellido, apellido2].filter(Boolean);

    let partesCapitalizadas = partes.map(
      (valor) => valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase()
    );

    return partesCapitalizadas.join(" ");
  });
};
