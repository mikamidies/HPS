<template>
  <div class="master">
    <SiteTop class="site_top" :title="product.title" />

    <div class="face">
      <div class="container">
        <div class="grid">
          <div class="left">
            <div class="swiper smallSwiper" thumbsSlider="">
              <div class="swiper-wrapper">
                <div
                  v-for="thumb in product.images"
                  :key="thumb.id"
                  class="swiper-slide"
                >
                  <img
                    :src="thumb.image"
                    :title="product.title"
                    :alt="product.title"
                  />
                </div>
              </div>
            </div>
            <div class="swiper bigSwiper">
              <div class="swiper-wrapper">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="swiper-slide"
                >
                  <img
                    :src="image.image"
                    :title="product.title"
                    :alt="product.title"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="rigth">
            <h1 class="name">{{ product.title }}</h1>
            <div class="content" v-html="product.desc"></div>
            <button class="order" @click="modalHandle = !modalHandle">
              {{ $store.state.translations["_slug.0_key0"] }}
              <p class="stick"></p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 8L18 12M18 12L14 16M18 12L6 12"
                  stroke="#1AB99D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="similar" v-show="product.other_products.length > 0">
      <div class="container">
        <h4 class="title">{{ $store.state.translations["_slug.3_key3"] }}</h4>
        <div class="items">
          <div
            v-for="item in product.other_products"
            :key="item.id"
            class="cardo"
          >
            <img src="@/assets/img/logo/vector.png" class="vector" />
            <NuxtLink :to="localePath(`/product/${item.slug}`)">
              <div class="content">
                <h2 class="name">{{ item.title }}</h2>
                <p class="sub">{{ item.subtitle }}</p>
                <div class="img">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    :title="item.title"
                  />
                </div>
              </div>
              <button>
                {{ $store.state.translations["_slug.4_key4"] }}
                <p class="stick"></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 8L18 12M18 12L14 16M18 12L6 12"
                    stroke="#1AB99D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="modaller" :class="{ active: modalHandle == true }">
      <div class="space" @click="modalHandle = false"></div>
      <div class="body">
        <img src="@/assets/img/logo/modal.png" alt="" class="left_vector" />

        <button class="x" @click="modalHandle = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
              stroke="#28303F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h4 class="title">Свяжитесь с нами и получите информацию</h4>
        <form @submit.prevent="onSubmit">
          <div class="grid">
            <input
              v-model="full_name"
              type="text"
              :placeholder="$store.state.translations['place.name']"
              required
            />
            <input
              v-model="number"
              type="text"
              :placeholder="$store.state.translations['place.number']"
              required
            />
            <input
              v-model="email"
              type="text"
              :placeholder="$store.state.translations['place.email']"
            />
            <input
              id="filer"
              type="file"
              :placeholder="$store.state.translations['place.tz']"
            />
            <label for="filer" class="file_label">{{
              $store.state.translations["about.11_key11"]
            }}</label>
          </div>
          <div class="footer">
            <div class="checker">
              <input required id="check" type="checkbox" />
              <label for="check">
                {{ $store.state.translations["about.12_key12"] }}
                <span class="green">{{
                  $store.state.translations["place.privacy"]
                }}</span>
              </label>
            </div>
            <button type="submit">
              {{ $store.state.translations["about.14_key14"] }}
              <p class="stick"></p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 8L18 12M18 12L14 16M18 12L6 12"
                  stroke="#1AB99D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>

        <img src="@/assets/img/logo/modal.png" alt="" class="right_vector" />
      </div>
    </div>
  </div>
</template>

<script>
import formApi from "@/api/form.js";
import productsApi from "@/api/products.js";

import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  layout: "white",

  data() {
    return {
      title: this.$store.state.translations["site.products"],
      modalHandle: false,

      full_name: "",
      number: "",
      email: "",

      token: "6273572946:AAFPB99kVWMrOWoR9NCHoO3ziAzv0Nh1WTM",
      chatId: "-1002084026037",
    };
  },

  async asyncData({ params, $axios, query, i18n }) {
    const product = await productsApi.getProduct(params.slug, $axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      product,
    };
  },

  mounted() {
    const swiper = new Swiper(".smallSwiper", {
      slidesPerView: 4,
      direction: "vertical",
      spaceBetween: 8,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });

    new Swiper(".bigSwiper", {
      slidesPerView: 1,
      thumbs: {
        swiper: swiper,
      },
    });
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        email: this.email,
      };

      const res = await formApi.sendApplication(formData);

      if (res && res.status === 201) {
        this.$notification["success"]({
          message: "Успешно отправлено",
        });
      } else {
        this.$notification["error"]({
          message: "Ошибка",
        });
      }

      const message = `Name: ${this.full_name}%0APhone Number: ${this.number}`;

      this.$axios
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
        )
        .then((response) => {
          console.log("Successfully", response);
          this.full_name = "";
          this.number = "";
          this.email = "";
        }),
        (error) => {
          console.log(error);
        };
    },
  },
};
</script>

