export default {
  getProducts(state) {
    return state.filteredProducts;
  },
  getProductsByCategory: (state) => (payload) => {
    const allProducts = state.products;
    const filteredProducts = allProducts.filter(
      (p) => p.categoryId === payload
    );
    return filteredProducts;
  },
};
