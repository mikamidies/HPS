<template>
  <div class="wrap">
    <div class="container small">
      <h4 class="title">
        {{ $store.state.translations["HomeServices.0_key0"] }}
      </h4>
      <div class="cards">
        <div class="cardo" v-for="item in services" :key="item.id">
          <div class="left">
            <p class="sup">{{ item.category.title }}</p>
            <h2 class="name">
              {{ item.title }}
            </h2>
            <p class="sub">
              {{ item.subtitle }}
            </p>
            <button>
              {{ $store.state.translations["HomeServices.5_key5"] }}
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
          <div class="right">
            <img src="@/assets/img/server.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["services"],
};
</script>

<style scoped>
.wrap {
  background: #12151c;
  padding: 80px 0 105px 0;
}

.title {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 57.6px */
  margin-bottom: 48px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.cardo:nth-child(1) {
  grid-column: 1/3;
  padding: 0;
}

.cardo:nth-child(1) .left {
  padding: 48px 56px;
}

.cardo:nth-child(1) {
  display: grid;
  grid-template-columns: 5fr 5fr;
}

.cardo {
  border-radius: 16px;
  background: var(--Server-BG, #080b12);
  padding: 56px;
}
.cardo:nth-child(2) img,
.cardo:nth-child(3) img {
  display: none;
}
.right img {
  width: auto;
  height: 100%;
  object-fit: contain;
}

.name {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 57.6px */
  margin-bottom: 16px;
}

.sup {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 16px;
}

.sub {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 48px;
}

.cardo button {
  border-radius: 8px;
  border: 1px solid var(--green);
  background: transparent;
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
  display: none;
}

.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0;
  }

  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .cards {
    grid-template-columns: repeat(1, 1fr);
  }

  .cardo:nth-child(1) {
    grid-column: initial;
  }

  .cardo:nth-child(1) {
    grid-template-columns: repeat(1, 1fr);
  }

  .cardo:nth-child(1) .left {
    padding: 20px;
  }

  .sup {
    font-size: 14px;
  }

  .name {
    font-size: 24px;
  }

  .sub {
    font-size: 14px;
  }

  .cardo {
    padding: 20px;
  }
}
</style>
