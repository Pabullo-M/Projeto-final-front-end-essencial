import { irParaPrincipal } from "../../components/principal.js";
import { usuarioLogado } from "../../components/login.js";
import { mostrarItensCarrinho } from "../../components/carrinho.js";

document.addEventListener('DOMContentLoaded', function() {
    irParaPrincipal();
    usuarioLogado();
    mostrarItensCarrinho();
});