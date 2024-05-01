import { initializeSlider } from "./slider.js";
import { setupSearchForm } from "./components/pesquisa.js";
import { setupUserIcon } from "./components/usuario.js";
import { setupNavigationLinks } from './components/principal.js';
import { setupCategoryDropdown } from './components/categorias.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    setupSearchForm();
    setupUserIcon();
    setupNavigationLinks();
    setupCategoryDropdown();
});