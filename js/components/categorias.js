function handleCategoriesDropdown(event) {
  event.preventDefault();

  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');

}

function handleCategorySelection(event) {
  event.preventDefault();

  // Removendo a classe 'active' de todas as categorias e adicionando à selecionada
  const categoryLinks = document.querySelectorAll('.dropdown-item');
  categoryLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

}

export function setupCategoryDropdown() {
  const categoriesToggle = document.querySelector('.nav-link.dropdown-toggle');
  categoriesToggle.addEventListener('click', handleCategoriesDropdown);

  const categoryItems = document.querySelectorAll('.dropdown-item');
  categoryItems.forEach(item => {
      item.addEventListener('click', handleCategorySelection);
  });
}