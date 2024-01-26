<template>
  <div class="master">
    <SiteTop />

    <div class="container">
      <div class="cards">
        <div class="cardo">
          <p class="sup">Связаться с нами</p>

          <a href="#" class="value"> +998 99 999 99 99 </a>
          <a href="#" class="value"> +998 99 999 99 99 </a>
        </div>
        <div class="cardo">
          <p class="sup">Электронная почта</p>
          <a href="#" class="value"> info@hpsuz.com </a>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.865982431615!2d69.43718787285982!3d41.28239246581215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae586999efba79%3A0x23917c06601f6554!2z0JHQsNC70YLQsCwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1706095003710!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <HomeForm />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 16px;
}
.cardo {
  border-radius: 24px;
  background: var(--Dark-service, #12151c);
  padding: 24px;
  min-height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sup {
  color: #6c6f77;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.value {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  display: flex;
}
.map {
  grid-column: 1 / 3;
}
.map iframe {
  width: 100%;
  height: 576px;
  border-radius: 24px;
  filter: invert(90%);
}
@media screen and (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .map {
    grid-column: initial;
  }
  .cardo {
    padding: 16px;
    border-radius: 12px;
    min-height: unset;
    gap: 12px;
  }
  .value {
    font-size: 20px;
  }
  .map iframe {
    height: 260px;
    border-radius: 12px;
  }
}
</style>
