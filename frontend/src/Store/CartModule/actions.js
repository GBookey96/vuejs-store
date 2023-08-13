import appConfig from "@/Utils/config";
import axios from "axios";

export default {
  async loadCart(context, userId) {
    try {
      const response = await axios.get(`${appConfig.cartUrl}/${userId}`);
      const responseData = response.data;
      const cart = [];
      for (const key in responseData) {
        const item = {
          ...responseData[key],
        };
        cart.push(item);
      }
      context.commit("setCart", cart);
    } catch (error) {
      throw new Error(error);
    }
  },
  async addItemToCart(_, payload) {
    try {
      await axios.post(
        `${appConfig.cartUrl}?userId=${payload.userId}&productId=${payload.productId}`
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeItemFromCart(context, payload) {
    try {
      await axios.delete(
        `${appConfig.cartUrl}?userId=${payload.userId}&productId=${payload.productId}`
      );
      context.commit("removeItemFromCartMutation", payload.productId);
    } catch (error) {
      console.log(error.message);
      throw new Error(error);
    }
  },
};
