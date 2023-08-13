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
      <h2>Add New Product</h2>
      <form @submit.prevent="submitForm">
        <!-- Name Input -->
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model.trim="name" />
        </div>

        <!-- Price Input -->
        <div class="form-control">
          <label for="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            v-model.trim="price"
            step="0.01"
          />
        </div>

        <!-- Description Input -->
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            v-model.trim="description"
          ></textarea>
        </div>

        <!-- Stock Level Input -->
        <div class="form-control">
          <label for="stockLevel">Stock Level</label>
          <input
            type="number"
            name="stockLevel"
            id="stockLevel"
            v-model.trim="stockLevel"
          />
        </div>

        <h3>Choose a Category:</h3>
        <!-- Category Radio Buttons -->
        <div class="form-control" v-for="c in categories" :key="c.categoryId">
          <label>
            <input
              type="radio"
              name="category"
              :value="c.categoryId"
              v-model="selectedCategory"
            />
            {{ c.categoryName }}
          </label>
        </div>

        <!-- Submit Button -->
        <base-button :disabled="!!errors">Add Product</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      price: null,
      description: null,
      stockLevel: null,
      selectedCategory: null,
      errors: null,
    };
  },
  methods: {
    submitForm() {
      console.log("hi");
      const newProd = {
        name: this.name,
        price: this.price,
        description: this.description,
        stockLevel: this.stockLevel,
        category: +this.selectedCategory,
      };
      try {
        this.$store.dispatch("products/addProduct", newProd);
        this.$router.replace("/products");
      } catch (err) {
        this.errors = "An error occurred. Please try again later";
      }
    },
    handleError() {
      this.errors = null;
    },
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
  },
  async created() {
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
