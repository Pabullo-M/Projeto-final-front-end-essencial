function handleHomeLinkClick(event) {
  event.preventDefault();

  window.Location.href = './index.html';
}

export function setupNavigationLinks() {
  const homeLink = document.querySelector('.nav-link.active[aria-current="page"]');
  homeLink.addEventListener('click', handleHomeLinkClick);
}