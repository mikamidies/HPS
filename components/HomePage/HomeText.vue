<template>
  <div class="wrap">
    <div class="container small">
      <div class="cont">
        <h4 class="title">
          Ittelo – продажа серверов и серверного оборудования
        </h4>
        <p>
          Компания Ittelo занимается продажей корпоративного
          <span class="green"
            >сетевого оборудования и серверных комплектующих</span
          >. Инженеры Ittelo предлагают различные ИТ-решения на основе масштаба
          предприятия, его динамики развития и внутренней организационной
          структуры: серверы для 1С, файловые серверы для удаленного доступа к
          корпоративному программному обеспечению и общим документам, а также
          резервное хранение данных.
        </p>
      </div>
      <div class="cont" style="margin: 0">
        <h4 class="title">Полезные сервисы</h4>
        <p>
          Сотрудничество с Ittelo – это оперативная работа с ИТ-задачами. Причем
          нужное серверное оборудование сконфигурировать или получить готовые
          решения от наших экспертов. Одновременно мы даем гарантию на 5 лет.
        </p>
        <p>Кроме того, Ittelo обеспечивает:</p>
        <p>
          поставку серверного оборудования и комплектующих от ведущих вендоров;
        </p>
        <br />
        <ul>
          <li>5 лет гарантии на оборудование и работу ИТ-инженеров;</li>
          <li>бесплатную доставку по России со страховкой груза;</li>
          <li>удаленную помощь инженеров или замену оборудования.</li>
        </ul>
        <br />
        <p>
          Компания Ittelo упрощает работу с серверными системами и обеспечивает
          удобство и безопасность IT-решений для бизнеса.
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
  line-height: 120%; /* 38.4px */
  margin-bottom: 24px;
}
.cont {
  color: var(--Sertver-title, #b6bfd3);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
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
