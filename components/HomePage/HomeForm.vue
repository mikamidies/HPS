<template>
  <div class="wrap" id="contacts">
    <div class="container">
      <div class="cardo">
        <div class="left">
          <h4 class="title">
            {{ $store.state.translations["HomeForm.0_key0"] }}
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
        <div class="right">
          <img src="@/assets/img/form.png" alt="" class="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formApi from "@/api/form.js";

export default {
  data() {
    return {
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

        console.log(this.file);
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

      const message = `Name: ${this.full_name}%0APhone Number: ${this.number}`;

      this.$axios
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
        )
        .then((response) => {
          console.log("Successfully", response);
          this.full_name = "";
          this.number = "";
          this.email = "";
          this.file = "";
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

.wrap {
  padding: 120px 0;
  background: var(--Server-BG, #080b12);
}

.cardo {
  border-radius: 16px;
  background: var(--Dark-service, #12151c);
  padding: 80px;
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 92px;
}

.title {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 57.6px */
  margin-bottom: 110px;
}

form {
  border-radius: 16px;
  background: var(--Server-BG, #080b12);
  padding: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 28px;
  row-gap: 40px;
}

input,
.file_label {
  border-bottom: 1px solid var(--Dark-Border-server, #313641);
  padding: 12px 0;
  color: var(--Sertver-title, #b6bfd3);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

label {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
}

.checker {
  max-width: 277px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.cardo button {
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

.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}

.pic {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.cardo :deep(.ant-upload) {
  width: 100%;
  position: relative;
}
.cardo :deep(.ant-btn) {
  border: 0;
  background: transparent;
  border-radius: 0;
  border-bottom: 1px solid #313641;
  width: 100%;
  height: 100%;
  padding: 12px 0;
}
.cardo :deep(.ant-btn p) {
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
.cardo :deep(.ant-upload-list) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 8;
  color: white;
  background: #080b12;
  width: 90%;
}
.cardo :deep(.anticon-paper-clip) {
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
  background: #080b12;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0;
  }

  .cardo {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }

  .footer {
    flex-direction: column;
    margin-top: 24px;
    gap: 24px;
  }

  .cardo button {
    width: 100%;
    justify-content: center;
  }

  form {
    padding: 24px;
  }

  .grid input:first-child {
    padding-top: 0;
  }

  .cardo {
    gap: 24px;
  }

  .pic {
    height: 260px;
    border-radius: 12px;
  }
}
</style>
