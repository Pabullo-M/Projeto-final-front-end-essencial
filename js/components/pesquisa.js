
function handleSearch(event) {
  event.preventDefault();

  const entradaBusca = document.querySelector('.pesquisa input[type="search"]');
  const termoBusca = entradaBusca.value.trim();

}

export function setupSearchForm() {
  const searchForm = document.querySelector('.pesquisa form');
  searchForm.addEventListener('submit', handleSearch);
}