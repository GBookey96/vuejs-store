<template>
  <div>
    <strong>Filter by Category</strong>
    <select v-model="selectedCategory" name="" id="" @change="emitCategory">
      <option :value="allCategories">All Categories</option>
      <option v-for="c in categories" :key="c.categoryId" :value="c">
        {{ c.categoryName }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedCategory: null,
      loadingError: null,
      allCategories: {
        categoryDescription: "Browse all our available products.",
        categoryId: 0,
        categoryName: "All Categories",
      },
    };
  },
  computed: {
    ...mapGetters(["products", "getCategories"]),
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
  },
  methods: {
    emitCategory() {
      this.$emit("category-selected", this.selectedCategory);
    },
    async loadCategories() {
      try {
        await this.$store.dispatch("categories/loadCategories");
      } catch (error) {
        this.loadingError = error.message;
        this.$emit("loading-error", error);
      }
    },
  },
  mounted() {
    this.loadCategories();
  },
};
</script>

<style scoped></style>
