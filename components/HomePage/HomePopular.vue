<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Популярные товары</h4>
      <div class="items">
        <div class="cardo">
          <NuxtLink to="/">
            <div class="content">
              <h2 class="name">HPE ProLiant ML350</h2>
              <p class="sub">
                HPE ProLiant ML350 Gen10 Tower 4U Rack Processor HPE Intel
                Xeon-S 4210 HPE ProLiant ML350 Gen10 Tower 4U Rack Processor HPE
                Intel Xeon-S 4210 HPE ProLiant ML350 Gen10 Tower 4U Rack
                Processor HPE Intel Xeon-S 4210 HPE ProLiant ML350 Gen10 Tower
                4U Rack Processor HPE Intel Xeon-S 4210
              </p>
              <div class="img">
                <img src="@/assets/img/prod-1.png" alt="" />
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
        <div class="cardo">
          <NuxtLink to="/">
            <div class="content">
              <h2 class="name">HPE ProLiant ML350</h2>
              <p class="sub">
                HPE ProLiant ML350 Gen10 Tower 4U Rack Processor HPE Intel
                Xeon-S 4210 ...
              </p>
              <div class="img">
                <img src="@/assets/img/prod-2.png" alt="" />
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
        <div class="cardo">
          <NuxtLink to="/">
            <div class="content">
              <h2 class="name">HPE ProLiant ML350</h2>
              <p class="sub">
                HPE ProLiant ML350 Gen10 Tower 4U Rack Processor HPE Intel
                Xeon-S 4210 ...
              </p>
              <div class="img">
                <img src="@/assets/img/prod-1.png" alt="" />
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
        <div class="cardo">
          <NuxtLink to="/">
            <div class="content">
              <h2 class="name">HPE ProLiant ML350</h2>
              <p class="sub">
                HPE ProLiant ML350 Gen10 Tower 4U Rack Processor HPE Intel
                Xeon-S 4210 ...
              </p>
              <div class="img">
                <img src="@/assets/img/prod-4.png" alt="" />
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
      <div class="more">
        <NuxtLink to="/">
          Посмотреть все
          <p class="stick"></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 10L12 6M12 6L16 10M12 6V18"
              stroke="#1AB99D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  background: white;
  padding: 80px 0;
}
.title {
  margin-bottom: 40px;
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.cardo {
  border-radius: 16px;
  background: var(--Server-white-grey, #f3f5f7);
  padding: 24px;
  height: 540px;
  transition: 0.3s;
  overflow: hidden;
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
}
.img img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  transition: 0.3s;
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
.more {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.more a {
  border-radius: 8px;
  border: 1px solid var(--Server-border-color, #d2d7df);
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
}
.more a:hover {
  background: var(--green);
  border-color: var(--green);
  color: white;
}
.more a:hover .stick {
  background: white;
}
.more a:hover svg path {
  stroke: white;
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
</style>
