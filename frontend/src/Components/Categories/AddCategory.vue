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

        <base-button>Add category</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryName: null,
      categoryDescription: null,
      errors: null,
    };
  },
  methods: {
    async submitForm() {
      const newCategory = {
        categoryName: this.categoryName,
        categoryDescription: this.categoryDescription,
      };

      try {
        await this.$store.dispatch("categories/addCategory", newCategory);
        this.$router.replace("products");
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

/* Add spacing between radio buttons */
input[type="radio"] + label {
  margin-bottom: 0.5rem;
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

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3f51b5 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #3f51b5;
}

.invalid label {
  color: #f44336;
}

.invalid input,
.invalid textarea {
  border: 1px solid #f44336;
}
</style>
