import appConfig from "@/Utils/config";
import axios from "axios";

export default {
  async addProduct(context, data) {
    const newProduct = {
      name: data.name,
      description: data.description,
      stockLevel: data.stockLevel,
      category: data.category,
      price: data.price,
    };

    try {
      const response = await axios.post(appConfig.productsUrl, newProduct);
      if (response.status === 201) {
        context.commit("addProduct", newProduct);
      } else {
        throw new Error("Failed to add product!");
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.message);
    }
  },
  async loadProducts(context) {
    try {
      const response = await axios.get(appConfig.productsUrl);
      const responseData = response.data;

      if (!response.status)
        throw new Error(responseData.message || "Failed to fetch!");

      const products = [];
      for (const key in responseData) {
        const product = {
          ...responseData[key],
        };
        products.push(product);
      }
      context.commit("setProducts", products);
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async deleteProduct(context, productId) {
    try {
      const response = await axios.delete(appConfig.productsUrl + productId);

      const responseData = response.data;
      if (response.status === 204) context.commit("deleteProduct", productId);
      else
        throw new Error(
          responseData.message || "Failed to delete this product!"
        );
    } catch (err) {
      throw new Error(err);
    }
  },
  async editProduct(context, product) {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      stockLevel: product.stockLevel,
      category: product.category,
      price: product.price,
    };

    try {
      const response = await axios.patch(
        appConfig.productsUrl + product.id,
        updatedProduct
      );
      if (response.status === 200) {
        context.commit("updateProduct", updatedProduct);
      } else {
        throw new Error("Failed to update product!");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateFilteredProducts(context, categoryId) {
    if (categoryId === 0) {
      context.commit("setFilteredProducts", context.state.products);
    } else {
      const filteredProducts = context.state.products.filter(
        (p) => p.categoryId === categoryId
      );
      context.commit("setFilteredProducts", filteredProducts);
    }
  },
};
