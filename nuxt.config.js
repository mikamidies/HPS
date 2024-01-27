export default {
  head: {
    title: "HPS",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/css/main.css",
    "@/assets/css/white.css",
  ],

  plugins: ["@/plugins/antd-ui"],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/i18n", "@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },

  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },
};
