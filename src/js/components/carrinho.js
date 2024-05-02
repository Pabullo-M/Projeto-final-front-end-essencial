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

function irParaCarrinho() {
  const carrinho = buscarCarrinho();

  if (carrinho.length > 0) {
    window.location.href = 'carrinho.html';
  } else {
    alert('Carrinho vazio!');
  }
}
