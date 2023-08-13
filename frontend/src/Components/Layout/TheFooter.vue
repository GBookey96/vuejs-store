<template>
  <footer>© {{ thisYear }} Gershon Bookey</footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  background-color: #3f51b5; /* Primary Color */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
