const getUpadteDate = (date) => {
  // Convertir la fecha proporcionada a un objeto Date
  const fechaIngresada = new Date(date);
  const fechaActual = new Date();

  // Calcular la diferencia en milisegundos
  const diferenciaMilisegundos = fechaActual - fechaIngresada;

  // Convertir la diferencia a días
  const diasPasados = Math.floor(
    diferenciaMilisegundos / (1000 * 60 * 60 * 24)
  );

  return diasPasados;
};
export default getUpadteDate;
