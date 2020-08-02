<template>
  <div id="block1" class="profile-tabs-block block">
    <div class="profile-tabs-block-conteiner">
      <div class="profile-tabs-block-registration-wrapper">
        <v-block-wrapper>
          <v-block-item title="Кол-во менеджеров">
            {{ $user.count_of_children }}
          </v-block-item>
          <v-block-item title="ГО Персональный" yellow>
            {{ $user.personal_group_volume }}
          </v-block-item>
        </v-block-wrapper>

        <div class="profile-tabs-block-content-registration">
          Регистрация / Активация
          <div class="profile-tabs-block-content-registration-part">
            <div class="profile-tabs-block-content-registration-part-item">
              Дата регистрации <br />
              <span>{{ $user.created_at }}</span>
            </div>
            <div v-if="$user.parent.id" class="profile-tabs-block-content-registration-part-item">
              Зарегистрировал (-а)
              <div class="profile-tabs-block-content-registration-user">
                <div class="profile-tabs-block-content-registration-user-photo">
                  <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt="" />
                </div>
                {{ $user.parent.first_name }}
              </div>
            </div>
          </div>
          <div class="profile-tabs-block-content-registration-part">
            <div class="profile-tabs-block-content-registration-part-item">
              Дата активации <br />
              <span>{{ $user.last_activation_date }}</span>
            </div>
            <div class="profile-tabs-block-content-registration-part-item">
              Истекает <br />
              <span>{{ $user.activation_valid_to }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-tabs-block-plan-wrapper">
        <v-btn :to="{ name: 'marketing-plan' }">Маркетинг план</v-btn>

        <div class="cabinet-course-box__main-info-nav">
          <ul class="list">
            <li>
              <v-btn :to="{ name: 'documents' }" clean>Документы</v-btn>
            </li>
            <li>
              <v-btn :to="{ name: 'standards' }" clean>Стандарты и процедуры</v-btn>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="profile-tabs-block-go-out">
      <v-btn icon="log-out-yellow" third>Выйти</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileGeneralBlock"
};
</script>
