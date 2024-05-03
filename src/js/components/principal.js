function handleHomeLinkClick(event) {
  event.preventDefault();

  window.location.href = './index.html';
}

export function irParaPrincipal() {
  const homeLink = document.querySelector('.nav-link.active[aria-current="page"]');
  homeLink.addEventListener('click', handleHomeLinkClick);
}