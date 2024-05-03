import { fetchProducts } from "../services/api.js";
import { renderProducts } from "./produtos.js";

async function adicionarFiltroCategoria(categoriaId) {
  try {
    const produtos = await fetchProducts();

    // Converter categoriaId para número e garantir que é válido
    categoriaId = parseInt(categoriaId);
    if (isNaN(categoriaId)) {
      console.error("Categoria ID inválido");
      return; // Saia da função se o ID não é um número válido
    }

    // Limpar a categoria atual do localStorage
    localStorage.removeItem('categoriaAtual');
    // Salvar a categoria atual no localStorage, substituindo qualquer valor existente
    localStorage.setItem('categoriaAtual', categoriaId);

    // Filtrar produtos pela categoria
    const produtosFiltrados = produtos.filter(item => item.categoriaId === categoriaId);
    renderProducts(produtosFiltrados);
  } catch (error) {
    console.log("Erro ao filtrar produtos:", error);
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