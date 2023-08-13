import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import ProductsList from "./Pages/Products/ProductsList.vue";
import CartPage from "./Pages/CartPage.vue";
import LoginPage from "./Pages/Auth/LoginPage.vue";
import AddProduct from "./Pages/Products/AddProduct.vue";
import EditProduct from "./Pages/Products/EditProduct.vue";
import RemoveProduct from "./Pages/Products/RemoveProduct.vue";
import AdminCategories from "./Pages/Categories/AdminCategories.vue";
import AdminPage from "./Pages/Admin/AdminPage.vue";
import store from "./Store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/products", component: ProductsList },
    {
      path: "/products/add",
      component: AddProduct,
      meta: { requiresAdmin: true },
    },
    {
      path: "/products/edit",
      component: EditProduct,
      meta: { requiresAdmin: true },
    },
    {
      path: "/products/remove",
      component: RemoveProduct,
      meta: { requiresAdmin: true },
    },
    {
      path: "/categories",
      component: AdminCategories,
      meta: { requiresAdmin: true },
    },
    { path: "/cart", component: CartPage, meta: { requiresAuth: true } },
    { path: "/auth", component: LoginPage, meta: { requiresUnauth: true } },
    { path: "/admin", component: AdminPage, meta: { requiresAdmin: true } },
  ],
});

router.beforeEach(function (to, _, next) {
  if (
    (to.meta.requiresAdmin && !store.getters.isAdmin) ||
    (to.meta.requiresUnauth && store.getters.isAuthenticated)
  )
    next("/products");
  else if (to.meta.requiresAuth && !store.getters.isAuthenticated)
    next("/auth");
  else next();
});

export default router;
