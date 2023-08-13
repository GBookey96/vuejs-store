<template>
  <base-card>
    <h2>Admin Area</h2>
    <section>
      <h4>Products</h4>
      <base-button link to="/products/add">Add Product</base-button>
      <base-button link to="/products/edit">Edit Product</base-button>
      <base-button link to="/products/remove">Remove Product</base-button>
    </section>
    <hr />
    <section>
      <h4>Categories</h4>
      <base-button link to="/categories"
        >Add/Edit/Delete Categories</base-button
      >
    </section>
  </base-card>
</template>

<script>
export default {};
</script>

<style scoped></style>
