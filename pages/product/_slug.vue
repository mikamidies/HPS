<template>
  <div class="master">
    <SiteTop class="site_top" />

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
            <button class="order">
              Заказать товар
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

    <div class="similar">
      <div class="container">
        <h4 class="title">Похожие товары</h4>
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
                Узнать больше
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
  </div>
</template>

<script>
import productsApi from "@/api/products.js";

import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  layout: "white",

  async asyncData({ params, $axios }) {
    const product = await productsApi.getProduct(params.slug, $axios);

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
};
</script>

<style scoped>
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
  line-height: 120%; /* 38.4px */
}
.content::v-deep p {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
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
  line-height: 150%; /* 24px */
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
  line-height: 140%; /* 33.6px */
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
  line-height: 150%; /* 27px */
  height: 52px;
  overflow: hidden;
  transition: 0.3s;
  margin-bottom: 52px;
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
  line-height: 150%; /* 24px */
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
  line-height: 120%; /* 57.6px */
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
}
</style>
