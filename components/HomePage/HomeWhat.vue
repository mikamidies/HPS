<template>
  <div class="wrap">
    <div class="container small">
      <div class="left">
        <h2 class="title">
          {{ $store.state.translations["HomeWhat.0_key0"] }}
        </h2>
        <p class="sub">
          {{ $store.state.translations["HomeReviews.3_key3"] }}
        </p>
        <NuxtLink :to="localePath('/config')" class="unbordered">{{
          $store.state.translations["DesktopNavbar.7_key7"]
        }}</NuxtLink>
      </div>
      <div class="right">
        <img src="@/assets/img/mother.png" alt="" />
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
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.left {
  padding: 80px 0;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 24px;
}
.sub {
  color: var(--Dark-Border-server, #313641);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
  max-width: 616px;
}
.left a {
  border-radius: 8px;
  border: 1px solid var(--green);
  background: white;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}
.right img {
  width: auto;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 1024px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
  .left {
    padding: 40px 0;
  }
  .title {
    font-size: 24px;
    margin-bottom: 16px;
  }
}
</style>
