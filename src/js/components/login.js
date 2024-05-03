import { fetchUsers } from '../services/api.js';

function receberUsuario() {
    let nome = document.getElementById("usr").value;
    let senha = document.getElementById("pwd").value;
    let login = { nome: nome, senha: senha };
    return login;
}

function encontrarPosicao(array, objeto) {
    for (let i = 0; i < array.length; i++) {
        if (JSON.stringify(array[i]) === JSON.stringify(objeto)) {
            return i; 
        }
    }
    return -1; 
}

async function login() {
    try {
        const busca = await fetchUsers();
        const recebe = receberUsuario();
        const posicao = encontrarPosicao(busca, recebe);

        if (posicao !== -1) {
            let nome = receberUsuario().nome;
            // let senha = receberUsuario().senha;
            localStorage.setItem('nome', nome);;
            let storage = localStorage.getItem('nome')

            usuarioLogado();
            alert("Usuario conectado com sucesso");
            window.location.href = "../src/index.html";
                } else {
            alert("Usuario ou senha incorretos")
        }
    } catch (error) {
        console.error('Erro no login:', error);
    }
}


function usuarioLogado(){
    if(localStorage.getItem('nome') !== null){
        var div = document.getElementById("usuarioLogado");
        div.textContent = localStorage.getItem('nome');
    } 
}

window.onload = usuarioLogado;

function logout(){
    localStorage.removeItem('nome');
    alert("Usuario desconectado");
      var div = document.getElementById("usuarioLogado");
      div.innerHTML = '';
      var link = document.createElement("a");
      link.href = "../src/telalogin.html";
      var paragrafo = document.createElement("p");
      paragrafo.textContent = "Login";
      link.appendChild(paragrafo);
      div.appendChild(link);
      
}

export { login, logout, usuarioLogado }
