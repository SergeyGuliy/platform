<template>
  <div class="block">
    <div class="block__head">
      <div class="before-triangle-text desc-hidden">Звезды в структуре</div>
      <div class="block__text fw-normal">
        <p>
          <b>Вырастил Звезду в первой линии — добро пожаловать во второй блок маркетинг-плана.</b>
        </p>
        <p>
          Второй блок подразумевает не только наличие Звезд в твоей структуре, но и то, что твои объемы тоже будут как у
          Звезд. Так, твой менеджер в квалификации<b> Star делает ГО 3000 баллов, </b>ты вместе с другими менеджерами
          делаешь объем 3000 баллов. Итого:<b> твой ГО — 6000 баллов, твоя квалификация — 1 Star. </b>А если ГО твоей
          структуры 4000 баллов, но при этом в структуре появилась Звезда с ГО 3000 баллов , то твой ГО — 1000 баллов и,
          соответственно, твоя квалификация — Master.
        </p>
        <p>
          ПОЭТОМУ если ты пришел в компанию позже, это не значит, что твой доход будет ниже, чем у тех, кто начал
          раньше. Ты можешь зарабатывать больше, чем человек, который привел тебя в команду.
        </p>
      </div>
      <div class="triangle-info">
        <div class="triangle-img">
          <v-icon src="warning" />
        </div>
        <div class="triangle-text">
          <div class="triangle-text-title">Важно!</div>
          <div class="triangle-text-content">
            <p>
              Если ты пригласил в свою команду сильного человека, он за тебя всю работу не сделает и твой бизнес не
              построит. Для подтверждения высоких квалификаций твои объемы без учета объемов Звезд также должны быть
              высокими
            </p>
          </div>
        </div>
      </div>

      <div class="block__text fw-normal">
        В этом блоке важное значение имеет<b> боковой объем.</b> Работай над боковиком, помогай всем членам команды!
        Вознаграждение в этом блоке рассчитывается в процентах за групповые объемы Звезд и боковые объемы менеджеров в
        квалификации от 1 Star и выше.
      </div>
      <div class="after-triangle-text">
        2 блок – для звездных квалификаций
      </div>
    </div>
    <div class="table-wrapper">
      <table class="table2">
        <tr class="row_1">
          <th class="col_1">Квалификация</th>
          <th class="col_2">1 Star</th>
          <th class="col_2">2 Stars</th>
          <th class="col_2">Diamond Star</th>
          <th class="col_2">Diamond Tutor</th>
        </tr>
        <tr class="row_2">
          <td class="col_1" colspan="6">Условия для получения вознаграждения</td>
        </tr>
        <tr class="row_4">
          <td class="col_1">Личный объем</td>
          <td class="col_2">70</td>
          <td class="col_2">70</td>
          <td class="col_2">70</td>
          <td class="col_2">70</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500">Звезды в первой линии (ГО звезд)</td>
          <td class="col_2">1 (3 000)</td>
          <td class="col_2">2 (6 000)</td>
          <td class="col_2">3 (9 000)</td>
          <td class="col_2">5 (15 000)</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 padd">Персональная группа (боковой объем)</td>
          <td class="col_2">3 000</td>
          <td class="col_2">2 000</td>
          <td class="col_2">1 000</td>
          <td class="col_2">1 000</td>
        </tr>
        <tr class="row_5 fw-normal">
          <td class="col_1 fw-normal">
            Групповой объем итого
          </td>
          <td class="col_2">6 000</td>
          <td class="col_2">8 000</td>
          <td class="col_2">10 000</td>
          <td class="col_2">16 000</td>
        </tr>
        <tr class="row_2">
          <td class="col_1 " colspan="6">
            Вознаграждение
            <v-icon width="24px" height="24px" src="info-yellow" css="modal-vis-3" />
            <div class="content-info-modal info-modal-3">
              Строка таблицы о вознаграждении «Личный объем» означает процент, который ты получаешь за свой личный
              объем.<br /><br />
              Следующие три строки — менеджеры твоей структуры. За их групповые объемы тебе также платят бонусы. <br />
              Здесь важно, что ты получаешь процент только за объемы тех менеджеров, чьи квалификации ниже, чем у тебя.
              Если, к примеру, ты Master Elite и в твоей структуре есть Master Elite — за него тебе бонус не полагается.
            </div>
          </td>
        </tr>
        <tr class="row_1 ">
          <td class="col_1 fw-500 tac">1 уровень</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
        </tr>
        <tr class="row_1 ">
          <td class="col_1 fw-500 tac">2 уровень</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">3 уровень</td>
          <td class="col_2">-</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">4 уровень</td>
          <td class="col_2">-</td>
          <td class="col_2">-</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">5 уровень</td>
          <td class="col_2">-</td>
          <td class="col_2">-</td>
          <td class="col_2">+3%</td>
          <td class="col_2">+3%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">6 уровень</td>
          <td class="col_2">-</td>
          <td class="col_2">-</td>
          <td class="col_2">-</td>
          <td class="col_2">+2%</td>
        </tr>
      </table>

      <div class="block__text fw-normal">
        Обрати внимание, что чем выше твоя квалификация, тем больше должен быть твой ГО и тем меньше допускается боковой
        объем.<br />
        А еще чем выше твоя квалификация, тем больше может быть твое вознаграждение.<br />
        Уровни в таблице — это глубина твоей структуры. Предположим, ты DS. У тебя в первой линии есть три Звезды, за их
        ГО ты получаешь 8%. В первой линии этих Звезд тоже есть Звезды. Это — вторая линия, твой бонус за их ГО — 7%. В
        свою очередь, эти Звезды тоже вырастили своих Звезд в первой линии, и за их ГО тебе начисляется 5%, и это —
        третья линия. И так далее.
      </div>
    </div>
    <div class="triangle-info triangle-info-sm poz-rel">
      <div class="triangle-img">
        <v-icon src="warning" />
      </div>
      <div class="triangle-text">
        <div class="triangle-text-title">Важно!</div>
        <div class="triangle-text-content modal-vis-5">
          <p>В этом блоке действует принцип <span class=""> компрессии</span></p>
        </div>
        <div class="content-info-modal info-modal-5">
          Что такое компрессия? Если в текущем месяце менеджер твоей первой линии не выполнил квалификацию Star, то
          Звезды его первой линии при расчете бонуса переходят в первую линию к тебе как к вышестоящему лидеру.
        </div>
      </div>
    </div>

    <div class="after-triangle-text">
      2 блок для бриллиантовой лестницы
    </div>
    <div class="block__text fw-normal">
      Если в твоей первой линии есть 5 Звезд и хотя бы одна из них стала Бриллиантом (квалификация от DS) — поздравляем,
      ты DT1! Обращаем внимание, что менеджер в бриллиантовой квалификации должен быть в твоей структуре, и не
      обязательно в первой линии.
    </div>
    <div class="table-wrapper">
      <table class="table3 ">
        <tr class="row_1">
          <th class="col_1 fw-500">Квалификация</th>
          <th class="col_2">Tutor 1 Diamond</th>
          <th class="col_2">Tutor 2 Diamond</th>
          <th class="col_2">Tutor 3 Diamond</th>
          <th class="col_2">Tutor 4 Diamond</th>
          <th class="col_2">Tutor 5</th>
        </tr>
        <tr class="row_2">
          <td class="col_1" colspan="7">Условия для получения вознаграждения</td>
        </tr>
        <tr class="row_4">
          <td class="col_1">Активность менеджера</td>
          <td class="col_2">ЛО 70</td>
          <td class="col_2">ЛО 70</td>
          <td class="col_2">ЛО 70</td>
          <td class="col_2">ЛО 70</td>
          <td class="col_2">ЛО 70</td>
        </tr>

        <tr class="row_1">
          <td class="col_1 fw-500 ptb7">Персональная группа (боковой объем)</td>
          <td class="col_2">1 000</td>
          <td class="col_2">1 000</td>
          <td class="col_2">500</td>
          <td class="col_2">500</td>
          <td class="col_2">-</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 ptb7">Количество Звезд в первой линии</td>
          <td class="col_2">5</td>
          <td class="col_2">5</td>
          <td class="col_2">5</td>
          <td class="col_2">5</td>
          <td class="col_2">5</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 ptb7">Количество бриллиантовых веток в структуре</td>
          <td class="col_2">1</td>
          <td class="col_2">2</td>
          <td class="col_2">3</td>
          <td class="col_2">4</td>
          <td class="col_2">5</td>
        </tr>
        <tr class="row_5 fw-bold">
          <td class="col_1 fw-normal">
            Групповой объем итого
          </td>
          <td class="col_2">23 000</td>
          <td class="col_2">50 000</td>
          <td class="col_2">100 000</td>
          <td class="col_2">250 000</td>
          <td class="col_2">500 000</td>
        </tr>
        <tr class="row_2">
          <td class="col_1" colspan="7">
            Вознаграждение
            <span class="modal-info">
              <v-icon width="24px" height="24px" src="info-yellow" css="modal-vis-4" />
              <div class="content-info-modal info-modal-4">
                Строка таблицы о вознаграждении «Личный объем» означает процент, который ты получаешь за свой личный
                объем.<br /><br />
                Следующие три строки — менеджеры твоей структуры. За их групповые объемы тебе также платят бонусы.
                <br />
                Здесь важно, что ты получаешь процент только за объемы тех менеджеров, чьи квалификации ниже, чем у
                тебя. Если, к примеру, ты Master Elite и в твоей структуре есть Master Elite — за него тебе бонус не
                полагается.
              </div></span
            >
          </td>
        </tr>
        <tr class="row_1 ">
          <td class="col_1 fw-500 tac">1 уровень</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
          <td class="col_2">+8%</td>
        </tr>
        <tr class="row_1 ">
          <td class="col_1 fw-500 tac">2 уровень</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
          <td class="col_2">+7%</td>
        </tr>

        <tr class="row_1">
          <td class="col_1 fw-500 tac">3 уровень</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">4 уровень</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
          <td class="col_2">+5%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">5 уровень</td>
          <td class="col_2">+3%</td>
          <td class="col_2">+3%</td>
          <td class="col_2">+3%</td>
          <td class="col_2">+3%</td>
          <td class="col_2">+3%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">6 уровень</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
        </tr>
        <tr class="row_1">
          <td class="col_1 fw-500 tac">7 уровень</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
          <td class="col_2">+2%</td>
        </tr>
      </table>

      <div class="block__text fw-normal pbo">
        <p>
          Бриллиантовые наставники получают вознаграждение за объемы семи уровней своей структуры. Проценты от каждого
          уровня одинаковые, но чем выше квалификация, тем выше объемы и, соответственно, тем больше получаются бонусы.
          <br />
        </p>

        <p>
          <b>Кто участвует?</b> Менеджеры в квалификации от 1 Star до Diamond Tutor (звездные квалификации) и менеджеры
          в квалификации Diamond Tutor 1 до Diamond Tutor 5 (бриллиантовая лестница).<br />
        </p>
        <p><b>Как рассчитывается?</b> Автоматически по итогам месяца.<br /></p>
        <p><b>Куда поступает?</b> На Бонусный счет.<br /></p>
        <p>
          <b>Логика:</b> научился делать объемы сам — научи другого и научи его обучать других! Найди 5 надежных
          бизнес-партнеров, они сделают тебя миллионером!
        </p>
      </div>
    </div>
    <div class="next-block-button">
      <button class="btn">Следующий блок</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "marketing-plan-stars-structure",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
