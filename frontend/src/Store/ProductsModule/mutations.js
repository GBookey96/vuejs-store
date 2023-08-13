export default {
  addProduct(state, payload) {
    state.products.push(payload);
  },
  setProducts(state, payload) {
    state.products = payload;
    state.filteredProducts = payload;
  },
  deleteProduct(state, payload) {
    const productIndex = state.products.findIndex((p) => p.id === payload);
    if (productIndex !== -1) state.products.splice(productIndex, 1);
  },
  setFilteredProducts(state, products) {
    state.filteredProducts = products;
  },
  updateProduct(state, payload) {
    const productIndex = state.products.findIndex((p) => p.id === payload.id);
    state.products[productIndex] = payload;
  },
};
