<template>
  <div class="wrap">
    <div class="container small">
      <div class="cont">
        <h4 class="title">
          {{ $store.state.translations["HomeText.0_key0"] }}
        </h4>
        <p>
          {{ $store.state.translations["HomeText.0_key0"] }}
          <span class="green">{{
            $store.state.translations["HomeText.1_key1"]
          }}</span>
          {{ $store.state.translations["HomeText.2_key2"] }}
          {{ $store.state.translations["HomeText.3_key3"] }}
          {{ $store.state.translations["HomeText.4_key4"] }}
          {{ $store.state.translations["HomeText.5_key5"] }}
          {{ $store.state.translations["HomeText.6_key6"] }}
        </p>
      </div>
      <div class="cont" style="margin: 0">
        <h4 class="title">
          {{ $store.state.translations["HomeText.7_key7"] }}
        </h4>
        <p>
          {{ $store.state.translations["HomeText.8_key8"] }}
          {{ $store.state.translations["HomeText.9_key9"] }}
          {{ $store.state.translations["HomeText.10_key10"] }}
        </p>
        <p>{{ $store.state.translations["HomeText.11_key11"] }}</p>
        <p>
          {{ $store.state.translations["HomeText.12_key12"] }}
        </p>
        <br />
        <ul>
          <li>{{ $store.state.translations["HomeText.13_key13"] }}</li>
          <li>{{ $store.state.translations["HomeText.14_key14"] }}</li>
          <li>{{ $store.state.translations["HomeText.15_key15"] }}</li>
        </ul>
        <br />
        <p>
          {{ $store.state.translations["HomeText.16_key16"] }}
          {{ $store.state.translations["HomeText.17_key17"] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  background: #080b12;
  padding-bottom: 120px;
}

.title {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 38.4px */
  margin-bottom: 24px;
}

.cont {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 48px;
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 23px;
  }

  .cont {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .wrap {
    padding-bottom: 40px;
  }
}
</style>
