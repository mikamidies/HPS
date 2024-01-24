<template>
  <div class="site">
    <DesktopNavbar />
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
</style>
