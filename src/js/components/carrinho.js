import { createProductCard } from '../pages/utils/cards.js';

export function initializeCart() {
  const carrinhoLink = document.querySelector('.carrinho-link');
  carrinhoLink.addEventListener('click', function(event) {
    event.preventDefault(); // Previne a navegação padrão do link
    irParaCarrinho();
  });
}

//busca o carrinho no localStorage
function buscarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  return carrinho.length === 0 ? [] : carrinho;
}

function buscarUsuario() {
  const usuario = localStorage.getItem('nome');
  return usuario;
}

function irParaCarrinho() {
  const carrinho = buscarCarrinho();
  const usuario = buscarUsuario();

  if (usuario) {
    if (carrinho.length > 0) {
    window.location.href = 'carrinho.html';
  } else {
    alert('Carrinho vazio!');
  }
  } else {
    alert('Faça login para acessar o carrinho!');
  }  
}

export function mostrarItensCarrinho() {
  const carrinho = buscarCarrinho(); // Certifique-se de que esta função retorna os itens corretamente
  const itensCarrinho = document.querySelector('.itensCarrinho');

  if (carrinho.length === 0) {
    itensCarrinho.innerHTML = '<p>Carrinho vazio</p>';
    return;
  }

  itensCarrinho.innerHTML = '';
  carrinho.forEach(item => {
    // Aproveita a função de criação de card para o carrinho
    createProductCard(itensCarrinho, {
      nome: item.nome,
      foto: item.imagem,
      preco: item.preco
    }, 'cart');
  });
}

function dadosCarrinho() {
  const carrinho = buscarCarrinho();
  const totalElement = document.querySelector('.valorTotal');

  totalElement.innerHTML = ''; // Limpar conteúdo existente antes de adicionar novos elementos


  const divSomatorio = document.createElement('div');
  divSomatorio.classList.add('somatorio');
  totalElement.appendChild(divSomatorio);

  //preco String para Number

  // Calcular o total usando reduce e assumindo 1 item por produto
  const total = carrinho.reduce((acc, item) => acc + Number(item.preco), 0);
  const totalItens = carrinho.length;

  const totalItensElement = document.createElement('p');
  totalItensElement.textContent = `Total de itens: ${totalItens}`;
  divSomatorio.appendChild(totalItensElement);
  const totalCarrinhoElement = document.createElement('p');
  divSomatorio.appendChild(totalCarrinhoElement);

  totalCarrinhoElement.textContent = `Total: R$ ${total.toFixed(2).toString().replace('.', ',')}`;
  divSomatorio.appendChild(totalCarrinhoElement);



  const divBotao = document.createElement('div');
  divBotao.classList.add('botaoFinalizar');
  totalElement.appendChild(divBotao);

  const botaoFinalizar = document.createElement('button');
  botaoFinalizar.textContent = 'Finalizar compra';
  botaoFinalizar.classList.add('finalizarCompra');
  divBotao.appendChild(botaoFinalizar);
  }


export function mostrarDadosCarrinho() {
  dadosCarrinho();
}
