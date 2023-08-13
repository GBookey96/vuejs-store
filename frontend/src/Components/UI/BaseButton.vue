<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3f51b5; /* Primary Color */
  border: 1px solid #3f51b5; /* Primary Color */
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041; /* Slightly darker shade of Primary Color */
  border-color: #270041; /* Slightly darker shade of Primary Color */
}

.flat {
  background-color: transparent;
  color: #3f51b5; /* Primary Color */
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #f44336; /* Secondary Color */
  color: #f44336; /* Secondary Color */
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff; /* Lighter shade for hover/active state */
}
</style>
