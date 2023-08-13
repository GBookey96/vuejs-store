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
      <h2>Remove Category</h2>
      <form @submit.prevent="submitForm">
        <div class="form-control flex-container">
          <label v-for="c in categories" :key="c.categoryId" class="flex-item">
            <input
              type="radio"
              name="selectedCategory"
              :value="c.categoryId"
              v-model="selectedCategory"
            />
            {{ c.categoryName }}
          </label>
        </div>
        <base-button :disabled="!!errors">Remove Category</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      errors: null,
      selectedCategory: null,
    };
  },
  methods: {
    handleError() {
      this.errors = null;
    },
    async submitForm() {
      try {
        await this.$store.dispatch(
          "categories/removeCategory",
          this.selectedCategory
        );
        this.$router.replace("/products");
      } catch (err) {
        this.errors = "An error occurred. Please try again later";
      }
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories/getCategories",
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch("categories/loadCategories");
    } catch (err) {
      this.errors = "An error occurred. Please try again later";
    }
  },
};
</script>

<style scoped>
form {
  width: 100%;
}

.form-control {
  margin: 0.5rem 0;
}
</style>
