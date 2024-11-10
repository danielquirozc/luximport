export const getCurrentPage = () => {
  const path = window.location.pathname;
  const page = path.split('/').pop().split('.').shift(); // Extrae el nombre de la página
  return page === 'index' ? 'home' : page;
};