export const getCurrentPage = () => {
  const path = window.location.pathname;
  const page = path.split('/').pop().split('.').shift();
  return page === 'index' || !page ? 'home' : page;
};