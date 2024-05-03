import { login, logout, usuarioLogado } from "../../components/login.js";
import { irParaPrincipal } from "../../components/principal.js";

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('exit');
    logoutButton.addEventListener('click', logout);

    irParaPrincipal();
    usuarioLogado();




    loginButton.addEventListener('click', login);
});