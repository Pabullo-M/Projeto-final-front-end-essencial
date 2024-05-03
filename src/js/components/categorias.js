import { fetchProducts } from "../services/api.js";
import { renderProducts } from "./produtos.js";

async function adicionarFiltroCategoria(categoriaId) {
  try {
    const produtos = await fetchProducts();

    categoriaId = parseInt(categoriaId); // Converter para número
    // Use categoriaId em vez de botao
    const produtosFiltrados = produtos.filter(item => item.categoriaId === categoriaId);
    renderProducts(produtosFiltrados);

  } catch (error) {
    console.log(error);
  }
}

export function filtrarCategorias() {
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const categoriaId = event.target.getAttribute('data-categoria');
      adicionarFiltroCategoria(categoriaId);
    });
  });
}