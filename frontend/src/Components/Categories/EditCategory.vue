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
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <select-category @category-selected="setValues"></select-category>
          <div class="form-control">
            <label for=""> Category Name </label>
            <input type="text" name="" id="" v-model.trim="categoryName" />
          </div>
          <div class="form-control">
            <label for=""> Category Description </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              v-model.trim="categoryDescription"
            ></textarea>
          </div>
        </div>

        <base-button>Update category</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import SelectCategory from "../Products/SelectCategory.vue";
// import { mapGetters } from "vuex";
export default {
  components: { SelectCategory },
  data() {
    return {
      categoryId: null,
      categoryName: null,
      categoryDescription: null,
      errors: null,
    };
  },
  methods: {
    setValues(category) {
      this.categoryId = category.categoryId;
      this.categoryName = category.categoryName;
      this.categoryDescription = category.categoryDescription;
    },
    async submitForm() {
      const updatedCategory = {
        categoryId: this.categoryId,
        categoryName: this.categoryName,
        categoryDescription: this.categoryDescription,
      };
      try {
        await this.$store.dispatch("categories/editCategory", updatedCategory);
        this.$router.replace("/products");
      } catch (err) {
        this.errors = "An error occurred. Please try again later";
      }
    },
    handleError() {
      this.errors = null;
    },
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

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #333333;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  background-color: #f5f5f5;
  color: #333333;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3f51b5;
}
</style>
