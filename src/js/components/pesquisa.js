import { fetchProducts } from "../services/api.js";
import { renderProducts } from "./produtos.js";

async function handleSearch(event) {
  event.preventDefault();

  const entradaBusca = document.querySelector('.pesquisa input[type="search"]');
  const termoBusca = entradaBusca.value.trim().toLowerCase();

  try {
    const produtos = await fetchProducts(); // Buscar produtos apenas uma vez
    let produtosFiltrados = produtos;

    // Recuperar a categoria atual do localStorage
    const categoriaId = localStorage.getItem('categoriaAtual');
    if (categoriaId) {
      produtosFiltrados = produtosFiltrados.filter(produto => produto.categoriaId === Number(categoriaId));
    }

    // Aplicar filtro de busca se houver termo de busca
    if (termoBusca) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca)
      );
    }

    renderProducts(produtosFiltrados); // Renderizar os produtos após aplicar todos os filtros
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
}

export function setupFormPesquisa() {
  const searchForm = document.querySelector('.pesquisa form');
  searchForm.addEventListener('submit', handleSearch);
}
