let usuario;

async function buscaUsuario() {
    try {
        const response = await fetch('https://my-json-server.typicode.com/Pabullo-M/api/usuario');
        usuario = await response.json();
        return usuario;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
    }
}

function receberUsuario() {
    let nome = document.getElementById("usr").value;
    let senha = document.getElementById("pwd").value;
    let login = { nome: nome, senha: senha };
    return login;
}

function encontrarPosicao(array, objeto) {
    for (let i = 0; i < array.length; i++) {
        // Comparar os objetos
        if (JSON.stringify(array[i]) === JSON.stringify(objeto)) {
            return i; // Retorna a posição do objeto quando encontrado
        }
    }
    return -1; // Retorna -1 se o objeto não for encontrado no array
}

async function main() {
    try {
        const busca = await buscaUsuario();
        const recebe = receberUsuario();
        const posicao = encontrarPosicao(busca, recebe);

        if (posicao !== -1) {
            let nome = receberUsuario().nome;
            let senha = receberUsuario().senha;
            localStorage.setItem('nome', nome);;
            let storage = localStorage.getItem('nome')
            alert("Usuario conectado com sucesso");
            window.location.href = "../index.html";
                } else {
            alert("Usuario ou senha incorretos")
        }
    } catch (error) {
        console.error('Erro na função principal:', error);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let botaoLogin = document.getElementById("login");
    botaoLogin.addEventListener("click", function() {
        main();
        console.log(receberUsuario());
    });
});

function usuarioLogado(){
    if(localStorage.getItem('nome') !== null){
        var div = document.getElementById("usuarioLogado");
        div.textContent = localStorage.getItem('nome');
    } 
}

window.onload = usuarioLogado;

function logout(){
    localStorage.clear();
    alert("Usuario desconectado");
      var div = document.getElementById("usuarioLogado");
      div.innerHTML = '';
      var link = document.createElement("a");
      link.href = "./src/telalogin.html";
      var paragrafo = document.createElement("p");
      paragrafo.textContent = "Login";
      link.appendChild(paragrafo);
      div.appendChild(link);
      
}

document.getElementById("exit").addEventListener("click", function() {
    logout();
});