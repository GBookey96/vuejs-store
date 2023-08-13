<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <div class="form-control">
          <label for=""> Category Name </label>
          <input type="text" name="" id="" v-model.trim="catName" />
        </div>
        <div class="form-control">
          <label for=""> Category Description </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model.trim="catDescription"
          ></textarea>
        </div>
      </div>

      <base-button>Add category</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {},
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
