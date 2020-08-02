<template>
  <header class="header" :class="{ header_course: !showMobileMenu }">
    <div class="header__wrapper">
      <div class="header__details">
        <div class="header__mobile-button">
          <button @click="toggleMobileMenu" type="button" class="__clean-btn">
            <i></i>
          </button>
        </div>
        <div class="header__logo">
          <a href="#">
            <v-icon src="logo" />
          </a>
        </div>
        <router-link :to="{ name: 'profile' }" class="header__user">
          <div class="header__user-view">
            <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" alt="" />
          </div>
          <div class="header__user-detail">
            <b>{{ $user.full_name }}</b>
            <span>ID: {{ $user.authentication_id }}</span>
          </div>
        </router-link>
      </div>
      <div class="header__nav">
        <ul class="list">
          <li v-for="(item, id) in menu" :key="id" :class="{ active: isActiveItem(item) }">
            <router-link v-if="item.to" :to="item.to" @click.native="toggleMobileMenu" >
              <v-icon :src="item.icon" :style="isActiveItem(item) ? 'fill: #fdbd28' : ''"/>
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header__action">
        <button @click="toggleMenu" type="button" class="__clean-btn">
          <v-icon src="menu" />
          <span>Уменьшить меню</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  mounted() {
    console.log(this)
  },
  data() {
    return {
      menu: [
        {
          title: "Статистика",
          icon: "statistics",
          to: { name: "home" }
        },
        {
          title: "Обучение",
          icon: "training",
          to: { name: "educationPlatform" }
        },
        {
          title: "Структура",
          icon: "structure",
          to: { name: "structure" }
        },
        {
          title: "Инструменты",
          icon: "setting",
          to: { name: "tools" }
        },
        {
          title: "Сообщения",
          icon: "message",
          to: { name: "messages" }
        }
      ]
    };
  },
  computed: {
    mobileMenuOpen() {
      return this.$store.state.general.mobileMenuOpen
    },
    menuOpen() {
      return this.$store.state.general.menuOpen
    },
    showMobileMenu() {
      return this.$store.state.general.showMobileMenu
    },
  },
  methods: {
    isActiveItem(item) {
      return typeof item === "object" && item.to.name === this.$route.name;
    },
    toggleMobileMenu() {
      if (this.mobileMenuOpen) {
        this.$store.dispatch("general/closeMobileMenu");
      } else {
        this.$store.dispatch("general/openMobileMenu");
      }
    },
    toggleMenu() {
      if (this.menuOpen) {
        this.$store.dispatch("general/closeMenu");
      } else {
        this.$store.dispatch("general/openMenu");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .header__nav{
    .svg-icon.active{
      fill: url(#my-cool-gradient) #447799;

    }
  }
</style>
