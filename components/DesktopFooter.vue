<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="left">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath('/')">
                {{ $store.state.translations["DesktopFooter.0_key0"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')">
                {{ $store.state.translations["DesktopFooter.1_key1"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/products')">
                {{ $store.state.translations["DesktopFooter.2_key2"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/config')">
                {{ $store.state.translations["DesktopFooter.3_key3"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contacts')">
                {{ $store.state.translations["DesktopFooter.5_key5"] }}
              </NuxtLink>
            </li>
          </ul>
          <div class="brand">
            <NuxtLink :to="localePath('/')">
              <img src="@/assets/img/logo/brand.svg" alt="" />
            </NuxtLink>
          </div>
          <div class="socs">
            <a :href="info.telegram" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M16.5 33C7.38729 33 0 25.6126 0 16.5C0 7.3873 7.38729 0 16.5 0C25.6126 0 33 7.3873 33 16.5C33 25.6126 25.6126 33 16.5 33ZM11.3687 18.4318L11.3896 18.4186C12.3462 21.5766 12.8244 23.1556 12.8244 23.1556C13.0097 23.6679 13.2644 23.7593 13.5734 23.7176C13.8823 23.6757 14.0463 23.5085 14.2479 23.314C14.2479 23.314 14.9018 22.6829 16.2096 21.4208L20.4186 24.5352C21.1855 24.9589 21.7393 24.7403 21.9297 23.8222L24.665 10.9171C24.967 9.71589 24.4373 9.23413 23.5059 9.61544L7.44643 15.8187C6.35081 16.2591 6.35611 16.8721 7.24696 17.1453L11.3687 18.4318Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M18.1954 0C20.0523 0.00306911 20.9934 0.0129035 21.8065 0.0371099L22.1268 0.0475713C22.4967 0.0607223 22.8617 0.0772227 23.3018 0.0978485C25.0576 0.178982 26.2554 0.456736 27.3073 0.865126C28.3949 1.28452 29.3134 1.85104 30.2305 2.76821C31.1463 3.68536 31.713 4.60664 32.1337 5.69155C32.5406 6.7421 32.8185 7.94115 32.901 9.69707C32.9206 10.1371 32.9365 10.5021 32.9495 10.8721L32.9599 11.1924C32.984 12.0054 32.995 12.9466 32.9985 14.8036L32.9998 16.0339C33 16.1842 33 16.3393 33 16.4994L32.9998 16.9649L32.9988 18.1953C32.9957 20.0523 32.986 20.9935 32.9617 21.8065L32.9512 22.1268C32.9381 22.4969 32.9216 22.8619 32.901 23.3018C32.8198 25.0578 32.5406 26.2554 32.1337 27.3073C31.7143 28.395 31.1463 29.3136 30.2305 30.2307C29.3134 31.1465 28.3907 31.713 27.3073 32.1337C26.2554 32.5408 25.0576 32.8185 23.3018 32.901C22.8617 32.9206 22.4967 32.9366 22.1268 32.9495L21.8065 32.9599C20.9934 32.9842 20.0523 32.9951 18.1954 32.9987L16.9649 33C16.8146 33 16.6595 33 16.4994 33H16.034L14.8035 32.9988C12.9465 32.9959 12.0054 32.986 11.1923 32.9617L10.8721 32.9513C10.502 32.9381 10.1371 32.9216 9.69705 32.901C7.94111 32.82 6.74482 32.5408 5.69154 32.1337C4.60524 31.7144 3.68533 31.1465 2.76818 30.2307C1.85103 29.3136 1.28589 28.3909 0.865125 27.3073C0.456736 26.2554 0.180351 25.0578 0.0978486 23.3018C0.078246 22.8619 0.0622567 22.4969 0.0493038 22.1268L0.038925 21.8065C0.0147846 20.9935 0.00377892 20.0523 0.000214799 18.1953L0 14.8036C0.0030691 12.9466 0.012887 12.0054 0.0370933 11.1924L0.0475712 10.8721C0.0607221 10.5021 0.0772229 10.1371 0.0978486 9.69707C0.178965 7.93976 0.456736 6.74347 0.865125 5.69155C1.2845 4.60527 1.85103 3.68536 2.76818 2.76821C3.68533 1.85104 4.60663 1.28589 5.69154 0.865126C6.74345 0.456736 7.93974 0.180351 9.69705 0.0978485C10.1371 0.0782623 10.502 0.0622734 10.8721 0.0493204L11.1923 0.0389412C12.0054 0.0147843 12.9465 0.00377854 14.8035 0.000214406L18.1954 0ZM16.4994 8.24915C11.9405 8.24915 8.24913 11.9445 8.24913 16.4994C8.24913 21.0583 11.9445 24.7497 16.4994 24.7497C21.0584 24.7497 24.7497 21.0544 24.7497 16.4994C24.7497 11.9405 21.0543 8.24915 16.4994 8.24915ZM16.4994 11.5493C19.2334 11.5493 21.4496 13.7648 21.4496 16.4994C21.4496 19.2334 19.2341 21.4496 16.4994 21.4496C13.7655 21.4496 11.5492 19.2342 11.5492 16.4994C11.5492 13.7654 13.7646 11.5493 16.4994 11.5493ZM25.1622 5.77406C24.0248 5.77406 23.0997 6.69794 23.0997 7.83523C23.0997 8.97253 24.0235 9.89784 25.1622 9.89784C26.2995 9.89784 27.2248 8.97397 27.2248 7.83523C27.2248 6.69794 26.298 5.77264 25.1622 5.77406Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <p class="txt">
            {{ $store.state.translations["DesktopFooter.6_key6"] }}
            {{ $store.state.translations["DesktopFooter.7_key7"] }}
          </p>
        </div>
        <div class="right">
          <div class="cardo">
            <p class="sup">
              {{ $store.state.translations["contacts.1_key1"] }}
            </p>
            <a :href="`mailto: ${info.email}`" class="value">
              {{ info.email }}
            </a>
          </div>
          <div class="cardo">
            <p class="sup">{{ $store.state.translations["about.9_key9"] }}</p>
            <a :href="`tel:${phoneArray[0]}`" class="value">
              {{ phoneArray[0] }}
            </a>
            <a :href="`tel:${phoneArray[1]}`" class="value">
              {{ phoneArray[1] }}
            </a>
          </div>
          <div class="cardo">
            <p class="sup">
              {{ $store.state.translations["DesktopFooter.11_key11"] }}
            </p>
            <a href="#" class="value">
              {{ $store.state.translations["DesktopFooter.12_key12"] }}
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>{{ $store.state.translations["DesktopFooter.13_key13"] }}</p>
        <p>
          {{ $store.state.translations["DesktopFooter.14_key14"] }}
          <a target="_blank" href="https://ndc.uz/" class="green">NDC</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      info: {},
      phoneArray: [],
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;

    let phoneString = this.info.nbm;

    this.phoneArray = phoneString?.match(/\+\d{3} \d{2} \d{3} \d{2} \d{2}/g);
  },
};
</script>

<style scoped>
.wrap {
  background: var(--Server-BG, #080b12);
  padding: 64px 0 44px 0;
}

.grid {
  display: grid;
  grid-template-columns: 5fr 5fr;
  padding-bottom: 40px;
}

.links {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}

.links a {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 30px */
}

.brand {
  margin-bottom: 32px;
}

.socs {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.socs a {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid var(--Dark-Border-server, #313641);
  display: flex;
  align-items: center;
  justify-content: center;
}

.txt {
  color: #898d97 !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  max-width: 430px;
}

.right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.cardo {
  border-radius: 24px;
  background: var(--Dark-service, #12151c);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sup {
  color: #6c6f77 !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
}

.value {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 38.4px */
}

.cardo:nth-child(3) {
  grid-column: 1/3;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #313641;
  padding-top: 44px;
}

.bottom p {
  color: var(--grey-8, #ebebeb);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 150% */
}
@media screen and (max-width: 1600px) {
  .value {
    font-size: 24px;
  }
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .right {
    grid-template-columns: repeat(1, 1fr);
  }

  .cardo:nth-child(3) {
    grid-column: initial;
  }

  .links {
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 16px;
    justify-content: center;
  }

  .wrap {
    padding: 40px 0;
  }

  .brand {
    display: flex;
    justify-content: center;
  }

  .socs {
    justify-content: center;
  }

  .txt {
    text-align: center;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .links a {
    font-size: 16px;
  }

  .cardo {
    text-align: center;
    gap: 16px;
    border-radius: 16px;
    padding: 16px;
  }

  .value {
    font-size: 18px;
    line-height: 150%;
  }

  .bottom {
    flex-direction: column;
    padding-top: 24px;
    gap: 16px;
  }
}
</style>
