import { fetchCategories } from '../services/api.js';

async function renderCategories() {
  const categories = await fetchCategories();
  const menu = document.getElementById('category-menu');
  menu.innerHTML = '';  // Limpa o menu existente
  categories.forEach(category => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'dropdown-item';
    link.href = '#';
    link.textContent = category.nome;
    link.addEventListener('click', handleCategorySelection);
    item.appendChild(link);
    menu.appendChild(item);
  });
}

// function handleCategoriesDropdown(event) {
//   // event.preventDefault();

//   const dropdownMenu = document.querySelector('.dropdown-menu');
//   dropdownMenu.classList.toggle('show');

// }

function handleCategorySelection(event) {
  event.preventDefault();

  // Removendo a classe 'active' de todas as categorias e adicionando à selecionada
  const categoryLinks = document.querySelectorAll('.dropdown-item');
  categoryLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

}

export async function setupCategoryDropdown() {
  const categoriesToggle = document.querySelector('.nav-link.dropdown-toggle');
  const dropdown = new bootstrap.Dropdown(categoriesToggle);

  categoriesToggle.addEventListener('click', function (event) {
    event.preventDefault();
    dropdown.toggle();
  });

  await renderCategories();
}
