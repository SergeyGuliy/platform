<template>
  <div class="profile-box">
    <div class="profile-box__wrapper">
      <div class="create-course-box__body">
        <div class="builder-box__body-wrapper">
          <div class="builder-box__start">
            <div class="builder-box__start-nav">
              <router-link :to="{ name: 'profile' }" class="btn-link">
                <v-icon src="back" />
                <span>Назад</span>
              </router-link>
            </div>
            <div class="profile-marketing-plan">
              <div class="market-plan">
                <div class="market-plan__header">
                  <h2>Маркетинг план</h2>
                  <div class="profile-video-link-mob">
                    <a href="https://www.youtube.com/embed/DJiTO9ZrOo0" target="_blank" class="">
                      <v-icon src="play" />
                      Смотреть детальное видео
                    </a>
                  </div>
                  <div class="head__text">
                    В компании есть 2 основных направления выплат:
                  </div>

                  <div class="header__content">
                    <div class="header-content-left">
                      <div class="content-info">
                        <div class="content-info-img">
                          <v-icon src="market-plan" />
                        </div>
                        <div class="content-info-text">
                          <div class="helper-img"></div>
                          <h3>Маркетинг план</h3>
                          <div class="info-text-content">
                            Вознаграждение по маркетинг-плану-то, что ты заработаешь вместе со своими менеджерами. То
                            есть считается весь оборот твоей команды, включая тебя самого. Здесь учитывается
                            <span class="info-text-content-link" @click="info_modal_1 = !info_modal_1"
                              >ГРУПОВОЙ объем</span
                            >
                          </div>
                        </div>
                        <div :class="`content-info-modal info-modal-1 ${info_modal_1 ? 'modal-visible' : ''}`">
                          <span class="red fw-bold">Групповой объем</span><span class="red"> (ГО)</span> — сумма баллов
                          твоего личного объема и личных объемов всех менеджеров твоей структуры. Из чего он
                          складывается? <br /><span class="blue fw-bold">Личный объем</span>
                          <span class="blue">(ЛО)</span> — сумма Баллов за твою подписку (активация контракта). <br />
                          <b>Объем персональной группы</b> (боковой объем, или боковик) — сумма Балов за активацию
                          подписки менеджеров твоей структуры, имеющих квалификацию ниже Star.<br />
                          <b>Объем звезд</b> — сумма баллов за активацию подписки менеджеров твоей структуры, имеющих
                          квалификацию от Star и выше. Если ты достиг квалификации Master тебе открывается доступ к
                          выплатам по маркетинг-плану.<br /><b> Обязательное условие — выполнение ЛО 70 Баллов.</b>

                          <span @click="info_modal_1 = !info_modal_1">
                            <v-icon src="close-btn" />
                          </span>
                        </div>
                      </div>
                      <div class="content-info">
                        <div class="content-info-img">
                          <v-icon src="bonus" />
                        </div>
                        <div class="content-info-text">
                          <div class="helper-img"></div>
                          <h3>Бонус наставника</h3>
                          <div class="info-text-content">
                            Вознаграждение по бонусу наставника - то, что ты заработаешь за личный объем менеджеров
                            твоей первой линии.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="header-content-video">
                      <div class="movie-fixed_movie-container">
                        <iframe
                          width="500"
                          height="280"
                          src="https://www.youtube.com/embed/DJiTO9ZrOo0"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div class="before-triangle-text">
                    Маркетинг план делится на 3 блока:
                  </div>
                  <div class="triangle-info">
                    <div class="triangle-img">
                      <v-icon src="warning" />
                    </div>
                    <div class="triangle-text">
                      <div class="triangle-text-title">Важно!</div>
                      <div class="triangle-text-content">
                        Переход на каждый следующий блок маркетинг-плана не отменяет действие предыдущего: тебе
                        выплачивают новые бонусы дополнительно к тем, что ты уже получаешь.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="analytics">
                <v-tabs :options="tabs" v-model="tab" />

                <v-marketing-plan-personal-group v-if="tab === TAB_PERSONAL_GROUP" />
                <v-marketing-plan-stars-structure v-if="tab === TAB_STARS_STRUCTURE" />
                <v-marketing-plan-group-volume v-if="tab === TAB_GROUP_VOLUME" />
                <v-marketing-plan-calculate v-if="tab === TAB_CALCULATE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketingPlanPersonalGroup from "../components/marketing-plan/MarketingPlanPersonalGroup";
import MarketingPlanStarsStructure from "../components/marketing-plan/MarketingPlanStarsStructure";
import MarketingPlanGroupVolume from "../components/marketing-plan/MarketingPlanGroupVolume";
import MarketingPlanCalculate from "../components/marketing-plan/MarketingPlanCalculate";

const TAB_PERSONAL_GROUP = "block1";
const TAB_STARS_STRUCTURE = "block2";
const TAB_GROUP_VOLUME = "block3";
const TAB_CALCULATE = "block4";

export default {
  name: "marketing-plan",
  components: {
    "v-marketing-plan-personal-group": MarketingPlanPersonalGroup,
    "v-marketing-plan-stars-structure": MarketingPlanStarsStructure,
    "v-marketing-plan-group-volume": MarketingPlanGroupVolume,
    "v-marketing-plan-calculate": MarketingPlanCalculate
  },
  data() {
    return {
      TAB_PERSONAL_GROUP,
      TAB_STARS_STRUCTURE,
      TAB_GROUP_VOLUME,
      TAB_CALCULATE,
      tab: TAB_PERSONAL_GROUP,
      tabs: [
        { label: "Блок 1 : Персональная група", value: TAB_PERSONAL_GROUP },
        { label: "Блок 2 : Звезды в структуре", value: TAB_STARS_STRUCTURE },
        { label: "Блок 3 : Груповой объем", value: TAB_GROUP_VOLUME },
        { label: "Калькулятор", value: TAB_CALCULATE }
      ],

      info_modal_1: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
