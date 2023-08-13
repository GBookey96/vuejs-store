<template>
  <div>
    <base-dialog
      :show="!!errors"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ errors }}</p>
    </base-dialog>
    <div class="product-list">
      <base-button link to="/products/add" v-if="isAdmin">
        Add New Product
      </base-button>
      <header>
        <h2>Products</h2>
        <select-category
          @category-selected="onCategorySelected"
          @loading-error="categoryError"
        ></select-category>
        <div class="category-description">{{ categoryDescription }}</div>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <div class="product-grid">
        <product-details
          v-for="p in products"
          :key="p.id"
          :id="p.id"
          :name="p.name"
          :stock="p.stockLevel"
          :description="p.description"
          :category="p.category"
          :price="p.price"
        >
        </product-details>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from "@/Components/Products/ProductDetails.vue";
import SelectCategory from "../../Components/Products/SelectCategory.vue";
import { mapGetters } from "vuex";

export default {
  components: { ProductDetails, SelectCategory },
  data() {
    return {
      isLoading: false,
      errors: null,
      categoryDescription: "Browse all our available products.",
    };
  },
  computed: {
    ...mapGetters("products", ["getProducts"]),
    products() {
      return this.getProducts;
    },
    isAdmin() {
      return this.$store.getters["isAdmin"];
    },
  },
  methods: {
    async loadProducts() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("products/loadProducts");
        this.isLoading = false;
      } catch (error) {
        this.errors = "An error occurred. Please try again later";
      }
    },
    async onCategorySelected(category) {
      try {
        this.isLoading = true;
        await this.$store.dispatch(
          "products/updateFilteredProducts",
          +category.categoryId
        );
        this.categoryDescription = category.categoryDescription;

        this.isLoading = false;
      } catch (error) {
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
  mounted() {
    this.loadProducts();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.category-description {
  font-size: 16px;
  margin-top: 10px;
  color: #666;
  text-align: center;
}
</style>
