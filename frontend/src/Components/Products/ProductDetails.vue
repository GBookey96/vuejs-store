<template>
  <li class="product-item">
    <h3 class="product-name">{{ name }}</h3>
    <div class="category">{{ category }}</div>
    <div class="description">{{ showDesc }}</div>
    <div @click="showMore" class="show-more-btn" v-if="shortenDescLength">
      {{ descBtn }}
    </div>
    <div class="price">$ {{ price }}</div>
    <div class="stock" :class="{ 'out-of-stock': stock === 0 }">
      {{ stockWarning }}
    </div>
    <base-button v-if="inStock && isLoggedIn" @click="addToCart(id)">
      Add To Cart
    </base-button>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "description", "stock", "category", "price"],
  data() {
    return {
      fullDesc: false,
    };
  },
  methods: {
    showMore() {
      this.fullDesc = !this.fullDesc;
    },
    addToCart(id) {
      this.$store.dispatch("cart/addItemToCart", {userId: this.userId, productId: id});
    },
  },
  computed: {
    stockWarning() {
      if (this.stock === 0) return "Sorry! Item temporarily out of stock";
      if (this.stock < 10) return `Only ${this.stock} left!!!`;
      else return "";
    },
    inStock() {
      return this.stock !== 0;
    },
    shortenDescLength() {
      if (this.description.length > 20) return true;
      else return false;
    },
    showDesc() {
      if (!this.shortenDescLength) {
        return this.description;
      } else {
        return this.fullDesc
          ? this.description
          : this.description.substring(0, 20) + "...";
      }
    },
    descBtn() {
      return this.fullDesc ? "Show Less" : "Show More";
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated && !this.isAdmin;
    },
    userId() {
      return this.$store.getters.userId;
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

li.product-item {
  width: 300px;
  margin: 1rem 0;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
}

li.product-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.category {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #008080;
  margin-bottom: 0.5rem;
}

.stock {
  font-size: 0.9rem;
  font-weight: bold;
}

.out-of-stock {
  color: #ff0000;
}
</style>

