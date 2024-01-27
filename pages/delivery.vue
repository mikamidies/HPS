<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="first section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">Доставка</p>
        </div>
        <div class="right">
          <h4 class="title">
            Доставка серверови оборудования
            <span class="green"> Привозимв срок, в дверь, бесплатно </span>
          </h4>
          <p>Свой отдел ВЭД и логистики, превосходим ожидание по срокам</p>
          <p>
            Ваши надежные серверы, оснащенные передовыми технологиями
            последнегопоколения, обеспечивают высокую степень нКаждый сервер мы
            оборачиваем пузырьковой пленкой и укладываем в фирменный коробки.
            Дополнительно защищаем ложементами из вспененного полиэтилена,
            формованным под наши сервера. Он обладает амортизирующими свойствами
            необходимыми для обеспечения сохранности сервера.
          </p>
          <p>
            Максимально защищаем оборудование, чтобы оно приехало к вам целым
            целым и готовым к работе.адежности.
          </p>
        </div>
      </div>
    </div>

    <div class="second section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">Логистика</p>
        </div>
        <div class="right">
          <h4 class="title">
            Свой отдел
            <span class="green"> логистики </span>
          </h4>
          <p>
            Наш логист всегда на связи, знает где ваш заказ, что с ним, когда
            приедет. Потеряли трек-номер? Он есть у нашего логиста. В ТК
            перепутали заказы — логист знает что делать.
          </p>
          <p>
            Если груз потерялся или был разбит — это наша ответственности. Мы
            страхуем каждую отправку. Работа логистической службы не
            заканчивается, когда мы передали заказ в ТК. Она заканчивается,
            когда сервер вами получен.
          </p>
          <p>
            Вся ответственность за груз на нас, пока вы его не получите в
            целости. Поэтому вы можете быть совершенно спокойны, даже если во
            время транспортировки что-то случится — мы все решим.
          </p>

          <div class="cardo">
            <p>
              <span class="green">1</span> Бесплатная доставка до двери по РФ
              при заказе от 20 000 рублей
            </p>
            <p>
              <span class="green">2</span> Быстрое отправление — протестируем и
              отправляем в течении3 дней после оплаты
            </p>
            <p>
              <span class="green">3</span> В любой населенный пункт. Доставляем
              даже в удаленные точки РФ Калининград, Сахалин, Приморский край
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="third section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">Хранение</p>
        </div>
        <div class="right">
          <h4 class="title">
            Бережное
            <span class="green"> хранение </span>
          </h4>
          <p>
            Мы не пользуемся адресным хранением, у нас свой склад в 500кв.
            Использование собственных площадей позволяет нам контролировать
            климатические условия хранения оборудования
          </p>
          <p>
            Чистое стандартизированное электричество, правильный температурный
            режим, отсутствие пыли и влаги. Все оборудование хранится в
            надлежащих условиях, что напрямую влияет на его будущую
            работоспособность.
          </p>
        </div>
      </div>
    </div>

    <div class="third section">
      <div class="container small separator">
        <div class="left">
          <p class="paragraph">Доставка</p>
        </div>
        <div class="right">
          <h4 class="title">
            Умеем доставлять в
            <span class="green"> СНГ </span>
          </h4>
          <p>
            Бесплатная доставка в Беларусь, Армению, Казахстан,Кыргызстан при
            покупке от 300 т.р
          </p>
          <p>
            Отправление и доставку полностью контролирует наш логист. Мы
            разработали памятку для вас. В ней подробно расписаны ответы на
            самые горящие вопросы — как получить оборудование, как действовать в
            случае замены или возврата? Подробно расскажем как правильно
            оформить его на таможне.По любым вопросам — мы всегда на связи
            ord@ittelo.ru
          </p>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.895214981805!2d69.27701777656321!3d41.311143100720365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1706349011967!5m2!1sru!2s"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Доставка'
    };
  },
};
</script>

<style scoped>
.separator {
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
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
}

.right p:last-child {
  margin: 0;
}

.section {
  margin-bottom: 120px;
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
  margin-top: 40px;
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
