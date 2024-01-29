<template>
  <div class="wrap">
    <div class="top">
      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/img/hero-1.jpg" alt="" class="pic" />
            <div class="container">
              <div class="content">
                <h2 class="title">
                  {{$store.state.translations['about.1_key1']}}
                  <span class="green"> {{$store.state.translations['about.2_key2']}} </span>
                </h2>
                <p class="sub">
                  {{$store.state.translations['delivery.4_key4']}}
                  {{$store.state.translations['HomeHero.3_key3']}}
                </p>
                <div class="buttons">
                  <button @click="scrollElement('contacts')" class="bordered">
                    {{$store.state.translations['HomeHero.4_key4']}}
                    <p class="stick"></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 8L18 12M18 12L14 16M18 12L6 12" stroke="#1AB99D" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <NuxtLink :to="localePath('/about')" class="unbordered">{{$store.state.translations['DesktopFooter.1_key1']}}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/hero-2.jpg" alt="" class="pic" />
            <div class="container">
              <div class="content">
                <h2 class="title">
                  {{$store.state.translations['about.1_key1']}}
                  <span class="green"> {{$store.state.translations['about.2_key2']}} </span>
                </h2>
                <p class="sub">
                  {{$store.state.translations['delivery.4_key4']}}
                  {{$store.state.translations['HomeHero.3_key3']}}
                </p>
                <div class="buttons">
                  <button @click="scrollElement('contacts')" class="bordered">
                    {{$store.state.translations['HomeHero.4_key4']}}
                    <p class="stick"></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 8L18 12M18 12L14 16M18 12L6 12" stroke="#1AB99D" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <NuxtLink :to="localePath('/about')" class="unbordered">{{$store.state.translations['DesktopFooter.1_key1']}}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="  swiper-slide">
            <img src="@/assets/img/hero-3.jpg" alt="" class="pic" />
            <div class="container">
              <div class="content">
                <h2 class="title">
                  {{$store.state.translations['about.1_key1']}}
                  <span class="green"> {{$store.state.translations['about.2_key2']}} </span>
                </h2>
                <p class="sub">
                  {{$store.state.translations['delivery.4_key4']}}
                  {{$store.state.translations['HomeHero.3_key3']}}
                </p>
                <div class="buttons">
                  <button @click="scrollElement('contacts')" class="bordered">
                    {{$store.state.translations['HomeHero.4_key4']}}
                    <p class="stick"></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 8L18 12M18 12L14 16M18 12L6 12" stroke="#1AB99D" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <NuxtLink :to="localePath('/about')" class="unbordered">{{$store.state.translations['DesktopFooter.1_key1']}}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="cards">
          <div class="cardo">
            <div class="cardo_back"></div>
            <NuxtLink :to="localePath('/')">
              <div class="top_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path
                      d="M24 20C24 22.2091 22.2091 24 20 24L0 24L5.24537e-07 18C1.39362e-06 8.05887 8.05888 -1.39362e-06 18 -5.24537e-07L24 0L24 20Z"
                      fill="white" />
                    <rect x="24" y="56" width="24" height="24" rx="4" transform="rotate(180 24 56)" fill="white" />
                    <rect x="56" y="56" width="24" height="24" rx="4" transform="rotate(180 56 56)" fill="white" />
                    <rect x="24" y="88" width="24" height="24" rx="4" transform="rotate(180 24 88)" fill="white" />
                    <rect x="56" y="24" width="24" height="24" rx="4" transform="rotate(180 56 24)" fill="white" />
                    <rect x="88" y="24" width="24" height="24" rx="4" transform="rotate(180 88 24)" fill="white" />
                  </g>
                </svg>
              </div>
              <div class="logo">
                <div class="blur"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
                  <path opacity="0.4"
                    d="M14.6206 33.0397L1.00458 26.8506C-0.298078 26.2585 -0.298076 24.4082 1.00458 23.816L14.6206 17.627C15.497 17.2286 16.5028 17.2286 17.3792 17.627L30.9952 23.816C32.2979 24.4082 32.2979 26.2585 30.9952 26.8506L17.3792 33.0397C16.5028 33.4381 15.497 33.4381 14.6206 33.0397Z"
                    fill="#1AB99D" />
                  <path
                    d="M14.6206 24.7063L1.00458 18.5172C-0.298078 17.9251 -0.298076 16.0748 1.00458 15.4827L14.6206 9.29359C15.497 8.89522 16.5028 8.89522 17.3792 9.29359L30.9952 15.4827C32.2979 16.0748 32.2979 17.9251 30.9952 18.5172L17.3792 24.7063C16.5028 25.1047 15.497 25.1047 14.6206 24.7063Z"
                    fill="#1AB99D" />
                  <path opacity="0.4"
                    d="M14.6206 16.373L1.00458 10.1839C-0.298078 9.5918 -0.298076 7.74148 1.00458 7.14936L14.6206 0.960277C15.497 0.561906 16.5028 0.561907 17.3792 0.960278L30.9952 7.14936C32.2979 7.74148 32.2979 9.5918 30.9952 10.1839L17.3792 16.373C16.5028 16.7714 15.497 16.7714 14.6206 16.373Z"
                    fill="#1AB99D" />
                </svg>
              </div>
              <h2 class="name">{{$store.state.translations['HomeHero.18_key18']}}</h2>
              <p class="desc">
                {{$store.state.translations['HomeHero.19_key19']}}
                {{$store.state.translations['HomeHero.20_key20']}}
              </p>
              <p class="link">{{$store.state.translations['_slug.4_key4']}}</p>
              <div class="bottom_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path d="M64 68C64 65.7909 65.7909 64 68 64L88 64L88 70C88 79.9411 79.9411 88 70 88L64 88L64 68Z"
                      fill="white" />
                    <rect x="64" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="64" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="64" width="24" height="24" rx="4" fill="white" />
                    <rect y="64" width="24" height="24" rx="4" fill="white" />
                  </g>
                </svg>
              </div>
            </NuxtLink>
          </div>
          <div class="cardo">
            <div class="cardo_back"></div>
            <NuxtLink :to="localePath('/')">
              <div class="top_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path
                      d="M24 20C24 22.2091 22.2091 24 20 24L0 24L5.24537e-07 18C1.39362e-06 8.05887 8.05888 -1.39362e-06 18 -5.24537e-07L24 0L24 20Z"
                      fill="white" />
                    <rect x="24" y="56" width="24" height="24" rx="4" transform="rotate(180 24 56)" fill="white" />
                    <rect x="56" y="56" width="24" height="24" rx="4" transform="rotate(180 56 56)" fill="white" />
                    <rect x="24" y="88" width="24" height="24" rx="4" transform="rotate(180 24 88)" fill="white" />
                    <rect x="56" y="24" width="24" height="24" rx="4" transform="rotate(180 56 24)" fill="white" />
                    <rect x="88" y="24" width="24" height="24" rx="4" transform="rotate(180 88 24)" fill="white" />
                  </g>
                </svg>
              </div>
              <div class="logo">
                <div class="blur"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path opacity="0.4"
                    d="M5 16.6666V6.66665C5 4.8257 6.49239 3.33331 8.33334 3.33331H13.2714C14.0788 3.33331 14.8587 3.62637 15.4664 4.15806L17.195 5.67062C17.9184 6.30358 18.3333 7.218 18.3333 8.17921V16.6666C18.3333 18.5076 16.8409 20 15 20H8.33333C6.49238 20 5 18.5076 5 16.6666Z"
                    fill="#F3F5F7" />
                  <path opacity="0.4"
                    d="M21.6667 33.3333V23.3333C21.6667 21.4924 23.1591 20 25.0001 20H29.9381C30.7455 20 31.5255 20.2931 32.1331 20.8247L33.8618 22.3373C34.5851 22.9703 35.0001 23.8847 35.0001 24.8459V33.3333C35.0001 35.1743 33.5077 36.6667 31.6667 36.6667H25.0001C23.1591 36.6667 21.6667 35.1743 21.6667 33.3333Z"
                    fill="#F3F5F7" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M21.25 10C21.25 9.30964 21.8096 8.75 22.5 8.75H26.6667C29.198 8.75 31.25 10.802 31.25 13.3333V15.8333C31.25 16.5237 30.6904 17.0833 30 17.0833C29.3096 17.0833 28.75 16.5237 28.75 15.8333V13.3333C28.75 12.1827 27.8173 11.25 26.6667 11.25H22.5C21.8096 11.25 21.25 10.6904 21.25 10ZM10 22.9167C10.6904 22.9167 11.25 23.4763 11.25 24.1667V26.6667C11.25 27.8173 12.1827 28.75 13.3333 28.75H17.5C18.1904 28.75 18.75 29.3096 18.75 30C18.75 30.6904 18.1904 31.25 17.5 31.25H13.3333C10.802 31.25 8.75 29.198 8.75 26.6667V24.1667C8.75 23.4763 9.30964 22.9167 10 22.9167Z"
                    fill="#F3F5F7" />
                </svg>
              </div>
              <h2 class="name">{{$store.state.translations['HomeHero.22_key22']}} </h2>
              <p class="desc">
                {{$store.state.translations['HomeHero.19_key19']}}
                {{$store.state.translations['HomeHero.20_key20']}}
              </p>
              <p class="link">{{$store.state.translations['_slug.4_key4']}}</p>
              <div class="bottom_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path d="M64 68C64 65.7909 65.7909 64 68 64L88 64L88 70C88 79.9411 79.9411 88 70 88L64 88L64 68Z"
                      fill="white" />
                    <rect x="64" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="64" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="64" width="24" height="24" rx="4" fill="white" />
                    <rect y="64" width="24" height="24" rx="4" fill="white" />
                  </g>
                </svg>
              </div>
            </NuxtLink>
          </div>
          <div class="cardo">
            <div class="cardo_back"></div>
            <NuxtLink :to="localePath('/')">
              <div class="top_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path
                      d="M24 20C24 22.2091 22.2091 24 20 24L0 24L5.24537e-07 18C1.39362e-06 8.05887 8.05888 -1.39362e-06 18 -5.24537e-07L24 0L24 20Z"
                      fill="white" />
                    <rect x="24" y="56" width="24" height="24" rx="4" transform="rotate(180 24 56)" fill="white" />
                    <rect x="56" y="56" width="24" height="24" rx="4" transform="rotate(180 56 56)" fill="white" />
                    <rect x="24" y="88" width="24" height="24" rx="4" transform="rotate(180 24 88)" fill="white" />
                    <rect x="56" y="24" width="24" height="24" rx="4" transform="rotate(180 56 24)" fill="white" />
                    <rect x="88" y="24" width="24" height="24" rx="4" transform="rotate(180 88 24)" fill="white" />
                  </g>
                </svg>
              </div>
              <div class="logo">
                <div class="blur"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M23.5 6.66667H26.5C28.433 6.66667 30 8.23367 30 10.1667C30 11.4553 28.9553 12.5 27.6667 12.5H22.3333C21.0447 12.5 20 11.4553 20 10.1667C20 8.23367 21.567 6.66667 23.5 6.66667Z"
                    fill="#1AB99D" />
                  <path
                    d="M28.3333 3.33333C28.3333 5.17428 26.8409 6.66667 25 6.66667C23.1591 6.66667 21.6667 5.17428 21.6667 3.33333C21.6667 1.49238 23.1591 0 25 0C26.8409 0 28.3333 1.49238 28.3333 3.33333Z"
                    fill="#1AB99D" />
                  <path opacity="0.4"
                    d="M30 26.6667V23.9234C30 22.5604 29.1702 21.3347 27.9046 20.8285L24.5144 19.4724C22.9048 18.8286 21.0703 19.526 20.295 21.0766L20 21.6667C20 21.6667 15.8333 20.8333 12.5 17.5C9.16667 14.1667 8.33333 10 8.33333 10L8.92336 9.70499C10.474 8.92968 11.1714 7.09523 10.5276 5.48559L9.17148 2.09537C8.66527 0.829838 7.43957 0 6.07656 0H3.33333C1.49238 0 0 1.49238 0 3.33333C0 18.0609 11.9391 30 26.6667 30C28.5076 30 30 28.5076 30 26.6667Z"
                    fill="#1AB99D" />
                </svg>
              </div>
              <h2 class="name">{{$store.state.translations['HomeCards.18_key18']}}</h2>
              <p class="desc">
                {{$store.state.translations['HomeHero.19_key19']}}
                {{$store.state.translations['HomeHero.20_key20']}}
              </p>
              <p class="link">{{$store.state.translations['_slug.4_key4']}}</p>
              <div class="bottom_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path d="M64 68C64 65.7909 65.7909 64 68 64L88 64L88 70C88 79.9411 79.9411 88 70 88L64 88L64 68Z"
                      fill="white" />
                    <rect x="64" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="64" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="64" width="24" height="24" rx="4" fill="white" />
                    <rect y="64" width="24" height="24" rx="4" fill="white" />
                  </g>
                </svg>
              </div>
            </NuxtLink>
          </div>
          <div class="cardo">
            <div class="cardo_back"></div>
            <NuxtLink :to="localePath('/')">
              <div class="top_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path
                      d="M24 20C24 22.2091 22.2091 24 20 24L0 24L5.24537e-07 18C1.39362e-06 8.05887 8.05888 -1.39362e-06 18 -5.24537e-07L24 0L24 20Z"
                      fill="white" />
                    <rect x="24" y="56" width="24" height="24" rx="4" transform="rotate(180 24 56)" fill="white" />
                    <rect x="56" y="56" width="24" height="24" rx="4" transform="rotate(180 56 56)" fill="white" />
                    <rect x="24" y="88" width="24" height="24" rx="4" transform="rotate(180 24 88)" fill="white" />
                    <rect x="56" y="24" width="24" height="24" rx="4" transform="rotate(180 56 24)" fill="white" />
                    <rect x="88" y="24" width="24" height="24" rx="4" transform="rotate(180 88 24)" fill="white" />
                  </g>
                </svg>
              </div>
              <div class="logo">
                <div class="blur"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                  <path opacity="0.4"
                    d="M0.333252 6.99998C0.333252 3.31808 3.31802 0.333313 6.99992 0.333313H26.9999C30.6818 0.333313 33.6666 3.31808 33.6666 6.99998V22C33.6666 25.6819 30.6818 28.6666 26.9999 28.6666H6.99992C3.31802 28.6666 0.333252 25.6819 0.333252 22V6.99998Z"
                    fill="#1AB99D" />
                  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 25.75C17.6904 25.75 18.25 26.3096 18.25 27V32.4167H22C22.6904 32.4167 23.25 32.9763 23.25 33.6667C23.25 34.357 22.6904 34.9167 22 34.9167H12C11.3096 34.9167 10.75 34.357 10.75 33.6667C10.75 32.9763 11.3096 32.4167 12 32.4167H15.75V27C15.75 26.3096 16.3096 25.75 17 25.75Z"
                    fill="#1AB99D" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.4165 8.66663C7.4165 7.97627 7.97615 7.41663 8.6665 7.41663H16.9998C17.6902 7.41663 18.2498 7.97627 18.2498 8.66663C18.2498 9.35698 17.6902 9.91663 16.9998 9.91663H8.6665C7.97615 9.91663 7.4165 9.35698 7.4165 8.66663Z"
                    fill="#1AB99D" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.4165 15.3333C7.4165 14.643 7.97615 14.0833 8.6665 14.0833H25.3332C26.0235 14.0833 26.5832 14.643 26.5832 15.3333C26.5832 16.0237 26.0235 16.5833 25.3332 16.5833H8.6665C7.97615 16.5833 7.4165 16.0237 7.4165 15.3333Z"
                    fill="#1AB99D" />
                  <path
                    d="M33.6666 22H0.333252V24.6667C0.333252 26.8758 2.12411 28.6667 4.33325 28.6667H29.6666C31.8757 28.6667 33.6666 26.8758 33.6666 24.6667V22Z"
                    fill="#1AB99D" />
                </svg>
              </div>
              <h2 class="name">{{$store.state.translations['HomeHero.30_key30']}}</h2>
              <p class="desc">
                {{$store.state.translations['HomeHero.19_key19']}}
                {{$store.state.translations['HomeHero.20_key20']}}
              </p>
              <p class="link">{{$store.state.translations['_slug.4_key4']}}</p>
              <div class="bottom_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path d="M64 68C64 65.7909 65.7909 64 68 64L88 64L88 70C88 79.9411 79.9411 88 70 88L64 88L64 68Z"
                      fill="white" />
                    <rect x="64" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="64" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="64" width="24" height="24" rx="4" fill="white" />
                    <rect y="64" width="24" height="24" rx="4" fill="white" />
                  </g>
                </svg>
              </div>
            </NuxtLink>
          </div>
          <div class="cardo">
            <div class="cardo_back"></div>
            <NuxtLink :to="localePath('/')">
              <div class="top_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path
                      d="M24 20C24 22.2091 22.2091 24 20 24L0 24L5.24537e-07 18C1.39362e-06 8.05887 8.05888 -1.39362e-06 18 -5.24537e-07L24 0L24 20Z"
                      fill="white" />
                    <rect x="24" y="56" width="24" height="24" rx="4" transform="rotate(180 24 56)" fill="white" />
                    <rect x="56" y="56" width="24" height="24" rx="4" transform="rotate(180 56 56)" fill="white" />
                    <rect x="24" y="88" width="24" height="24" rx="4" transform="rotate(180 24 88)" fill="white" />
                    <rect x="56" y="24" width="24" height="24" rx="4" transform="rotate(180 56 24)" fill="white" />
                    <rect x="88" y="24" width="24" height="24" rx="4" transform="rotate(180 88 24)" fill="white" />
                  </g>
                </svg>
              </div>
              <div class="logo">
                <div class="blur"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle opacity="0.4" cx="16.9999" cy="17" r="16.6667" fill="#1AB99D" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.9281 10.4526C13.1978 8.90342 13.559 7.51101 13.9882 6.33065C14.4769 4.98659 15.0338 3.97375 15.5986 3.31682C16.1663 2.65643 16.6437 2.46097 17.0004 2.46097C17.357 2.46097 17.8344 2.65643 18.4021 3.31682C18.9669 3.97375 19.5238 4.98659 20.0125 6.33065C20.4417 7.51101 20.8029 8.90342 21.0726 10.4526C19.7677 10.3281 18.4028 10.2624 17.0004 10.2624C15.5979 10.2624 14.233 10.3281 12.9281 10.4526ZM10.7269 10.7265C11.0233 8.81347 11.4526 7.07755 11.9886 5.60354C12.5266 4.12405 13.1924 2.85191 13.9852 1.92975C14.775 1.01105 15.7903 0.333313 17.0004 0.333313C18.2104 0.333313 19.2257 1.01105 20.0155 1.92975C20.8083 2.85191 21.4741 4.12405 22.0121 5.60354C22.5481 7.07755 22.9774 8.81347 23.2738 10.7265C25.1868 11.0229 26.9227 11.4522 28.3968 11.9882C29.8762 12.5262 31.1484 13.192 32.0705 13.9848C32.9892 14.7746 33.667 15.7899 33.667 16.9999C33.667 18.21 32.9892 19.2253 32.0705 20.0151C31.1484 20.8079 29.8762 21.4737 28.3968 22.0117C26.9227 22.5477 25.1868 22.977 23.2738 23.2733C22.9774 25.1864 22.5481 26.9223 22.0121 28.3963C21.4741 29.8758 20.8083 31.148 20.0155 32.0701C19.2257 32.9888 18.2104 33.6666 17.0004 33.6666C15.7903 33.6666 14.775 32.9888 13.9852 32.0701C13.1924 31.148 12.5266 29.8758 11.9886 28.3963C11.4526 26.9223 11.0233 25.1864 10.7269 23.2733C8.81389 22.977 7.07798 22.5477 5.60396 22.0117C4.12447 21.4737 2.85233 20.8079 1.93018 20.0151C1.01148 19.2253 0.33374 18.21 0.33374 16.9999C0.33374 15.7898 1.01148 14.7746 1.93018 13.9848C2.85233 13.192 4.12447 12.5262 5.60396 11.9882C7.07798 11.4522 8.81389 11.0229 10.7269 10.7265ZM10.453 21.0722C8.90385 20.8024 7.51144 20.4413 6.33107 20.0121C4.98701 19.5233 3.97418 18.9665 3.31724 18.4017C2.65686 17.834 2.46139 17.3566 2.46139 16.9999C2.46139 16.6433 2.65686 16.1659 3.31724 15.5981C3.97418 15.0334 4.98701 14.4765 6.33107 13.9878C7.51144 13.5585 8.90385 13.1974 10.453 12.9277C10.3285 14.2326 10.2628 15.5975 10.2628 16.9999C10.2628 18.4024 10.3285 19.7673 10.453 21.0722ZM12.6229 21.3774C12.4723 19.9972 12.3904 18.5278 12.3904 16.9999C12.3904 15.472 12.4722 14.0026 12.6229 12.6225C14.0031 12.4718 15.4725 12.39 17.0004 12.39C18.5283 12.39 19.9977 12.4718 21.3778 12.6225C21.5285 14.0026 21.6103 15.472 21.6103 16.9999C21.6103 18.5278 21.5285 19.9972 21.3778 21.3774C19.9977 21.528 18.5283 21.6099 17.0004 21.6099C15.4725 21.6099 14.0031 21.528 12.6229 21.3774ZM12.9281 23.5473C13.1978 25.0964 13.559 26.4889 13.9882 27.6692C14.4769 29.0133 15.0338 30.0261 15.5986 30.6831C16.1663 31.3434 16.6437 31.5389 17.0004 31.5389C17.357 31.5389 17.8344 31.3434 18.4021 30.6831C18.9669 30.0261 19.5238 29.0133 20.0125 27.6692C20.4417 26.4889 20.8029 25.0964 21.0726 23.5473C19.7677 23.6718 18.4028 23.7375 17.0004 23.7375C15.5979 23.7375 14.233 23.6718 12.9281 23.5473ZM23.5477 21.0722C25.0969 20.8024 26.4893 20.4413 27.6696 20.0121C29.0137 19.5234 30.0265 18.9665 30.6835 18.4017C31.3439 17.834 31.5393 17.3566 31.5393 16.9999C31.5393 16.6433 31.3439 16.1659 30.6835 15.5981C30.0265 15.0334 29.0137 14.4765 27.6696 13.9878C26.4893 13.5585 25.0969 13.1974 23.5477 12.9277C23.6722 14.2326 23.7379 15.5975 23.7379 16.9999C23.7379 18.4024 23.6722 19.7673 23.5477 21.0722Z"
                    fill="#1AB99D" />
                </svg>
              </div>
              <h2 class="name">{{$store.state.translations['HomeHero.34_key34']}}</h2>
              <p class="desc">
                {{$store.state.translations['HomeHero.19_key19']}}
                {{$store.state.translations['HomeHero.20_key20']}}
              </p>
              <p class="link">{{$store.state.translations['_slug.4_key4']}}</p>
              <div class="bottom_vector">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                  <g opacity="0.05">
                    <path d="M64 68C64 65.7909 65.7909 64 68 64L88 64L88 70C88 79.9411 79.9411 88 70 88L64 88L64 68Z"
                      fill="white" />
                    <rect x="64" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="32" width="24" height="24" rx="4" fill="white" />
                    <rect x="64" width="24" height="24" rx="4" fill="white" />
                    <rect x="32" y="64" width="24" height="24" rx="4" fill="white" />
                    <rect y="64" width="24" height="24" rx="4" fill="white" />
                  </g>
                </svg>
              </div>
            </NuxtLink>
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
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
    });
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.wrap {
  height: 1200px;
  position: relative;
}

