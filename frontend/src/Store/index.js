import { createStore } from "vuex";
import ProductsModule from "./ProductsModule";
import CartModule from "./CartModule";
import AuthModule from "./AuthModule";
import CategoriesModule from "./CategoriesModule";

const store = createStore({
  modules: {
    products: ProductsModule,
    cart: CartModule,
    auth: AuthModule,
    categories: CategoriesModule,
  },
});

export default store;
