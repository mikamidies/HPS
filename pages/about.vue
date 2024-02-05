<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="first">
      <div class="container small separator">
        <div class="left">
          <h4 class="paragraph">
            {{ $store.state.translations["about.0_key0"] }}
          </h4>
        </div>
        <div class="right">
          <div class="content">
            <h4 class="title">
              {{ $store.state.translations["about.1_key1"] }}
              <span class="green">
                {{ $store.state.translations["about.2_key2"] }}
              </span>
            </h4>
            <p class="sub">
              {{ $store.state.translations["about.3_key3"] }}
              {{ $store.state.translations["about.4_key4"] }}
            </p>
          </div>

          <div class="nums">
            <div class="num">
              <div class="log">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                >
                  <g clip-path="url(#clip0_193_2455)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.315638 5.49503e-06L104.208 1.45776e-05C106.275 1.47583e-05 108.257 0.820915 109.718 2.28213C111.179 3.74334 112 5.72518 112 7.79165L112 111.684L96.4167 111.684L96.4167 26.6026L11.0193 112L-6.66584e-06 100.978L85.3975 15.5858L0.315636 15.5858L0.315638 5.49503e-06Z"
                      fill="url(#paint0_linear_193_2455)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_193_2455"
                      x1="104.208"
                      y1="7.79164"
                      x2="8.32434"
                      y2="103.676"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.150245" stop-color="#313641" />
                      <stop offset="1" stop-color="#12151C" />
                    </linearGradient>
                    <clipPath id="clip0_193_2455">
                      <rect
                        width="112"
                        height="112"
                        fill="white"
                        transform="translate(112 112) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p class="number">
                  {{ $store.state.translations["about.5_key5"] }}
                </p>
                <p class="value">
                  {{ $store.state.translations["about.6_key6"] }}
                </p>
              </div>
            </div>
            <div class="num">
              <div class="log">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                >
                  <g clip-path="url(#clip0_193_2461)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M111.684 112L7.79164 112C5.72517 112 3.74333 111.179 2.28212 109.718C0.820902 108.257 0 106.275 0 104.208L0 0.315636L15.5833 0.315636L15.5833 85.3974L100.981 0L112 11.0218L26.6025 96.4142L111.684 96.4142V112Z"
                      fill="url(#paint0_linear_193_2461)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_193_2461"
                      x1="7.79163"
                      y1="104.208"
                      x2="103.676"
                      y2="8.32429"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.150245" stop-color="#145146" />
                      <stop offset="1" stop-color="#12151C" />
                    </linearGradient>
                    <clipPath id="clip0_193_2461">
                      <rect width="112" height="112" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p class="number">
                  {{ $store.state.translations["about.7_key7"] }}
                </p>
                <p class="value">
                  {{ $store.state.translations["about.6_key6"] }}
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src="@/assets/img/about.png" class="image" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="second">
      <div class="container small separator">
        <div class="left">
          <h4 class="paragraph">
            {{ $store.state.translations["about.9_key9"] }}
          </h4>
        </div>
        <div class="right">
          <h4 class="title">
            {{ $store.state.translations["about.10_key10"] }}
          </h4>

          <form @submit.prevent="onSubmit">
            <div class="grid">
              <input
                v-model="full_name"
                type="text"
                :placeholder="$store.state.translations['place.name']"
                required
              />
              <input
                v-model="number"
                type="text"
                :placeholder="$store.state.translations['place.number']"
                required
              />
              <input
                v-model="email"
                type="text"
                :placeholder="$store.state.translations['place.email']"
              />
              <a-upload
                name="file"
                :multiple="false"
                action="https://admin.hpsuz.com/api/upload"
                :headers="headers"
                @change="handleChange"
                :file="file"
              >
                <a-button>
                  <p>
                    Загрузить файл
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 6L12 3M12 3L15 6M12 3L12 15"
                          stroke="#1AB99D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 9L7 9C4.79086 9 3 10.7909 3 13L3 17C3 19.2091 4.79086 21 7 21L17 21C19.2091 21 21 19.2091 21 17L21 13C21 10.7909 19.2091 9 17 9L16.5 9"
                          stroke="#1AB99D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </p>
                </a-button>
              </a-upload>
            </div>
            <div class="footer">
              <div class="checker">
                <input required id="check" type="checkbox" />
                <label for="check">
                  {{ $store.state.translations["about.12_key12"] }}
                  <span class="green">{{
                    $store.state.translations["place.privacy"]
                  }}</span>
                </label>
              </div>
              <button type="submit">
                {{ $store.state.translations["about.14_key14"] }}
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
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- <div class="third">
      <div class="container small separator">
        <div class="left">
          <h4 class="paragraph">{{ $store.state.translations['about.15_key15'] }}</h4>
        </div>
        <div class="right">
          <h4 class="title">
            {{ $store.state.translations['about.16_key16'] }}
            {{ $store.state.translations['about.17_key17'] }}
          </h4>
          <div class="persons">
            <div class="person">
              <div class="img">
                <img src="@/assets/img/person.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">{{ $store.state.translations['about.18_key18'] }}</p>
                <p class="status">{{ $store.state.translations['about.19_key19'] }}</p>
              </div>
            </div>
            <div class="person">
              <div class="img">
                <img src="@/assets/img/person.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">{{ $store.state.translations['about.18_key18'] }}</p>
                <p class="status">{{ $store.state.translations['about.19_key19'] }}</p>
              </div>
            </div>
            <div class="person">
              <div class="img">
                <img src="@/assets/img/person.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">{{ $store.state.translations['about.18_key18'] }}</p>
                <p class="status">{{ $store.state.translations['about.19_key19'] }}</p>
              </div>
            </div>
            <div class="person">
              <div class="img">
                <img src="@/assets/img/person.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">{{ $store.state.translations['about.18_key18'] }}</p>
                <p class="status">{{ $store.state.translations['about.19_key19'] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <HomePartners class="partners" />
  </div>
</template>

<script>
import formApi from "@/api/form.js";

export default {
  data() {
    return {
      title: this.$store.state.translations["about.0_key0"],
      full_name: "",
      number: "",
      email: "",
      file: "",

      token: "6273572946:AAFPB99kVWMrOWoR9NCHoO3ziAzv0Nh1WTM",
      chatId: "-1002084026037",

      headers: {},
    };
  },

  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);

        this.file = info.file.response.upload_url;
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },

    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        email: this.email,
        file: this.file,
      };

      const res = await formApi.sendApplication(formData);

      if (res && res.status === 201) {
        this.$notification["success"]({
          message: "Успешно отправлено",
        });
      } else {
        this.$notification["error"]({
          message: "Ошибка",
        });
      }

      const message = `Name: ${this.full_name}%0APhone Number: ${this.number} %0AEmail: ${this.email}`;

      this.$axios
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
        )
        .then((response) => {
          console.log("Successfully", response);
          this.full_name = "";
          this.number = "";
          this.email = "";
          this.file = null;
        }),
        (error) => {
          console.log(error);
        };
    },
  },
};
</script>

