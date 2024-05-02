function setupCardInteractions() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const saibaMaisButton = card.querySelector('button');
      saibaMaisButton.addEventListener('click', () => {
          alert(`Saiba mais sobre: ${card.querySelector('h3').textContent}`);
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
      <button>Saiba mais</button>
    `;
    productsContainer.appendChild(card);
  });

  setupCardInteractions();
}
