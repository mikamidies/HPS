<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">{{$store.state.translations['HomeReviews.0_key0']}}</h4>
      <div class="bordered">
        <div class="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 16L18 12M18 12L14 8M18 12L6 12"
              stroke="#1AB99D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="swiper" ref="reviewsSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="cardo">
                <div class="header">
                  <p class="name">{{$store.state.translations['HomeReviews.1_key1']}}</p>

                  <p class="stars">
                    5
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.68846 2.1811C7.22492 1.05096 8.77492 1.05096 9.31138 2.1811L10.2385 4.13428C10.4515 4.58306 10.8633 4.89412 11.3397 4.96609L13.4128 5.27929C14.6124 5.46052 15.0913 6.99319 14.2233 7.87288L12.7232 9.39322C12.3785 9.74255 12.2212 10.2459 12.3026 10.7391L12.6567 12.8859C12.8616 14.128 11.6077 15.0753 10.5347 14.4888L8.68047 13.4752C8.25442 13.2423 7.74542 13.2423 7.31937 13.4752L5.46509 14.4888C4.39218 15.0753 3.1382 14.128 3.34311 12.8859L3.69724 10.7391C3.77861 10.2459 3.62133 9.74255 3.27664 9.39322L1.7765 7.87289C0.908496 6.99319 1.38747 5.46052 2.58703 5.27929L4.66017 4.96609C5.13651 4.89412 5.5483 4.58306 5.76132 4.13428L6.68846 2.1811Z"
                        fill="#1AB99D"
                      />
                    </svg>
                  </p>
                </div>
                <div class="content">
                  <p>
                    {{$store.state.translations['HomeReviews.3_key3']}}
                    {{$store.state.translations['HomeReviews.4_key4']}}
                    {{$store.state.translations['HomeReviews.5_key5']}}
                    {{$store.state.translations['HomeReviews.6_key6']}}
                    {{$store.state.translations['HomeReviews.7_key7']}}
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cardo">
                <div class="header">
                  <p class="name">{{$store.state.translations['HomeReviews.1_key1']}}</p>

                  <p class="stars">
                    5
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.68846 2.1811C7.22492 1.05096 8.77492 1.05096 9.31138 2.1811L10.2385 4.13428C10.4515 4.58306 10.8633 4.89412 11.3397 4.96609L13.4128 5.27929C14.6124 5.46052 15.0913 6.99319 14.2233 7.87288L12.7232 9.39322C12.3785 9.74255 12.2212 10.2459 12.3026 10.7391L12.6567 12.8859C12.8616 14.128 11.6077 15.0753 10.5347 14.4888L8.68047 13.4752C8.25442 13.2423 7.74542 13.2423 7.31937 13.4752L5.46509 14.4888C4.39218 15.0753 3.1382 14.128 3.34311 12.8859L3.69724 10.7391C3.77861 10.2459 3.62133 9.74255 3.27664 9.39322L1.7765 7.87289C0.908496 6.99319 1.38747 5.46052 2.58703 5.27929L4.66017 4.96609C5.13651 4.89412 5.5483 4.58306 5.76132 4.13428L6.68846 2.1811Z"
                        fill="#1AB99D"
                      />
                    </svg>
                  </p>
                </div>
                <div class="content">
                  <p>
                    {{$store.state.translations['HomeReviews.3_key3']}}
                    {{$store.state.translations['HomeReviews.4_key4']}}
                    {{$store.state.translations['HomeReviews.5_key5']}}
                    {{$store.state.translations['HomeReviews.6_key6']}}
                    {{$store.state.translations['HomeReviews.7_key7']}}
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cardo">
                <div class="header">
                  <p class="name">{{$store.state.translations['HomeReviews.1_key1']}}</p>

                  <p class="stars">
                    5
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.68846 2.1811C7.22492 1.05096 8.77492 1.05096 9.31138 2.1811L10.2385 4.13428C10.4515 4.58306 10.8633 4.89412 11.3397 4.96609L13.4128 5.27929C14.6124 5.46052 15.0913 6.99319 14.2233 7.87288L12.7232 9.39322C12.3785 9.74255 12.2212 10.2459 12.3026 10.7391L12.6567 12.8859C12.8616 14.128 11.6077 15.0753 10.5347 14.4888L8.68047 13.4752C8.25442 13.2423 7.74542 13.2423 7.31937 13.4752L5.46509 14.4888C4.39218 15.0753 3.1382 14.128 3.34311 12.8859L3.69724 10.7391C3.77861 10.2459 3.62133 9.74255 3.27664 9.39322L1.7765 7.87289C0.908496 6.99319 1.38747 5.46052 2.58703 5.27929L4.66017 4.96609C5.13651 4.89412 5.5483 4.58306 5.76132 4.13428L6.68846 2.1811Z"
                        fill="#1AB99D"
                      />
                    </svg>
                  </p>
                </div>
                <div class="content">
                  <p>
                    {{$store.state.translations['HomeReviews.3_key3']}}
                    {{$store.state.translations['HomeReviews.4_key4']}}
                    {{$store.state.translations['HomeReviews.19_key19']}}
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cardo">
                <div class="header">
                  <p class="name">{{$store.state.translations['HomeReviews.1_key1']}}</p>

                  <p class="stars">
                    5
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.68846 2.1811C7.22492 1.05096 8.77492 1.05096 9.31138 2.1811L10.2385 4.13428C10.4515 4.58306 10.8633 4.89412 11.3397 4.96609L13.4128 5.27929C14.6124 5.46052 15.0913 6.99319 14.2233 7.87288L12.7232 9.39322C12.3785 9.74255 12.2212 10.2459 12.3026 10.7391L12.6567 12.8859C12.8616 14.128 11.6077 15.0753 10.5347 14.4888L8.68047 13.4752C8.25442 13.2423 7.74542 13.2423 7.31937 13.4752L5.46509 14.4888C4.39218 15.0753 3.1382 14.128 3.34311 12.8859L3.69724 10.7391C3.77861 10.2459 3.62133 9.74255 3.27664 9.39322L1.7765 7.87289C0.908496 6.99319 1.38747 5.46052 2.58703 5.27929L4.66017 4.96609C5.13651 4.89412 5.5483 4.58306 5.76132 4.13428L6.68846 2.1811Z"
                        fill="#1AB99D"
                      />
                    </svg>
                  </p>
                </div>
                <div class="content">
                  <p>
                    {{$store.state.translations['HomeReviews.3_key3']}}
                    {{$store.state.translations['HomeReviews.4_key4']}}
                    {{$store.state.translations['HomeReviews.24_key24']}}
                  </p>
                </div>
              </div>
            </div>
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
    new Swiper(this.$refs.reviewsSwiper, {
      slidesPerView: 1.2,
      spaceBetween: 8,
      navigation: {
        nextEl: ".next",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
  background: var(--Server-BG, #080b12);
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
.bordered {
  border-radius: 16px;
  border: 1px solid var(--Dark-Border-server, #313641);
  background: var(--Server-BG, #080b12);
  padding: 40px;
  position: relative;
}
.bordered::after {
  background: linear-gradient(270deg, #080b12 0%, rgba(8, 11, 18, 0) 100%);
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 460px;
  height: 100%;
  z-index: 99;
  pointer-events: none;
  border-radius: 0 16px 16px 0;
}
.cardo {
  background: var(--Dark-service, #12151c);
  padding: 40px;
  border-radius: 8px;
  height: 100%;
  min-height: 323px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.name {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}
.stars {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Server-green, #1ab99d);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.content {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.next {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  z-index: 100;
  width: 56px;
  height: 56px;
  border-radius: 45px;
  border: 1px solid var(--Dark-Border-server, #313641);
  background: var(--Dark-service, #12151c);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 32px;
    margin-bottom: 24px;
  }
  .bordered {
    padding: 20px;
  }
  .cardo {
    padding: 12px;
  }
  .name {
    font-size: 16px;
  }
  .content p {
    font-size: 14px;
  }
  .next {
    right: 12px;
    width: 32px;
    height: 32px;
  }
  .bordered::after {
    width: 30%;
  }
  .header {
    margin-bottom: 16px;
  }
  .wrap {
    padding-bottom: 40px;
  }
}
</style>
