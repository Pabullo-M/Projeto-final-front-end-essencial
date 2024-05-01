async function fetchProducts() {
  try {
      const apiUrl = 'https://my-json-server.typicode.com/Pabullo-M/api/Produto';
      
      const response = await fetch(apiUrl);
      console.log("Response:", response);

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const products = await response.json();
      console.log("Produtos carregados:", products);
      return products;
  } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      return null;
  }
}

export { fetchProducts };
