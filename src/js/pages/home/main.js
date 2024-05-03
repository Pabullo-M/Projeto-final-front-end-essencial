import { initializeSlider } from "../utils/slider.js";
import { setupFormPesquisa } from "../../components/pesquisa.js";
// import { setupUserIcon } from "./components/usuario.js";
import { irParaPrincipal } from '../../components/principal.js';
import { usuarioLogado } from "../../components/login.js";
import { logout } from "../../components/login.js";

import { filtrarCategorias } from '../../components/categorias.js';
import { renderProducts } from '../../components/produtos.js';
import { initializeCart } from '../../components/carrinho.js';
import { fetchProducts } from "../../services/api.js";

document.addEventListener('DOMContentLoaded', async function() {
    initializeSlider();
    setupFormPesquisa();
    // setupUserIcon();
    irParaPrincipal();
    usuarioLogado();
    initializeCart();

    // Busca os produtos da API e renderiza no DOM
    try {
        const produtos = await fetchProducts();
        if (produtos) {
            renderProducts(produtos);
        }
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
        
    // Filtra os produtos por categoria
    filtrarCategorias();
    
    // Logout
    const logoutButton = document.getElementById('exit');
    logoutButton.addEventListener('click', logout);
});