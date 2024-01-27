<template>
  <div class="master">
    <SiteTop class="site_top" />

    <div class="filter">
      <div class="container">
        <div class="item">
          <a-select default-value="Category" @change="handleChange">
            <a-select-option value="Category" disabled>
              Category
            </a-select-option>
            <a-select-option value="Server"> Server </a-select-option>
            <a-select-option value="Hosting"> Hosting </a-select-option>
          </a-select>
        </div>
        <div class="mid">
          <div class="item">
            <a-select default-value="Filter" @change="handleChange">
              <a-select-option value="Filter" disabled>
                Filter
              </a-select-option>
              <a-select-option value="Server"> Server </a-select-option>
              <a-select-option value="Hosting"> Hosting </a-select-option>
            </a-select>
          </div>
          <div class="item">
            <a-select default-value="Filter" @change="handleChange">
              <a-select-option value="Filter" disabled>
                Filter
              </a-select-option>
              <a-select-option value="Server"> Server </a-select-option>
              <a-select-option value="Hosting"> Hosting </a-select-option>
            </a-select>
          </div>
          <div class="item">
            <a-select default-value="Filter" @change="handleChange">
              <a-select-option value="Filter" disabled>
                Filter
              </a-select-option>
              <a-select-option value="Server"> Server </a-select-option>
              <a-select-option value="Hosting"> Hosting </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="item">
          <div class="searcher">
            <input type="text" placeholder="Поиск" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25ZM20.75 10.5C20.75 16.1609 16.1609 20.75 10.5 20.75C4.83908 20.75 0.250001 16.1609 0.25 10.5C0.25 4.83908 4.83908 0.25 10.5 0.25C16.1609 0.249999 20.75 4.83908 20.75 10.5ZM18.4697 19.5303C18.1768 19.2374 18.1768 18.7626 18.4697 18.4697C18.7626 18.1768 19.2374 18.1768 19.5303 18.4697L21.5303 20.4696C21.8232 20.7625 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7625 21.8232 20.4696 21.5303L18.4697 19.5303Z"
                fill="#28303F"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="container">
        <div class="items">
          <div v-for="item in products" :key="item.id" class="cardo">
            <img src="@/assets/img/logo/vector.png" class="vector" />
            <NuxtLink :to="`/product/${item.slug}`">
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
        <!-- <div class="pagination">
          <a-pagination :total="50" show-less-items />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import productsApi from "@/api/products.js";

export default {
  layout: "white",

  data() {
    return {};
  },

  async asyncData({ $axios }) {
    const products = await productsApi.getProducts($axios);

    return {
      products,
    };
  },

  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style scoped>
.filter {
  margin-bottom: 24px;
  display: none;
}
.filter .container {
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  gap: 16px;
}
.mid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.filter :deep(.ant-select) {
  width: 100%;
}
.filter :deep(.ant-select-selection) {
  padding: 12px 16px;
  border-radius: 8px;
  height: auto;
  width: 100%;
  border: 1px solid var(--grey-8, #ebebeb);
}
.filter :deep(.ant-select-selection__rendered) {
  margin: 0;
  line-height: inherit;
}
.filter :deep(.ant-select-selection-selected-value) {
  color: var(--Server-BG, #080b12);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.searcher {
  border-radius: 8px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  height: 100%;
  position: relative;
}
.searcher input {
  width: 100%;
  height: 100%;
  color: #000;
  padding-left: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.searcher input::placeholder {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.searcher svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
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
.products .items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.products {
  margin-bottom: 64px;
}
.pagination {
  margin: 40px;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1024px) {
  .products .items {
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
  .more {
    margin-top: 24px;
  }
}
</style>
