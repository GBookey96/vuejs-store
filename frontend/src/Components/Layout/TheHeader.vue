<template>
  <header>
    <nav>
      <h1>
        <router-link to="/" class="logo-link">E-Commerce</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li v-if="!isAdmin && isLoggedIn">
          <router-link to="/cart">Cart</router-link>
        </li>
        <li v-if="isAdmin">
          <router-link to="/admin">Admin Area</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/auth">Login/Register</router-link>
        </li>
        <li v-else>
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/products");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3f51b5; /* Primary Color */
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white; /* Text color for links */
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid white; /* Border color for link hover and active state */
}

h1 {
  margin: 0;
}

h1 a {
  color: #f44336; /* Secondary Color */
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