.swiper,
.top {
  height: 100%;
}

.pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top .container {
  height: 100%;
  display: flex;
  align-items: center;
}

.content {
  position: relative;
  z-index: 99;
  max-width: 50%;
  margin-bottom: 300px;
}

.title {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 67.2px */
  margin-bottom: 16px;
}

.sub {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 40px;
  max-width: 85%;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.bordered {
  border-radius: 8px;
  border: 1px solid var(--Server-green, #1ab99d);
  background: var(--Dark-service, #12151c);
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
}

.stick {
  width: 1px;
  height: 16px;
  background: #313641;
  transition: 0.2s;
}

.unbordered {
  border-radius: 8px;
  border: 1px solid var(--Dark-Border-server, #313641);
  background: var(--Dark-service, #12151c);
  padding: 13px 24px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  transition: 0.2s;
}

.bordered:hover,
.unbordered:hover {
  background: var(--green);
  color: white;
}

.bordered:hover .stick {
  background: rgba(255, 255, 255, 0.391);
}

.bordered:hover svg path {
  stroke: white;
}

.bottom {
  position: absolute;
  bottom: 100px;
  left: 0;
  z-index: 9;
  width: 100%;
}

.cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.cardo {
  background: var(--dark);
  border-radius: 24px;
  position: relative;
  padding: 16px 24px 32px 24px;
  transition: 0.4s;
  overflow: hidden;
  cursor: pointer;
}

.cardo_back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #00483c 0%, #008f76 100%);
  opacity: 0;
  transition: 0.4s;
  z-index: 1;
}

.cardo:hover .cardo_back {
  opacity: 1;
}

.top_vector {
  position: absolute;
  top: 8px;
  left: 8px;
  transition: 0.4s;
  z-index: 2;
  transform: translate(-100px, -100px);
}

.bottom_vector {
  position: absolute;
  bottom: 8px;
  right: 8px;
  transition: 0.4s;
  z-index: 2;
  transform: translate(100px, 100px);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 86px;
  z-index: 2;
  position: relative;
}

.cardo:hover .bottom_vector,
.cardo:hover .top_vector {
  transform: translate(0, 0);
}

.blur {
  background: rgba(26, 185, 157, 0.24);
  filter: blur(33.150001525878906px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 86px;
  height: 86px;
  border-radius: 50%;
}

.name {
  color: var(--Server-white-grey, #f3f5f7);
  text-align: center;
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 33.6px */
  margin-bottom: 8px;
  z-index: 2;
  position: relative;
}

.desc {
  color: var(--Sertver-title, #b6bfd3);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  margin-bottom: 32px;
  z-index: 2;
  position: relative;
}

.link {
  color: var(--Server-green, #1ab99d);
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  text-decoration-line: underline;
  z-index: 2;
  position: relative;
}

@media screen and (max-width: 1024px) {
  .content {
    max-width: 100%;
    margin: 0;
  }

  .title {
    font-size: 24px;
  }

  .sub {
    font-size: 14px;
    max-width: 100%;
  }

  .wrap {
    height: initial;
    padding-bottom: 40px;
  }

  .bottom {
    position: static;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .top {
    padding: 120px 0 40px 0;
  }

  .pic {
    display: none;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .bordered svg,
  .bordered .stick {
    display: none;
  }

  .bordered,
  .unbordered {
    display: flex;
    justify-content: center;
  }

  .cardo {
    padding: 12px 10px;
    border-radius: 12px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    font-size: 12px;
    margin-bottom: 16px;
  }

  .link {
    font-size: 14px;
  }

  .top_vector,
  .bottom_vector {
    display: none;
  }
}
</style>