<style scoped>
.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.left_vector {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transform: rotate(180deg);
}
.right_vector {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}
.modaller.active {
  display: flex;
}
.modaller .title {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
  width: 514px;
  margin: 0 auto 40px auto;
}
.modaller .body {
  border-radius: 40px;
  border: 1px solid var(--Dark-service, #12151c);
  background: var(--Server-BG, #080b12);
  width: 1332px;
  margin: 0 auto;
  padding: 64px 0;
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.x {
  position: absolute;
  top: 32px;
  right: 32px;
  border-radius: 40px;
  background: var(--Sertver-title, #b6bfd3);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  border-radius: 16px;
  background: var(--Dark-service, #12151c);
  padding: 32px;
  max-width: 772px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 28px;
  row-gap: 40px;
}

input,
.file_label {
  border-bottom: 1px solid var(--Dark-Border-server, #313641);
  padding: 12px 0;
  color: var(--Sertver-title, #b6bfd3);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

label {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
}

.checker {
  max-width: 277px;
  display: flex;
  align-items: center;
  gap: 8px;
}

form button {
  border-radius: 8px;
  border: 1px solid var(--green);
  background: #12151c;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}

#filer {
  display: none;
}

.smallSwiper {
  height: 500px;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 20px;
}

.left {
  min-width: 0;
  display: grid;
  grid-template-columns: 1.8fr 8.2fr;
  gap: 16px;
}

.bigSwiper {
  width: 100%;
  height: 600px;
  border: 1px solid #ebebeb;
  border-radius: 16px;
}

.smallSwiper .swiper-slide {
  border: 1px solid #ebebeb;
  border-radius: 8px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide img {
  width: 100%;
  height: 80%;
  object-fit: contain;
}

.smallSwiper .swiper-slide-thumb-active {
  border-color: var(--green);
}

.name {
  margin-bottom: 40px;
  color: #000;
  font-family: var(--medium);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 38.4px */
}

.content::v-deep p {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  display: flex;
  margin-bottom: 24px;
}

.content p:last-child {
  margin: 0;
}

.order {
  border-radius: 8px;
  border: 1px solid var(--green);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  transition: 0.2s;
  margin-top: 40px;
}

.order:hover {
  background: var(--green);
  border-color: var(--green);
  color: white;
}

.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}

.order:hover .stick {
  background: white;
}

.order:hover svg path {
  stroke: white;
}

.face {
  margin-bottom: 120px;
}

.cardo {
  border-radius: 16px;
  background: var(--Server-white-grey, #f3f5f7);
  padding: 24px;
  height: 600px;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
}

.vector {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(40%) scale(1.6);
  opacity: 0;
  transition: 0.3s;
}

.cardo:hover .vector {
  opacity: 0.3;
}

.cardo:hover {
  background: var(--green);
  color: white;
}

.cardo a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
}

.name {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 33.6px */
  margin-bottom: 16px;
  transition: 0.3s;
}

.sub {
  overflow: hidden;
  color: var(--Dark-Border-server, #313641);
  text-overflow: ellipsis;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  height: 52px;
  overflow: hidden;
  transition: 0.3s;
  margin-bottom: 52px;

  display: -webkit-box !important;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.img img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  transition: 0.5s;
}

.cardo button {
  margin-top: 44px;
  border-radius: 8px;
  border: 1px solid var(--Server-border-color, #d2d7df);
  background: var(--Server-white-grey, #f3f5f7);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  transition: 0.2s;
  position: absolute;
  left: 0;
  bottom: 0;
}

.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}

.cardo:hover .sub {
  height: initial;
}

.cardo:hover .img img {
  transform: translateY(150%);
  /* opacity: 0; */
  /* height: 0; */
}

.cardo:hover .name,
.cardo:hover .sub {
  color: white;
}

.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.similar {
  margin-bottom: 120px;
}

.similar .title {
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 57.6px */
  margin-bottom: 40px;
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .smallSwiper,
  .bigSwiper {
    height: 320px;
  }

  .content p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .face {
    margin-bottom: 40px;
  }

  .similar .title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .cardo {
    border-radius: 12px;
    padding: 12px;
    height: auto;
  }

  .sub {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 12px;
    height: auto;
    font-size: 14px;
  }

  .name {
    font-size: 16px;
  }

  .img img {
    height: 160px;
  }

  .cardo button {
    justify-content: center;
    position: static;
    margin-top: 12px;
    padding: 8px 12px;
  }

  .cardo button .stick,
  .cardo button svg {
    display: none;
  }

  .cardo:hover .img img {
    transform: translateY(0);
  }

  .similar {
    margin-bottom: 40px;
  }

  .sub {
    display: -webkit-box !important;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    margin-bottom: 12px !important;
    height: auto !important;
    font-size: 14px !important;
  }
  .right_vector,
  .left_vector {
    display: none;
  }
  .modaller .body {
    margin: 0 16px;
    border-radius: 16px;
  }
  .modaller .title {
    font-size: 24px;
    width: initial;
    margin-bottom: 16px;
  }
  .footer {
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    align-items: flex-start;
  }
  .x {
    top: 24px;
    right: 24px;
    width: 32px;
    height: 32px;
  }
  form {
    max-width: 90%;
    padding: 16px;
  }
}
</style>
