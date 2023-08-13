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
      <base-button @click="chooseAction('add')">Add Category</base-button>
      <base-button @click="chooseAction('edit')">Edit Category</base-button>
      <base-button @click="chooseAction('remove')">Remove Category</base-button>
    </base-card>

    <add-category v-if="action === 'add'"></add-category>
    <edit-category v-if="action === 'edit'"></edit-category>
    <remove-category v-if="action === 'remove'"></remove-category>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddCategory from "../../Components/Categories/AddCategory.vue";
import EditCategory from "../../Components/Categories/EditCategory.vue";
import RemoveCategory from "../../Components/Categories/RemoveCategory.vue";

export default {
  components: { AddCategory, EditCategory, RemoveCategory },
  data() {
    return {
      errors: null,
      action: null,
    };
  },
  methods: {
    setValues() {},
    chooseAction(action) {
      this.action = action;
    },
    handleError() {
      this.errors = null;
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories/getCategories",
    }),
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
