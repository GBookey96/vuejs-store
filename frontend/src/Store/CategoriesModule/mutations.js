export default {
  setCategories(state, payload) {
    state.categories = payload;
  },
  addCategory(state, payload) {
    state.categories.push(payload);
  },
  editCategory(state, payload) {
    const indexToUpdate = state.categories.findIndex(
      (c) => c.categoryId === payload.categoryId
    );
    state.categories[indexToUpdate] = payload;
  },
  deleteCategory(state, payload) {
    const indexToDelete = state.categories.findIndex(
      (c) => c.categoryId === payload
    );
    state.categories.splice(indexToDelete, 1);
  },
};
