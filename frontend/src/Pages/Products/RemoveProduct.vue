<template>
  <div>
    <base-dialog
      :show="!!errors"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ errors }}</p>
    </base-dialog>
    <base-card>
      <h2>Remove Product</h2>
      <form @submit.prevent="submitForm">
        <div class="form-control select">
          <select-category
            @category-selected="onCategorySelected"
            @loading-error="categoryError"
          ></select-category>
        </div>
        <div class="form-control flex-container">
          <label v-for="p in products" :key="p.id" class="flex-item">
            <input
              type="radio"
              name="selectedProduct"
              :value="p.id"
              v-model="selectedProduct"
            />
            {{ p.name }}
          </label>
        </div>
        <base-button :disabled="!!errors">Remove Product</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SelectCategory from "../../Components/Products/SelectCategory.vue";

export default {
  components: { SelectCategory },
  data() {
    return {
      selectedProduct: null,
      errors: null,
    };
  },
  methods: {
    async onCategorySelected(category) {
      try {
        this.isLoading = true;
        await this.$store.dispatch(
          "products/updateFilteredProducts",
          +category.categoryId
        );
        this.isLoading = false;
      } catch (error) {
        this.errors = "An error occurred. Please try again later";
      }
    },
    submitForm() {
      try {
        this.$store.dispatch("products/deleteProduct", this.selectedProduct);
        this.$router.replace("/products");
      } catch (err) {
        this.errors = "An error occurred. Please try again later";
      }
    },
    handleError() {
      this.errors = null;
    },
    categoryError() {
      this.errors = "An error occurred. Please try again later";
    },
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
    }),
  },
  async created() {
    try {
      this.isLoading = true;
      await this.$store.dispatch("products/loadProducts");
      this.isLoading = false;
    } catch (error) {
      this.errors = "An error occurred. Please try again later";
    }
  },
};
</script>

<style scoped>
form {
  width: 100%;
}

.select {
  padding: 20px;
}

.form-control {
  margin: 0.5rem 0;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #333333;

  flex-basis: calc(33.33% - 1rem); /* Adjust as needed */
  margin-bottom: 0.5rem;
}

input {
  margin-right: 5px;
  border: 1px solid #ccc;
}
</style>
