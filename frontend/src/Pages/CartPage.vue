<template>
  <div>
    <h2 class="primary-text">{{ userName }}'s Cart</h2>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-card class="background-light">
      <span v-if="cartEmpty"
        >Your cart is currently empty. To explore our store and add items to
        your cart, please
        <router-link to="/products">click here</router-link>.</span
      >
      <table class="cart-table" v-else>
        <thead>
          <tr class="table-header">
            <th>Item</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id" class="table-row">
            <td>{{ item.name }}</td>
            <td>${{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.price * item.quantity }}</td>
            <td>
              <base-button mode="outline" @click="removeItem(item.productId)"
                >❌</base-button
              >
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-footer">
            <td colspan="3" class="grand-total-text">Grand Total</td>
            <td class="grand-total-amount">${{ calculateGrandTotal }}</td>
          </tr>
        </tfoot>
      </table>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    cart() {
      return this.$store.getters["cart/getCart"];
    },
    cartEmpty() {
      return this.$store.getters["cart/cartEmpty"];
    },
    userName() {
      const userName = this.$store.getters.userName;
      if (userName === "") return "guest";
      else return userName;
    },
    userId() {
      return this.$store.getters.userId;
    },
    calculateGrandTotal() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    async loadCart() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("cart/loadCart", this.$store.getters.userId);
      } catch (err) {
        this.error = "An error occurred. Please try again later";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    async removeItem(id) {
      try {
        await this.$store.dispatch("cart/removeItemFromCart", {
          userId: this.userId,
          productId: id,
        });
        await this.loadCart();
      } catch (err) {
        console.log(err.message);
        this.error = "An error occurred. Please try again later";
      }
    },
  },
  created() {
    this.loadCart();
  },
};
</script>

<style scoped>
.primary-text {
  color: #3f51b5;
}

.background-light {
  background-color: #f5f5f5;
  padding: 1rem;
}

h2 {
  text-align: center;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  background-color: #3f51b5;
  color: #f5f5f5;
}

.table-row {
  border-bottom: 1px solid #f5f5f5;
}

.table-row:nth-child(even) {
  background-color: #f5f5f5;
}

.table-row:hover {
  background-color: #e0e0e0;
}

.dark-text {
  color: #333333;
}

.table-footer {
  font-weight: bold;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.grand-total-text {
  text-align: right;
  padding-right: 1rem;
  color: #3f51b5;
}

.grand-total-amount {
  color: #f44336;
}
</style>
