<template>
  <div class="site white">
    <DesktopNavbar class="white" />
    <main class="main">
      <nuxt />
    </main>
    <HomeFeedback />
    <DesktopFooter />
  </div>
</template>

<script>
import translationsApi from "@/api/translations";

export default {
  data() {
    return {
      translations: [],
    };
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    });

    await this.$store.commit("getTranslations", translations.data);
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },

  watch: {
    async currentLang() {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    },
  },

  mounted() {},
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

@media screen and (max-width: 1024px) {
}
</style>
