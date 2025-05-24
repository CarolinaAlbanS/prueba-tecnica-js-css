export default (json) => {
  let totalEdad = json.reduce((suma, persona) => suma + persona.edad, 0);

  let media = totalEdad / json.length;

  //Si quiero que me devuelva un numero entedero redondeando a lo alto.
  //let edadRedondeada = Math.round(media);
  //return edadRedondeada;
  return media;
};
