<template>
  <div class="site white">
    <DesktopNavbar class="white" />
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
@media screen and (max-width: 1024px) {
}
</style>
