import { initializeSlider } from "../utils/slider.js";
import { setupSearchForm } from "../../components/busca.js";
// import { setupUserIcon } from "./components/usuario.js";
import { setupNavigationLinks } from '../../components/principal.js';
import { handleCategorySelection } from '../../components/categorias.js';
import { renderProducts } from '../../components/produtos.js';
import { initializeCart } from '../../components/carrinho.js';
import { fetchProducts } from "../../services/api.js";

document.addEventListener('DOMContentLoaded', async function() {
    initializeSlider();
    setupSearchForm();
    // setupUserIcon();
    setupNavigationLinks();
    initializeCart();
    handleCategorySelection();


    const produtos = await fetchProducts();
    if (produtos) {
        renderProducts(produtos);
    }
});