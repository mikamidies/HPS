<template>
  <div class="site">
    <DesktopNavbar class="dark" />
    <main class="main">
      <nuxt />
    </main>
    <HomeFeedback />
    <DesktopFooter />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  flex: 1;
}
.dark {
  display: block;
}
@media screen and (max-width: 1024px) {
  .dark {
    /* display: none; */
  }
}
</style>
