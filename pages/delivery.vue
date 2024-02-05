<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="first section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">
            {{ $store.state.translations["delivery.0_key0"] }}
          </p>
        </div>
        <div class="right">
          <h4 class="title">
            {{ $store.state.translations["delivery.1_key1"] }}
            <span class="green">
              {{ $store.state.translations["delivery.2_key2"] }}
            </span>
          </h4>
          <p>{{ $store.state.translations["delivery.3_key3"] }}</p>
          <p>
            {{ $store.state.translations["delivery.4_key4"] }}
          </p>
          <p class="flexer">
            {{ $store.state.translations["delivery.question"] }}
            <a href="mailto:info@hpsuz.com " target="_blank">
              info@hpsuz.com
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="second section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">
            {{ $store.state.translations["delivery.12_key12"] }}
          </p>
        </div>
        <div class="right">
          <h4 class="title">
            {{ $store.state.translations["delivery.13_key13"] }}
            <span class="green">
              {{ $store.state.translations["delivery.14_key14"] }}
            </span>
          </h4>
          <p>
            {{ $store.state.translations["delivery.15_key15"] }}
            {{ $store.state.translations["delivery.16_key16"] }}
            {{ $store.state.translations["delivery.17_key17"] }}
          </p>
          <p>
            {{ $store.state.translations["delivery.18_key18"] }}
            {{ $store.state.translations["delivery.19_key19"] }}
            {{ $store.state.translations["delivery.20_key20"] }}
            {{ $store.state.translations["delivery.21_key21"] }}
          </p>
          <p>
            {{ $store.state.translations["delivery.22_key22"] }}
            {{ $store.state.translations["delivery.23_key23"] }}
            {{ $store.state.translations["delivery.24_key24"] }}
          </p>

          <div class="cardo">
            <p>
              <span class="green">1</span> Бесплатная доставка до двери по РФ
              {{ $store.state.translations["delivery.26_key26"] }}
            </p>
            <p>
              <span class="green">2</span> Быстрое отправление — протестируем и
              {{ $store.state.translations["delivery.28_key28"] }}
            </p>
            <p>
              <span class="green">3</span> В любой населенный пункт. Доставляем
              {{ $store.state.translations["delivery.30_key30"] }}
            </p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="third section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">
            {{ $store.state.translations["delivery.31_key31"] }}
          </p>
        </div>
        <div class="right">
          <h4 class="title">
            {{ $store.state.translations["delivery.32_key32"] }}
            <span class="green">
              {{ $store.state.translations["delivery.33_key33"] }}
            </span>
          </h4>
          <p>
            {{ $store.state.translations["delivery.34_key34"] }}
            {{ $store.state.translations["delivery.35_key35"] }}
            {{ $store.state.translations["delivery.36_key36"] }}
          </p>
          <p>
            {{ $store.state.translations["delivery.37_key37"] }}
            {{ $store.state.translations["delivery.38_key38"] }}
            {{ $store.state.translations["delivery.39_key39"] }}
            {{ $store.state.translations["delivery.40_key40"] }}
          </p>
        </div>
      </div>
    </div> -->

    <div class="third section">
      <div class="container small separator">
        <div></div>
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
  </div>
</template>

<script>
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      title: this.$store.state.translations["site.delivery"],
      info: {},
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;
  },
};
</script>

<style scoped>
.separator {
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
}
.flexer {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  gap: 4px;
}

.paragraph {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  transform: translateY(8px);
}

.title {
  margin-bottom: 24px;
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 67.2px */
}

.right p {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.right p:last-child {
  margin: 0;
}

.section {
  margin-bottom: 40px;
}

.cardo {
  border-radius: 16px;
  background: var(--Dark-service, #12151c);
  padding: 48px;
  margin-top: 48px;
}

.cardo p {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
}

.map {
  margin-top: 0px;
  margin-bottom: 40px;
}

.map iframe {
  width: 100%;
  height: 460px;
  border-radius: 24px;
  filter: invert(90%);
}

@media screen and (max-width: 1024px) {
  .separator {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .right p {
    font-size: 14px;
  }

  .section {
    margin-bottom: 40px;
  }

  .cardo {
    padding: 20px;
  }

  .map iframe {
    height: 260px;
    border-radius: 12px;
  }
}
</style>
