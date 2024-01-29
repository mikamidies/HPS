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
  data() {
    return {}
  },

  async asyncData({ $axios, query, i18n }) {
    const products = await productsApi.getProducts($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      products,
    };
  },
};
</script>

<style></style>
