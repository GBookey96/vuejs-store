<template>
  <div>
    <base-dialog title="An error occured" :show="!!error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner
    ></base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control" v-if="mode === 'Register'">
          <label for="name">Name</label>
          <input
            type="name"
            name="name"
            id="name"
            v-model.trim="userName"
            autofocus
          />
        </div>
        <div class="form-control">
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model.trim="userEmail"
            autofocus
          />
        </div>
        <div class="form-control">
          <label for="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="userPassword"
          />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email address and password (must be at least 6
          characters long).
        </p>
        <base-button>{{ mode }}</base-button>
        <base-button type="button" mode="flat" @click="changeCaption">{{
          modeBtnCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "Login",
      userName: "",
      userEmail: "",
      userPassword: "",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    handleError() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;

      if (this.userEmail === "" || this.userPassword.length < 6) {
        this.formIsValid = false;
        return;
      }

      if (this.mode === "Register") {
        if (this.userName === "") {
          this.formIsValid = false;
          return;
        }
      }
      this.isLoading = true;
      try {
        let actionPayload = {
          userEmail: this.userEmail,
          userPassword: this.userPassword,
          userName: this.userName,
        };
        const action = this.mode === "Login" ? "login" : "register";
        await this.$store.dispatch(action, actionPayload);
        this.isLoading = false;

        this.$router.replace("/products");
      } catch (err) {
        this.error = "An error occurred. Please try again later";
      }
    },
    changeCaption() {
      if (this.mode === "Login") this.mode = "Register";
      else this.mode = "Login";
    },
  },
  computed: {
    modeBtnCaption() {
      if (this.mode === "Login")
        return "Don't have an account yet? Click here to register";
      else return "Already have an account? Click here to login";
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
