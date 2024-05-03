import { createProductCard } from '../pages/utils/cards.js';

// adicionar produtos ao carrinho
function addToCart(produtoNome, produtoPreco, produtoImagem) {
  const cart = JSON.parse(localStorage.getItem('carrinho') || '[]');
  cart.push({ nome: produtoNome, preco: produtoPreco, imagem: produtoImagem });
  localStorage.setItem('carrinho', JSON.stringify(cart));
  alert(`${produtoNome} adicionado ao carrinho!`);
}

// Função para adicionar interações aos cards
function setupCardInteractions() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const adicionarCarrinho = card.querySelector('button');
    const produtoNome = card.querySelector('h3').textContent;
    const produtoPreco = card.querySelector('p').textContent;
    const produtoImagem = card.querySelector('img').src;

    adicionarCarrinho.addEventListener('click', () => {
      addToCart(produtoNome, produtoPreco, produtoImagem);
    });
  });
}


// Função para renderizar os produtos no DOM
export function renderProducts(produtos) {
  const productsContainer = document.querySelector('.product-container');
  productsContainer.innerHTML = '';

  produtos.forEach(produto => {
    createProductCard(productsContainer, produto, 'home');
  });

  setupCardInteractions();
}
