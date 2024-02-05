<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="container">
      <div class="cards">
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
          <p class="sup">{{ $store.state.translations["contacts.1_key1"] }}</p>
          <a :href="`mailto: ${info.email}`" class="value">
            {{ info.email }}
          </a>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2154118923213!2d69.26125407656384!3d41.32592899980429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a78b7bb25%3A0x3f3559ce60239dfe!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogMzAsIDEwMDEyOCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707136289576!5m2!1sru!2s"
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
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      title: this.$store.state.translations["site.contacts"],
      info: {},
      phoneArray: [],
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;

    let phoneString = this.info.nbm;

    this.phoneArray = phoneString.match(/\+\d{3} \d{2} \d{3} \d{2} \d{2}/g);
  },
};
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
