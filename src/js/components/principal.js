function handleHomeLinkClick(event) {
  event.preventDefault();

  // Remover a categoria atual do localStorage
  localStorage.removeItem('categoriaAtual');

  // Redirecionar para a página principal
  window.location.href = './index.html';
}

export function irParaPrincipal() {
  const homeLink = document.querySelector('.nav-link.active[aria-current="page"]');
  homeLink.addEventListener('click', handleHomeLinkClick);
}