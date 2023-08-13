import appConfig from "@/Utils/config";
import axios from "axios";
import { UnauthorizedErrorModel } from "../../Models/error-model.js";

async function auth(context, mode, payload) {
  try {
    const url = mode === "login" ? appConfig.loginUrl : appConfig.registerUrl;
    const response = await axios.post(url, payload);
    const data = response.data;

    if (response.status !== 200 && response.status !== 201) {
      throw new UnauthorizedErrorModel("Incorrect email address or password");
    }

    const userId = data.userId;
    const userRole = data.userRole;
    const userName = data.userName;
    const token = data.token;

    // Commit data to Vuex store first
    context.commit("setUser", {
      token: token,
      userId: userId,
      userRole: userRole,
      userName: userName,
    });

    // Now update localStorage
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", userRole);
  } catch (error) {
    throw new Error(error.message);
  }
}

export default {
  async login(context, payload) {
    await auth(context, "login", payload);
  },

  async register(context, payload) {
    await auth(context, "register", payload);
  },

  async auth(context, payload) {
    const mode = payload.mode;
    await auth(context, mode, {
      userName: payload.userName,
      userEmail: payload.userEmail,
      userPassword: payload.userPassword,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");

    if (token && userId && userRole) {
      context.commit("setUser", {
        token,
        userId,
        userRole,
      });
    }
  },

  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");

    context.commit("setUser", {
      userId: null,
      token: null,
      userRole: null,
      userName: null,
    });
  },

  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
