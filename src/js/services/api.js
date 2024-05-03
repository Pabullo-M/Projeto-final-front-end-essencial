const BASE_URL = 'https://my-json-server.typicode.com/Pabullo-M/api';

async function fetchProducts() {
  try {
      const apiUrl = `${BASE_URL}/produtos`;
      
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

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/usuarios`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

async function fetchCategories() {
    try {
        const response = await fetch(`${BASE_URL}/categorias`);
        console.log("Response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categories = await response.json();
        console.log("Categorias carregadas:", categories);
        return categories;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
}

export { fetchProducts, fetchUsers, fetchCategories };
