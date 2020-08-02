<template>
  <v-container title="Мой Профиль" full>
    <div class="profile-box__header">
      <div class="profile-box__header-user">
        <div class="profile-box__header-user-photo">
          <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt="" />
        </div>
        <div class="profile-box__header-user-data">
          <div class="profile-box__header-user-name-info-wrapper">
            <div class="profile-box__header-user-name">{{ $user.full_name }}</div>
            <div class="profile-box__header-user-info">
              <div class="profile-box__header-user-info-item mr12">
                <v-icon src="qualification" />
                {{ $user.rank }}
              </div>
              <div class="profile-box__header-user-info-item">ID: {{ $user.authentication_id }}</div>
            </div>
          </div>
          <div class="profile-box__header-user-info">
            <div class="profile-box__header-user-info-item">
              <v-btn :to="{ name: 'profile-edit' }" icon="edit" third>Edit Profile</v-btn>
            </div>
            <div class="profile-box__header-user-info-item">
              <v-btn icon="link" third>Link Settings</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-tabs :options="tabs" v-model="tab" />

    <v-profile-general-block v-if="tab === TAB_GENERAL" />
    <v-profile-my-earnings-block v-if="tab === TAB_EARNINGS" />
  </v-container>
</template>

<script>
import ProfileGeneralBlock from "../../components/profile/ProfileGeneralBlock";
import ProfileMyEarningsBlock from "../../components/profile/ProfileMyEarningsBlock";

const TAB_GENERAL = "general";
const TAB_EARNINGS = "earnings";

export default {
  name: "Profile",
  components: {
    "v-profile-general-block": ProfileGeneralBlock,
    "v-profile-my-earnings-block": ProfileMyEarningsBlock
  },
  data() {
    return {
      TAB_GENERAL,
      TAB_EARNINGS,
      tab: TAB_GENERAL,
      tabs: [
        { label: "General", value: TAB_GENERAL },
        { label: "My earnings", value: TAB_EARNINGS }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
