<template>
  <div class="block">
    <div class="block__head">
      <div class="before-triangle-text desc-hidden">Персональная група</div>
      <div class="block__text">
        <p>
          <b>Выплаты за ГО первой линии</b>
        </p>
        <p><b>Кто участвует?</b> Менеджеры в квалификации Master и выше.</p>
        <p><b>Как распределяется?</b> Автоматически по итогам месяца.</p>
        <p><b>Куда поступает?</b> На Бонусный счет.</p>
        <p>
          Ты получаешь вознаграждение за свой личный объем и за групповые объемы твоей первой линии.Компания платит тебе
          за продажи, которые ты вместе со своими людьми, в том числе и за твой ЛО.
        </p>
      </div>
      <div class="triangle-info">
        <div class="triangle-img">
          <v-icon src="warning" />
        </div>
        <div class="triangle-text">
          <div class="triangle-text-title">Важно!</div>
          <div class="triangle-text-content">
            <p>Пока ты не достиг квалификации Star, понятия «боковой объем» и «групповой объем» идентичны.</p>
            <b><span style="color:#58606E">БОКОВОЙ ОБЪЕМ = </span><span style="color:#E05846">ГРУППОВОЙ ОБЪЕМ</span></b>
          </div>
        </div>
      </div>
      <div class="block__text fw-normal">
        То есть твоя квалификация зависит от боковика. И доход ты получаешь за групповые объемы менеджеров первой линии
        до квалификации Star.
      </div>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <tr class="row_1">
          <th class="col_1" colspan="2">Квалификация</th>
          <th class="col_2">Master</th>
          <th class="col_2">Master Elit</th>
          <th class="col_3">Star / Бонус StarPro</th>
        </tr>
        <tr class="row_2">
          <td class="col_1" colspan="5">Условия для получения вознаграждения</td>
        </tr>
        <tr class="row_3">
          <td class="col_1" colspan="2"></td>
          <td class="col_2">ЛО 70 <br /><span>ГО 1000</span></td>
          <td class="col_2">ЛО 70<br /><span>ГО 2000</span></td>
          <td class="col_3">ЛО 70<br /><span>ГО 3000</span></td>
        </tr>
        <tr class="row_2">
          <td class="col_1" colspan="5">
            Вознаграждение
            <v-icon width="24px" height="24px" src="info-yellow" css="modal-vis-2" />
            <div class="content-info-modal info-modal-2">
              Строка таблицы о вознаграждении «Личный объем» означает процент, который ты получаешь за свой личный
              объем.<br /><br />
              Следующие три строки — менеджеры твоей структуры. За их групповые объемы тебе также платят бонусы. <br />
              Здесь важно, что ты получаешь процент только за объемы тех менеджеров, чьи квалификации ниже, чем у тебя.
              Если, к примеру, ты Master Elite и в твоей структуре есть Master Elite — за него тебе бонус не полагается.
            </div>
          </td>
        </tr>
        <tr class="row_4 ">
          <td class="col_1" colspan="2">Личный объем</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+17%</td>
          <td class="col_3">+27%</td>
        </tr>
        <tr class="row_5">
          <td rowspan="3" class="col_4">
            Групповой<br />
            объем
          </td>
          <td class="col_4 nwb">Manager</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+17%</td>
          <td class="col_3">+72%</td>
        </tr>
        <tr class="row_5">
          <td class="col_4 nwb">Master</td>
          <td class="col_2">-</td>
          <td class="col_2">+10%</td>
          <td class="col_3">+20%</td>
        </tr>
        <tr class="row_5">
          <td class="col_4 nwb">Master Elite</td>
          <td class="col_2">-</td>
          <td class="col_2">-</td>
          <td class="col_3">+10%</td>
        </tr>
      </table>

      <div class="block__text fw-normal">
        <b>Таким образом:</b><br />
        • если ты Master, то получаешь 7% за объемы менеджеров (AM,SM) твоей первой линии без квалификации;<br />
        • если ты Master Elite, тебе начисляются 17% за квалификации Manager (AM,SM) и 10% за квалификации Master;
        <br />
        • Star, соответственно, получает 27% за квалификации Manager (AM,SM), 20% за квалификации Master и 10% за Master
        Elite.
      </div>
    </div>
    <div class="next-block-button">
      <button class="btn">Следующий блок</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "marketing-plan-personal-group",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
