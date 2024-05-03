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

  if (!totalElement) {
    console.error("Elemento 'valorTotal' não encontrado no DOM.");
    return;
  }

  totalElement.innerHTML = ''; // Limpar conteúdo existente antes de adicionar novos elementos

  // Calcular total e quantidade de itens usando reduce
  const resultado = carrinho.reduce((acc, item) => {
    const preco = Number(item.preco);
    if (!isNaN(preco) && item.quantidade) {
      acc.total += preco * item.quantidade;
      acc.quantidade += item.quantidade;
    }
    return acc;
  }, { total: 0, quantidade: 0 });

  // Verificar se o cálculo do total resultou em um número válido
  if (isNaN(resultado.total)) {
    totalElement.textContent = "Erro ao calcular o total";
  } else {
    const containerTotal = document.createElement('div');
    containerTotal.innerHTML = `
      <p>Total de Itens: ${resultado.quantidade}</p>
      <p>Total: R$ ${resultado.total.toFixed(2)}</p>
    `;
    totalElement.appendChild(containerTotal);

    const botaoFinalizar = document.createElement('button');
    botaoFinalizar.textContent = 'Finalizar compra';
    botaoFinalizar.classList.add('finalizarCompra');
    totalElement.appendChild(botaoFinalizar);
  }
}

export function mostrarDadosCarrinho() {
  dadosCarrinho();
}