<template>
  <div class="wrap" id="contacts">
    <div class="container">
      <div class="cardo">
        <div class="left">
          <h4 class="title">
            Развитие, применение новейших технологий и инновационных решений
          </h4>
          <form @submit.prevent="onSubmit">
            <div class="grid">
              <input v-model="full_name" type="text" placeholder="Ваше имя" required />
              <input v-model="number" type="text" placeholder="Номер телефона" required />
              <input v-model="email" type="text" placeholder="Эл. почта" />
              <input id="filer" type="file" placeholder="Загрузить файл" />
              <label for="filer" class="file_label">Загрузить ТЗ</label>
            </div>
            <div class="footer">
              <div class="checker">
                <input required id="check" type="checkbox" />
                <label for="check">
                  By sending this form I confirm that i haveread and accept
                  <span class="green">Privacy Policy</span>
                </label>
              </div>
              <button type="submit">
                Отправить
                <p class="stick"></p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 8L18 12M18 12L14 16M18 12L6 12" stroke="#1AB99D" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
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
import formApi from '@/api/form.js'

export default {
  data() {
    return {
      full_name: '',
      number: '',
      email: '',
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        email: this.email,
      }

      const res = await formApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$notification['success']({
          message: 'Успешно отправлено',
        });
      } else {
        this.$notification['error']({
          message: 'Ошибка',
        });
      }

      this.full_name = ''
      this.number = ''
      this.email = ''
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
  align-items: center;
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
