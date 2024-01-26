<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Наши партнеры</h4>
      <div class="swiper" ref="partnersSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-2.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-3.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-4.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-5.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-6.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/logo/part-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    new Swiper(this.$refs.partnersSwiper, {
      slidesPerView: 3,
      spaceBetween: 16,
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      },
    });
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 40px;
}
.wrap {
  padding-bottom: 120px;
}
@media screen and (max-width: 1024px) {
  img {
    height: 64px;
  }
  .wrap {
    padding-bottom: 40px;
  }
  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }
}
</style>
