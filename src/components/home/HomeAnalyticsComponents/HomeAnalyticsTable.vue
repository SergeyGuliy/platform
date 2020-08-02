<template>
  <div class="statistics-analitics-block-table-users">
    <table class="users-registration">
      <thead>
        <tr>
          <th>Имя и Фамилия</th>
          <th class="col-2">
            Дата регистрации
          </th>
          <!--                    <th class="col-2 color-yellow">-->
          <!--                        Дата регистрации-->
          <!--                        <v-icon src="down-yellow" />-->
          <!--                    </th>-->
          <th class="col-3">Дата активации</th>
          <th class="col-6">Наставник</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td class="col-1">{{ row.full_name }}</td>
          <td class="col-2">{{ row.created_at }}</td>
          <td class="col-3">-</td>
          <td class="col-6">-</td>
          <td class="col-5">
            <div class="info-box">
              <button type="button">
                <v-icon src="more-variable" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "home-analytics-table",
  props: {
    data: {
      required: true,
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
