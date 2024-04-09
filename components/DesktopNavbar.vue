<template>
  <div class="wrap" id="navbar">
    <div class="top">
      <div class="container">
        <div class="left">
          <a :href="`tel:${phoneArray[0]}`" class="value">
            {{ phoneArray[0] }}
          </a>
          <a :href="`tel:${phoneArray[1]}`" class="value">
            {{ phoneArray[1] }}
          </a>
        </div>
        <div class="right">
          <div class="lang">
            <p class="current">
              <span v-if="$i18n.locale == 'ru'"> Ру </span>
              <span v-if="$i18n.locale == 'en'"> En </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.345232 0.942921C0.560863 0.673382 0.954171 0.629681 1.22371 0.845312L4.99994 3.8663L8.77617 0.845312C9.04571 0.629681 9.43902 0.673382 9.65465 0.942921C9.87028 1.21246 9.82658 1.60577 9.55704 1.8214L5.39038 5.15473C5.16211 5.33734 4.83777 5.33734 4.60951 5.15473L0.442841 1.8214C0.173302 1.60577 0.129601 1.21246 0.345232 0.942921Z"
                  fill="white" />
              </svg>
            </p>

            <div class="drop">
              <NuxtLink :to="switchLocalePath('ru')">{{ $store.state.translations["DesktopNavbar.0_key0"] }}
              </NuxtLink>
              <NuxtLink :to="switchLocalePath('en')">{{ $store.state.translations["DesktopNavbar.2_key2"] }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="left">
          <NuxtLink class="basic" :to="localePath('/')">
            <img src="@/assets/img/logo/brand.svg" alt="" />
          </NuxtLink>

          <NuxtLink class="black" :to="localePath('/')">
            <img src="@/assets/img/logo/black.svg" alt="" />
          </NuxtLink>
        </div>
        <button class="burger" @click="menuHandle = !menuHandle">
          <div class="pick"></div>
        </button>
        <div class="right" :class="{ active: menuHandle == true }">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath('/')">
                {{ $store.state.translations["DesktopFooter.0_key0"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')">
                {{ $store.state.translations["about.0_key0"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/delivery')">
                {{ $store.state.translations["delivery.0_key0"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/products')">
                {{ $store.state.translations["DesktopFooter.2_key2"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/config">
                {{ $store.state.translations["DesktopFooter.3_key3"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contacts')">
                {{ $store.state.translations["DesktopFooter.5_key5"] }}
              </NuxtLink>
            </li>
          </ul>
          <p class="stick"></p>
          <div class="search" @click="searchHandle = !searchHandle">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M22 22.5L20 20.5M2 12C2 6.75329 6.25329 2.5 11.5 2.5C16.7467 2.5 21 6.75329 21 12C21 17.2467 16.7467 21.5 11.5 21.5C6.25329 21.5 2 17.2467 2 12Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="mobile">
            <div class="searcher">
              <button @click="searchHandle = !searchHandle">
                <p>{{ $store.state.translations["DesktopNavbar.10_key10"] }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path
                    d="M22 22.5L20 20.5M2 12C2 6.75329 6.25329 2.5 11.5 2.5C16.7467 2.5 21 6.75329 21 12C21 17.2467 16.7467 21.5 11.5 21.5C6.25329 21.5 2 17.2467 2 12Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="langer">
              <NuxtLink :to="switchLocalePath('ru')">{{ $store.state.translations["DesktopNavbar.0_key0"] }}
              </NuxtLink>
              <NuxtLink :to="switchLocalePath('en')">{{ $store.state.translations["DesktopNavbar.2_key2"] }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown" :class="{ active: searchHandle == true }">
      <button class="x" @click="searchHandle = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
          <path d="M59.5565 28.4437L28.4438 59.5564M59.5565 59.5562L28.4438 28.4435" stroke="white" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="container small">
        <div class="input">
          <input type="text" :placeholder="$store.state.translations['place.search']" v-model="search" />
        </div>
        <div class="products" v-show="products.length > 0">
          <div v-for="item in products" :key="item.id" class="product">
            <NuxtLink :to="localePath(`/product/${item.slug}`)">
              {{ item.title }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsApi from "@/api/products.js";
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      menuHandle: false,
      searchHandle: false,
      products: "",
      search: "",
      info: {},
      phoneArray: [],
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;

    let phoneString = this.info.nbm;

    this.phoneArray = phoneString?.match(/\+\d{3} \d{2} \d{3} \d{2} \d{2}/g);

    if (window.innerWidth > 1024) {
      function scrollHeader() {
        const navbar = document.getElementById("navbar");
        if (this.scrollY >= 50) {
          navbar.classList.add("scroll");
        } else {
          navbar.classList.remove("scroll");
        }
      }
      window.addEventListener("scroll", scrollHeader);
    }
  },

  watch: {
    $route() {
      this.menuHandle = false;
      this.searchHandle = false;
    },

    async search(val) {
      if (val.length > 2) {
        const data = await productsApi.getProducts(this.$axios, {
          params: { search: val },
          headers: {
            language: this.$i18n.locale,
          },
        });

        this.products = data;
      }
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: var(--Server-BG, #080b12);
  border-bottom: 1px solid #ebebeb17;
  transition: 0.3s;
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1000;
}

.dropdown.active {
  transform: translateY(0%);
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}

.x {
  position: absolute;
  top: 40px;
  right: 160px;
}

.wrap.scroll .dropdown {
  transform: translateY(44px);
}

.dropdown .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.input input {
  color: white;
  font-size: 32px;
  font-weight: 400;
  line-height: 150%;
  /* 48px */
  padding-bottom: 24px;
  border-bottom: 1px solid #313641;
  width: 100%;
}

.input input::placeholder {
  color: var(--Sertver-title, #b6bfd3);
  font-style: italic;
}

.input {
  margin-bottom: 40px;
}

.product a {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  padding: 12px 16px;
  border-radius: 800px;
  border: 1px solid var(--Dark-Border-server, #313641);
  display: flex;
}

.products {
  display: flex;
  align-items: center;
  gap: 16px;
}

.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: 0.3s;
}

.top {
  background: var(--dark);
  padding: 12px 0;
}

.top .container,
.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.current,
.left a {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}

.top .left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.num {
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.links a {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  transition: 0.2s;
}

.links a:hover {
  text-decoration: underline;
}

.links a.active {
  color: var(--green);
}

.bottom {
  padding: 32px 0;
  transition: 0.3s;
}

.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom .right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.stick {
  width: 1px;
  height: 16px;
  background: white;
}

.wrap.scroll {
  transform: translateY(-44px);
}

.wrap.scroll .bottom {
  padding: 16px 0;
  background: var(--dark);
  border-bottom: 1px solid #ebebeb17;
}

.burger,
.mobile {
  display: none;
}

.lang {
  position: relative;
}

.drop {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  transition: 0.4s;
}

.lang:hover .drop {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.drop a {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: var(--dark);
}

@media screen and (max-width: 1024px) {

  .burger,
  .mobile {
    display: flex;
  }

  .wrap {
    background: var(--dark);
  }

  .basic {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrap.scroll {
    transform: translateY(0);
  }

  .top {
    display: none;
  }

  .bottom .left img {
    width: 64px;
    height: 40px;
  }

  .links {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
  }

  .right {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--dark);
    height: 100%;
    padding: 24px;
    transition: 0.4s;
    transform: translateX(-100%);
    align-items: flex-start !important;
  }

  .right.active {
    transform: translateX(0);
  }

  .right .stick {
    display: none;
  }

  .search {
    display: none;
  }

  .bottom {
    padding: 16px 0;
  }

  .burger {
    position: relative;
    z-index: 999;
  }

  .burger .pick {
    width: 30px;
    height: 1px;
    background: white;
    position: relative;
  }

  .burger .pick::after {
    width: 30px;
    height: 1px;
    background: white;
    position: absolute;
    top: 10px;
    left: 0;
    content: "";
  }

  .burger .pick::before {
    width: 30px;
    height: 1px;
    background: white;
    position: absolute;
    bottom: 10px;
    left: 0;
    content: "";
  }

  .mobile {
    flex-direction: column;
    gap: 16px;
  }

  .searcher button {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--White, #fff);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 27px */
  }

  .langer {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .langer a {
    color: var(--White, #fff);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 27px */
  }

  .langer a.active {
    color: var(--green);
  }

  .x {
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 64px;
  }

  .x svg {
    width: 64px;
    height: 64px;
  }

  .input input {
    padding: 0 0 12px 0;
    font-size: 16px;
  }

  .products {
    flex-direction: column;
  }

  .dropdown {
    height: 100%;
  }
}
</style>
