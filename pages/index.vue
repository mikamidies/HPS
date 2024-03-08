<template>
  <div class="master">
    <HomeHero />
    <HomePopular :products="products" />
    <HomeCards :info="info" />
    <HomeServices :services="services" />
    <HomeWhat />
    <HomeForm />
    <HomeReviews :reviews="reviews" />
    <HomePartners :partners="partners" />
    <HomeText />
  </div>
</template>

<script>
import productsApi from "@/api/products.js";
import servicesApi from "@/api/services.js";
import partnersApi from "@/api/partners.js";
import reviewsApi from "@/api/reviews.js";
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

    const services = await servicesApi.getServices($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    const partners = await partnersApi.getPartners($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    const reviews = await reviewsApi.getReviews($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      products,
      services,
      partners,
      reviews,
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;
  },
};
</script>

<style></style>
