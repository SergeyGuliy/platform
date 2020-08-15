<template>
  <div id="InfoPage">
    <div class="title">Заявка на заключения договора</div>
    <p class="text" style="width: 540px;">
      Мы собрали для вас перечень документов необходимых для открытия ИП и для заключения договора
    </p>
    <div class="subtitle">Для открытия ИП вам необходимо:</div>
    <ul>
      <li><span>Открыть ИП в Налоговом Органе ОКВЭД 73.20, 73.11</span></li>
    </ul>
    <div class="box">
      <div class="left">
        <v-icon src="warning"></v-icon>
      </div>
      <div class="right">
        <div class="subtitle">Указать систему налогообложения усн 6%</div>
        <p class="text">
          Если вдруг не учли этот моментто у вас есть 30 дней со дня открытия ИП перейти на УСН 6%.
          <br />
          Если у вас открыто ип более 1 календарного месяца, то перейти на систему налогообложения можно только в конце
          года.
        </p>
      </div>
    </div>
    <ul>
      <li><span>Открыть счет в любом банке</span></li>
    </ul>
    <div class="subtitle">Для заключения договора вам понадобится следующие отсканированые документы:</div>
    <ul>
      <li>
        <span style="color: #1D2228;">Паспорт</span>
        <span>
          (скан разворота первой и второй страницы с фото и страницы с пропиской)
        </span>
      </li>
      <li><span>ИНН</span></li>
      <li><span>ОГРН</span></li>
      <li><span>Лист записи</span></li>
      <li><span>Уведомление о переходу на УСН (упрощеная система налогообложения)</span></li>
      <li><span>Справка об открытии счета (БАНК)</span></li>
    </ul>
    <v-button style="margin-top: 30px">Подать заявку на заключение договора</v-button>
  </div>
</template>

<script>
import VButton from "../../../../updated/common/components/VButton";

export default {
  name: "InfoPage",
  data() {
    return {};
  },
  components: {
    VButton
  },
  props: {}
};
</script>

<style lang="scss">
#InfoPage {
  width: 800px;
  ul {
    li {
      color: #ffc107;
      font-size: 22px;
      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #58606e;
      }
    }
  }
  .box {
    width: 724px;
    padding: 17px;
    padding-right: 40px;
    background: #ffffff;
    border: 1px solid #faac15;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    .left {
      svg {
        font-size: 13px;
        margin-top: 3px;
        margin-right: 17px;
      }
    }
    .right {
      .subtitle {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
