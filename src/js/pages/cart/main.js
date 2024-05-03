import { irParaPrincipal } from "../../components/principal.js";
import { usuarioLogado } from "../../components/login.js";
import { mostrarItensCarrinho, mostrarDadosCarrinho } from "../../components/carrinho.js";

document.addEventListener('DOMContentLoaded', function() {
    irParaPrincipal();
    usuarioLogado();
    mostrarItensCarrinho();
    mostrarDadosCarrinho();
});