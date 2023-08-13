class Config {
  constructor() {
    this.productsUrl = "http://localhost:3001/api/products/";
    this.categoriesUrl = "http://localhost:3001/api/categories/";
    this.registerUrl = "http://localhost:3001/api/auth/register/";
    this.loginUrl = "http://localhost:3001/api/auth/login/";
    this.cartUrl = "http://localhost:3001/api/cart";
  }
}

const appConfig = new Config();
export default appConfig;
