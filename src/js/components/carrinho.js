export function initializeCart() {
  //seleciona a imagem dentro da tag <a> que tem o alt "carrinho", precisa do parentNode.
  const carrinhoIcone = document.querySelector('.icones a img[alt="carrinho"]').parentNode;
  carrinhoIcone.addEventListener('click', irParaCarrinho);
}

<<<<<<< HEAD
}

=======
//busca o carrinho no localStorage
function buscarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

  if (carrinho.length === 0) {
    return [];
  }
  return carrinho;
}

function irParaCarrinho() {
  const carrinho = buscarCarrinho();

  if (carrinho.length > 0) {
    window.location.href = 'carrinho.html';
  } else {
    alert('Carrinho vazio!');
  }
}
>>>>>>> origin/javascript
