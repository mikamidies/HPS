<template>
  <div class="master">
    <HomeHero />
    <HomePopular :products="products" />
    <HomeCards />
    <HomeServices />
    <HomeWhat />
    <HomeForm />
    <HomeReviews />
    <HomePartners />
    <HomeText />
  </div>
</template>

<script>
import productsApi from "@/api/products.js";

export default {
  async asyncData({ $axios }) {
    const products = await productsApi.getProducts($axios);

    console.log(products);

    return {
      products,
    };
  },
};
</script>

<style></style>
