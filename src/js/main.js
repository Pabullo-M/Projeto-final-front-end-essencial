import { initializeSlider } from "./utils/slider.js";
import { setupSearchForm } from "./components/pesquisa.js";
// import { setupUserIcon } from "./components/usuario.js";
import { setupNavigationLinks } from './components/principal.js';
import { setupCategoryDropdown } from './components/categorias.js';
import { renderProducts } from './components/produtos.js';
import { fetchProducts } from "./services/api.js";

document.addEventListener('DOMContentLoaded', async function() {
    initializeSlider();
    setupSearchForm();
    // setupUserIcon();
    setupNavigationLinks();


    await setupCategoryDropdown();


    const produtos = await fetchProducts();
    if (produtos) {
        renderProducts(produtos);
    }
});