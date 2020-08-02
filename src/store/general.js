import cookie from "vue-cookie";

export const state = {
  menuOpen: false,
  mobileMenuOpen: false,
  showMobileMenu: true,

  isMobile: false,
  isDesktop: false,
};

export const getters = {};

export const mutations = {
  OPEN_MENU(state) {
    state.menuOpen = true;
  },
  CLOSE_MENU(state) {
    state.menuOpen = false;
  },

  OPEN_MOBILE_MENU(state) {
    state.mobileMenuOpen = true;
  },
  CLOSE_MOBILE_MENU(state) {
    state.mobileMenuOpen = false;
  },

  SHOW_MOBILE_MENU(state) {
    state.showMobileMenu = true;
  },
  HIDE_MOBILE_MENU(state) {
    state.showMobileMenu = false;
  },

  SET_IS_MOBILE(state, status) {
    state.isMobile = status;
  },
  SET_IS_DESKTOP(state, status) {
    state.isDesktop = status;
  }
};

export const actions = {
  async init(context) {
    try {
      console.error('INIT PROJECT')
      let token = cookie.get("token");

      if (token) {
        await context.commit("auth/SAVE_AUTH", token, { root: true });
        await context.dispatch("auth/info", null, { root: true });
      }
    } catch (e) {
      console.error('ERROR INIT PROJECT')

    }

  },

  openMenu({ commit }) {
    commit("OPEN_MENU");
  },
  closeMenu({ commit }) {
    commit("CLOSE_MENU");
  },

  openMobileMenu({ commit }) {
    commit("OPEN_MOBILE_MENU");
  },
  closeMobileMenu({ commit }) {
    commit("CLOSE_MOBILE_MENU");
  },

  showMobileMenu({ commit }) {
    commit("SHOW_MOBILE_MENU");
  },
  hideMobileMenu({ commit }) {
    commit("HIDE_MOBILE_MENU");
  },

  setIsMobile({ commit }, data) {
    commit("SET_IS_MOBILE", data);
  },
  setIsDesktop({ commit }, data) {
    commit("SET_IS_DESKTOP", data);
  }
};
