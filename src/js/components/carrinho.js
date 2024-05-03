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
  const containerTotal = document.createElement('div');
  totalElement.appendChild(containerTotal);
 
  let total = 0;
  carrinho.forEach(item => {
    // Convertendo para número e verificando se é NaN
    const preco = Number(item.preco);
    if (!isNaN(preco)) {
      total += preco * (item.quantidade || 1); // Multiplicando pelo número de itens, assumindo 1 se não especificado
    } else {
      console.warn(`Preço inválido detectado: ${item.preco}`);
    }
  });

  // Verificação após a tentativa de cálculo
  if (isNaN(total)) {
    totalElement.textContent = "Total: R$ Erro no cálculo";
  } else {
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
}

export function mostrarDadosCarrinho() {
  dadosCarrinho();
}