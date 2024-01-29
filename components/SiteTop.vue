<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="content">
          <h1 class="title">{{ title }}</h1>

          <div class="crumbs">
            <ol>
              <li>
                <NuxtLink :to="localePath('/')"> {{$store.state.translations['DesktopFooter.0_key0']}} </NuxtLink>
              </li>
              <li>/</li>
              <li>
                <p>{{ title }}</p>
              </li>
            </ol>
          </div>
        </div>
        <img class="vector" src="@/assets/img/top.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style scoped>
.wrap {
  padding: 190px 0 64px 0;
}

.cardo {
  position: relative;
  border-radius: 16px;
  background: var(--Dark-service, #12151c);
  overflow: hidden;
}

.content {
  padding: 48px 72px;
}

.vector {
  top: 0;
  right: 0;
  position: absolute;
}

.title {
  margin-bottom: 8px;
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 67.2px */
}

.crumbs ol {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
}

.crumbs a,
.crumbs p {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
}

@media screen and (max-width: 1024px) {
  .cardo {
    border-radius: 12px;
  }

  .content {
    padding: 24px;
  }

  .title {
    font-size: 24px;
  }

  .crumbs a {
    font-size: 14px;
  }

  .vector {
    height: 100%;
    object-fit: cover;
    width: 40%;
  }

  .wrap {
    padding: 100px 0 24px 0;
  }
}
</style>
