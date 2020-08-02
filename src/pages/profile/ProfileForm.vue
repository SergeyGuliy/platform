<template>
  <v-container title="Мои данные" full>
    <template #actions>
      <v-btn form="form-profile">Сохранить изменения и завершить</v-btn>
    </template>

    <v-form id="form-profile" @submit="send">
      <div class="profile-box__wrapper profile-edit">
        <div class="profile-box__header-user">
          <div class="uploader-box">
            <form action="">
              <div class="uploader-box__view profile-box__header-user-photo">
                <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt="" />
              </div>
              <div class="uploader-box__file profile-box__header-user-data">
                <label>
                  <input type="file" id="uploadImg" />
                  <span class="btn btn_add">Изменить фото профиля</span>
                </label>
              </div>
            </form>
          </div>
        </div>

        <v-form-wrapper title="Общая информация">
          <v-form-container>
            <div class="profile-box__all-info">
              <v-input name="first_name" title="Имя" rules="required" v-model="request.first_name" />

              <v-input name="last_name" title="Фамилия" rules="required" v-model="request.last_name" />

              <v-input name="email" disabled title="Email" :value="request.email" />

              <v-phone-mask name="phone" title="Телефон" rules="required" v-model="request.phone" />
            </div>

            <div class="profile-box__all-info">
              <v-select
                name="country_id"
                title="Страна"
                rules="required"
                v-model="request.country_id"
                :options="countries"
              />

              <v-select
                name="city_id"
                title="Город"
                rules="required"
                v-model="request.city_id"
                :options="cities"
                @search="loadCities"
              />

              <v-radio name="sex_id" title="Пол" :options="sexes" rules="required" v-model="request.sex_id" />
            </div>
          </v-form-container>

          <v-form-container>
            <div class="profile-box__all-info">
              <v-container-title-wrapper>
                <v-container-title-name small>Изменить пароль</v-container-title-name>
                <v-container-title-caption small>
                  Для изменения пароля введите текущий пароль и нажмите кнопку "Продолжить". Вам на почту придет ссылка,
                  перейдя по которой вы сможете изменить пароль
                </v-container-title-caption>
              </v-container-title-wrapper>

              <v-input name="current_password" title="Введите текущий пароль" />

              <v-btn type="button">Продолжить</v-btn>
            </div>

            <div class="profile-box__all-info">
              <div class="profile-box__all-info-content">
                <div class="profile-box__all-info-content-title profile-box__all-info-content-title-social">
                  Соц. сети
                  <div class="add-input-box__action">
                    <button class="btn btn_add">
                      <v-icon src="plus" />
                      <span>Add Account</span>
                    </button>
                  </div>
                </div>
                <div class="list-options">
                  <div class="list-options-item">
                    <v-icon src="vk" />
                    <div class="list-options-item-content">
                      -
                      <button type="button">
                        <v-icon src="edit" />
                      </button>
                    </div>
                  </div>
                  <div class="list-options-item">
                    <v-icon src="whatsapp" />
                    <div class="list-options-item-content">
                      -
                      <button type="button">
                        <v-icon src="edit" />
                      </button>
                    </div>
                  </div>
                  <div class="list-options-item">
                    <img src="/images/instagram.svg" alt="" />
                    <div class="list-options-item-content">
                      -
                      <button type="button">
                        <v-icon src="edit" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-form-container>
        </v-form-wrapper>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ProfileForm",
  $_veeValidate: {
    validator: "new"
  },
  mounted() {
    this.$set(this.request, "first_name", this.$user.first_name);
    this.$set(this.request, "last_name", this.$user.last_name);
    this.$set(this.request, "email", this.$user.email);
    this.$set(this.request, "phone", this.$user.phone);

    if (this.$user.country) {
      this.$set(this, "countries", [
        {
          value: this.$user.country.id,
          label: this.$user.country.name
        }
      ]);
    }
    this.$nextTick(() => {
      if (this.$user.city) {
        this.$set(this, "cities", [
          {
            value: this.$user.city.id,
            label: this.$user.city.name
          }
        ]);
      }
      this.$set(this.request, "city_id", this.$user.city ? this.$user.city.id : null);
    });
    this.$set(this.request, "country_id", this.$user.country ? this.$user.country.id : null);
    this.$set(this.request, "sex_id", this.$user.sex ? this.$user.sex.id : null);
    this.loadCountries();
    this.loadSexs();
  },
  data() {
    return {
      countries: [],
      cities: [],
      sexes: [],
      request: {
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        country_id: null,
        city_id: null,
        sex_id: null
      }
    };
  },
  watch: {
    "request.country_id": function() {
      this.$set(this.request, "city_id", null);
      this.$set(this, "cities", []);
    }
  },
  methods: {
    ...mapMutations("auth", ["SAVE_USER"]),

    send() {
      this.validate().then(() => {
        this.$api.auth
          .update(this.request, this._uid)
          .then(({ data }) => {
            let user = data.data;
            this.SAVE_USER(user);

            // this.$set(this.request, 'password', null)
            // this.$set(this.request, 'password_confirmation', null)

            // this.notify('Изменения успешно внесены', null, 'success')
          })
          .finally(() => {
            // this.loading = false
          });
      });
    },
    loadCountries() {
      this.$api.data.countries().then(({ data }) => {
        let countries = data.data.map(data => ({
          value: data.id,
          label: data.title
        }));
        this.$set(this, "countries", countries);
      });
    },
    loadSexs() {
      this.$api.data.sexs().then(({ data }) => {
        this.$set(
          this,
          "sexes",
          data.data.map(data => {
            return {
              value: data.id,
              label: data.name
            };
          })
        );
      });
    },
    loadCities(q) {
      if (this.request.country_id && q) {
        this.$api.data.cities(this.request.country_id, q).then(({ data }) => {
          this.cities = data.data.map(data => {
            return {
              value: data.id,
              label: data.title + (data.region ? ` (${data.region})` : ``)
            };
          });
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
