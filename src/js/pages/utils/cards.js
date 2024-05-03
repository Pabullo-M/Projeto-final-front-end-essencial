function createProductCard(container, { nome, foto, preco }, type = 'home') {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
      <img src="${foto}" alt="${nome}">
      <h3>${nome}</h3>
      <p>$${preco}</p>
  `;

  if (type === 'home') {
      const addButton = document.createElement('button');
      addButton.textContent = 'Adicionar ao Carrinho';
    //   addButton.onclick = () => addToCart(nome, preco, foto);
      card.appendChild(addButton);
      
  } else if (type === 'cart') {
      const div = document.createElement('div');
      const addButton = document.createElement('button');
      addButton.textContent = 'Adicionar';
    //   addButton.onclick = () => addToCart(nome, preco, foto);
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.onclick = () => removeFromCart(nome);
      div.appendChild(addButton);
      div.appendChild(removeButton);
      card.appendChild(div);
  }

  container.appendChild(card);
}

export { createProductCard };
