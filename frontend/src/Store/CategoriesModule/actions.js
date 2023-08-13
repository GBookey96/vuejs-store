import appConfig from "@/Utils/config";
import axios from "axios";

export default {
  async loadCategories(context) {
    try {
      const response = await axios.get(appConfig.categoriesUrl);
      const responseData = response.data;
      const categories = [];
      for (const key in responseData) {
        const category = {
          ...responseData[key],
        };
        categories.push(category);
      }
      context.commit("setCategories", categories);
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async addCategory(context, category) {
    try {
      const response = await axios.post(appConfig.categoriesUrl, category);
      if (response.status === 200) {
        context.commit("addCategory", category);
      } else {
        throw new Error("Failed to add category");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async editCategory(context, category) {
    try {
      const response = await axios.patch(
        appConfig.categoriesUrl + category.categoryId,
        category
      );
      if (response.status === 200) {
        context.commit("editCategory", category);
      } else {
        throw new Error("failed to add category");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