<style scoped>
#filer {
  display: none;
}

.separator {
  display: grid;
  grid-template-columns: 2fr 8fr;
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

.first .title {
  margin-bottom: 24px;
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 67.2px */
}

.first .sub {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  margin-bottom: 64px;
}

.nums {
  display: flex;
  align-items: center;
  gap: 72px;
  margin-bottom: 80px;
}

.num {
  display: flex;
  align-items: center;
  gap: 24px;
}

.number {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 38.4px */
  margin-bottom: 8px;
}

.value {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 30px */
}

.content {
  max-width: 800px;
}

.image {
  width: 100%;
  height: 596px;
  object-fit: contain;
}

.second form {
  border-radius: 16px;
  background: var(--Dark-service, #12151c);
  padding: 32px;
  max-width: 772px;
}

.second .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 28px;
  row-gap: 40px;
}

.second input,
.file_label {
  border-bottom: 1px solid var(--Dark-Border-server, #313641);
  padding: 12px 0 !important;
  color: var(--Sertver-title, #b6bfd3) !important;
  font-family: var(--medium) !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 150% !important;
  /* 24px */
}

.second label {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}

.second .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
}

.second .checker {
  max-width: 277px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.second form button {
  border-radius: 8px;
  border: 1px solid var(--green);
  background: #12151c;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.second .stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}

.second .title,
.third .title {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 57.6px */
  margin-bottom: 64px;
}

.second {
  margin: 120px 0;
}

.third {
  padding-bottom: 120px;
}

.persons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.person {
  border-radius: 16px;
  border: 1px solid var(--Dark-Border-server, #313641);
  overflow: hidden;
}

.img img {
  width: 100%;
  height: 400px;
  display: flex;
  object-fit: cover;
}

.third .content {
  padding: 24px;
}

.third .name {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 24px */
  margin-bottom: 8px;
}

.status {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
}

.partners {
  padding-bottom: 120px;
}

.partners :deep(.title) {
  display: none;
}

.second :deep(.ant-upload) {
  width: 100%;
  position: relative;
}
.second :deep(.ant-btn) {
  border: 0;
  background: transparent;
  border-radius: 0;
  border-bottom: 1px solid #313641;
  width: 100%;
  height: 100%;
  padding: 12px 0;
}
.second :deep(.ant-btn p) {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.second :deep(.ant-upload-list) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 8;
  color: white;
  background: #12151c;
  width: 90%;
}
.second :deep(.anticon-paper-clip) {
  display: none;
}
.grid :deep(span) {
  position: relative;
}
.grid :deep(.ant-upload-list-item-name) {
  padding: 0;
}
.grid :deep(.ant-upload-list-item) {
  margin: 0;
}
.grid :deep(.ant-upload-list-item-info) {
  padding: 0;
}
.grid :deep(.ant-upload-list-item:hover .ant-upload-list-item-info) {
  background: #12151c;
}

@media screen and (max-width: 1024px) {
  .separator {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  .first {
    padding: 0 0 20px 0;
    border-radius: 16px;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  .first .title,
  .second .title,
  .third .par {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .first .sub {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .nums {
    gap: 16px;
    margin-bottom: 32px;
  }

  .first .content {
    margin-bottom: 24px;
  }

  .num {
    gap: 12px;
  }

  .nums svg {
    width: 32px;
    height: 32px;
  }

  .number {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .value {
    font-size: 12px;
  }

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .paragraph {
    transform: none;
  }

  .second {
    margin: 40px 0;
  }

  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .second .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }

  .second .footer {
    flex-direction: column;
    margin-top: 24px;
    gap: 24px;
  }

  form button {
    width: 100%;
    justify-content: center;
  }

  .second form {
    padding: 24px;
  }

  .grid input:first-child {
    padding-top: 0;
  }

  .third .title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .persons {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .img {
    height: 200px;
  }

  .third .content {
    padding: 12px;
  }

  .person {
    border-radius: 12px;
  }

  .third .name {
    font-size: 15px;
  }

  .status {
    font-size: 14px;
  }

  .third {
    padding-bottom: 40px;
  }

  .partners {
    padding-bottom: 40px;
  }
}
</style>
