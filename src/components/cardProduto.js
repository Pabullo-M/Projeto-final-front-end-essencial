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
export function renderProducts(products) {
  const productsContainer = document.querySelector('#products-container');
  productsContainer.innerHTML = '';

  products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <button>Saiba mais</button>
      `;
      productsContainer.appendChild(card);
  });

  setupCardInteractions();
}
