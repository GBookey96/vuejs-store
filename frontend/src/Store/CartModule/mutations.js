export default {
  setCart(state, payload) {
    state.cart = payload;
  },
  removeItemFromCartMutation(state, removedProductId) {
    // Find and remove the item from the cart state using its ID
    state.cart = state.cart.filter((item) => item.id !== removedProductId);
  },
};
