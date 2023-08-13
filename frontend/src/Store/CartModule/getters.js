export default {
  getCart(state) {
    return state.cart;
  },
  cartEmpty(state) {
    return state.cart.length === 0;
  },
};
