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
      slidesPerView: 6,
      spaceBetween: 16,
    });
  },
};
</script>

<style></style>
