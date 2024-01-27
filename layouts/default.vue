<template>
  <div class="site">
    <DesktopNavbar class="dark" />
    <main class="main">
      <nuxt />
    </main>
    <HomeFeedback />
    <DesktopFooter />
  </div>
</template>

<script>
import translationsApi from "@/api/translations.js";

export default {
  data() {
    return {
      translations: [],
    };
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      // headers: {
      //   Language: this.$i18n.locale,
      // },
    });

    await this.$store.commit("getTranslations", translations.data);
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(this.$axios, {
        // headers: {
        //   Language: this.$i18n.locale,
        // },
      });

      await this.$store.commit("getTranslations", translations.data);
    },
  },

  async mounted() {},
};
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  flex: 1;
}
.dark {
  display: block;
}
@media screen and (max-width: 1024px) {
  .dark {
    /* display: none; */
  }
}
</style>
