import { irParaPrincipal } from "../../components/principal.js";
import { usuarioLogado } from "../../components/login.js";
import { mostrarItensCarrinho, mostrarDadosCarrinho } from "../../components/carrinho.js";
import { logout } from "../../components/login.js";

document.addEventListener('DOMContentLoaded', function() {
    irParaPrincipal();
    usuarioLogado();
    mostrarItensCarrinho();
    mostrarDadosCarrinho();

    // Logout
    const logoutButton = document.getElementById('exit');
    logoutButton.addEventListener('click', logout);
});