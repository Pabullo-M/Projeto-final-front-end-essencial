export function handleCategorySelection(event) {
  event.preventDefault();

  // Removendo a classe 'active' de todas as categorias e adicionando à selecionada
  const categoryLinks = document.querySelectorAll('.dropdown-item');
  categoryLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

}
