import { initializeSlider } from "./utils/slider.js";
import { setupSearchForm } from "./components/pesquisa.js";
import { setupUserIcon } from "./components/usuario.js";
import { setupNavigationLinks } from './components/principal.js';
import { setupCategoryDropdown } from './components/categorias.js';
import { renderProducts } from './components/produtos.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    setupSearchForm();
    setupUserIcon();
    setupNavigationLinks();
    setupCategoryDropdown();
});