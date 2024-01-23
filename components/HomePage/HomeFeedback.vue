<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="img">
          <img src="@/assets/img/cloud.png" alt="" />
        </div>
        <div class="cont">
          <h4 class="title">Связаться с нами</h4>
          <p class="sub">Новейших технологий и инновационных решений</p>
        </div>
        <form>
          <div class="inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Number" />
          </div>
          <button type="submit">
            Отправить
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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  background: #12151c;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr 6fr;
  align-items: center;
  gap: 16px;
}
form {
  align-items: center;
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 24px;
  margin-right: 32px;
}
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  color: var(--White, #fff);
  font-family: var(--decor);
  gap: 8px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
}
.sub {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
img {
  width: 100%;
  height: 190px;
  object-fit: contain;
}
.inputs {
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 24px;
}
input {
  width: 100%;
  border-bottom: 1px solid var(--Dark-Border-server, #313641);
  padding: 12px 0;
  color: var(--Sertver-title, #b6bfd3);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.grid button {
  border-radius: 8px;
  border: 1px solid var(--green);
  background: transparent;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--Server-green, #1ab99d);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  justify-content: center;
}
.stick {
  width: 1px;
  height: 16px;
  background: var(--green);
}
</style>
