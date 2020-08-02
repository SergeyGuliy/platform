<template>
  <div id="block2" class="profile-tabs-block block">
    <div class="profile-tabs-block-conteiner fdc">
      <div class="profile-tabs-block-calendar-wrapper">
        <button type="button" class="open-calendar" @click="calendar = false">
          <v-icon src="calendar" />
        </button>
        <div class="profile-tabs-block-calendar-date">Май, 2020</div>
        <div class="profile-tabs-block-calendar" v-if="calendar">
          <div class="profile-tabs-block-calendar-years">
            <div class="profile-tabs-block-calendar-button">
              <button type="button">
                <v-icon src="left" />
              </button>
            </div>
            <div class="profile-tabs-block-calendar-year">2020</div>
            <div class="profile-tabs-block-calendar-button">
              <button type="button" class="future">
                <v-icon src="right" />
              </button>
            </div>
          </div>
          <div class="profile-tabs-block-calendar-months">
            <span>Январь</span>
            <span>Февраль</span>
            <span>Март</span>
            <span>Апрель</span>
            <span class="month-active">Май</span>
            <span class="future">Июнь</span>
            <span class="future">Июль</span>
            <span class="future">Август</span>
            <span class="future">Сентябрь</span>
            <span class="future">Октябрь</span>
            <span class="future">Ноябрь</span>
            <span class="future">Декабрь</span>
          </div>
        </div>
      </div>
      <div class="profile-tabs-block-account-plan-wrapper">
        <div class="profile-tabs-block-account-wrapper">
          <div class="profile-tabs-block-account">
            <div class="profile-tabs-block-account-title">Счет к начислению</div>
            <div class="profile-tabs-block-account-content">₽{{ Math.floor($user.invoice_for_payment) }}</div>
            <div class="info-box" @mouseenter="showInfo" @mouseleave="hideInfo">
              <button type="button">
                <v-icon src="info" />
              </button>
              <div class="info-box__detail">
                Каждая отдельная выбранная тема должна конкретно и точно описывать содержание вашего курса, не обобщая
                излишне. Например для курса "Полный курс по теннису" необходимо выбрать тему "Теннис", а не "Подача в
                теннисе" (конкретная, но не точная) или "Спорт" (точная, но не конкретная).
              </div>
            </div>
          </div>
          <div class="profile-tabs-block-account">
            <div class="profile-tabs-block-account-title">Счет к выплате</div>
            <div class="profile-tabs-block-account-content">
              <div class="profile-tabs-block-account-content-item">₽{{ Math.floor($user.balance) }}</div>
              <div class="profile-tabs-block-account-content-item">Последний платеж:<br />-</div>
            </div>
            <div class="info-box" @mouseenter="showInfo" @mouseleave="hideInfo">
              <button type="button">
                <v-icon src="info" />
              </button>
              <div class="info-box__detail">
                Каждая отдельная выбранная тема должна конкретно и точно описывать содержание вашего курса, не обобщая
                излишне. Например для курса "Полный курс по теннису" необходимо выбрать тему "Теннис", а не "Подача в
                теннисе" (конкретная, но не точная) или "Спорт" (точная, но не конкретная).
              </div>
            </div>
          </div>
        </div>
        <div class="profile-tabs-block-plan-wrapper">
          <div class="cabinet-course-box__main-info-nav">
            <ul class="list">
              <li>
                <button type="button" data-id="" class="__clean-btn">
                  <span>Подать заявку на вывод</span>
                  <v-icon src="back" />
                </button>
              </li>
              <li>
                <button type="button" data-id="" class="__clean-btn">
                  <span>Сделать перевод</span>
                  <v-icon src="back" />
                </button>
              </li>
              <li>
                <button type="button" data-id="" class="__clean-btn">
                  <span>Statement</span>
                  <v-icon src="back" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMyEarningsBlock",
  data() {
    return {
      calendar: false
    };
  },
  methods: {
    showInfo($event) {
      $event.target.classList.add("active");
    },
    hideInfo($event) {
      $event.target.classList.remove("active");
    }
  }
};
</script>
