function addToCart(produtoNome, produtoPreco, produtoImagem) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ name: produtoNome, price: produtoPreco, image: produtoImagem });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${produtoNome} adicionado ao carrinho!`);
}

function setupCardInteractions() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const saibaMaisButton = card.querySelector('button');
    const produtoNome = card.querySelector('h3').textContent;
    const produtoPreco = card.querySelector('p').textContent;
    const produtoImagem = card.querySelector('img').src;

    saibaMaisButton.addEventListener('click', () => {
      addToCart(produtoNome, produtoPreco, produtoImagem);
    });
  });
}


// Função para renderizar os produtos no DOM
export function renderProducts(produtos) {
  const productsContainer = document.querySelector('.product-container');
  productsContainer.innerHTML = '';

  produtos.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.foto}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <button>Adicionar ao Carrinho</button>
    `;
    productsContainer.appendChild(card);
  });

  setupCardInteractions();
}
