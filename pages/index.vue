<template>
  <div class="master">
    <HomeHero />
    <HomePopular :products="products" />
    <HomeCards :info="info" />
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
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      info: "",
    };
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

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;
  },
};
</script>

<style></style>
