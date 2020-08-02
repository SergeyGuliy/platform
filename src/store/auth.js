import cookie from "vue-cookie";
import { router } from "../config";
import { prepare } from "../helpers";

export const state = {
  token: null,
  user: {
    hasAccess: function() {
      return false;
    }
  }
};

export const getters = {
  check: state => !!state.token
};

export const mutations = {
  SAVE_AUTH(state, token) {
    state.token = token;
    window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  SAVE_USER(state, data) {
    state.user = {
      authentication_id: data.authentication_id,
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      full_name: `${data.first_name} ${data.last_name}`,
      self_volume: data.self_volume,
      group_volume: data.group_volume,
      email: data.email,
      hash: data.crm,
      parent: data.referralParent.data,
      last_activation_date: data.last_activation_date,
      activation_valid_to: data.activation_valid_to,
      invoice_for_payment: data.invoice_for_payment,
      country: {
        id: prepare(() => {
          return data.country.data.id;
        }),
        name: prepare(() => {
          return data.country.data.title;
        }),
        mask: prepare(() => {
          return data.country.data.mask;
        })
      },
      city: {
        id: prepare(() => {
          return data.city.data.id;
        }),
        name: prepare(() => {
          return data.city.data.title;
        })
      },
      sex: prepare(() => {
        return {
          id: data.sex.data.id,
          name: data.sex.data.name
        };
      }),
      phone: data.phone,
      balance: data.balance || 0,
      rank: prepare(() => {
        return data.rank.data.length ? data.rank.data[0].name : "-";
      }, "-"),
      referral_link: prepare(() => {
        return window.location.origin + "/register/" + data.referralLink.data.referral_link;
      }),
      used_space_in_first_line: data.used_space_in_first_line,
      available_space_in_first_line: data.available_space_in_first_line,
      count_in_first_line: data.count_in_first_line,
      count_of_children: data.count_of_children,
      created_at: data.created_at,
      has_roles: prepare(() => {
        return data.roles.data.map(item => ({
          title: item.display_name,
          name: item.name,
          start_at: item.start_at,
          valid_to: item.valid_to
        }));
      }, []),
      has_permissions: data.has_permissions,
      hasAccess: function(permissions) {
        if (typeof permissions === "string") {
          let temp = this.has_permissions.some(item => item === permissions.replace(/^!/, ""));
          return /^!/.test(permissions) ? !temp : temp;
        } else if (Array.isArray(permissions)) {
          return permissions.every(permission => {
            let temp = this.has_permissions.includes(permission.replace(/^!/, ""));
            return /^!/.test(permission) ? !temp : temp;
          });
        }
        return true;
      },
      hasRoles: function(roles) {
        if (typeof roles === "string") {
          let temp = this.has_roles.some(item => item.name === roles.replace(/^!/, ""));
          return /^!/.test(roles) ? !temp : temp;
        } else if (Array.isArray(roles)) {
          return roles.every(role => {
            let temp = this.has_roles.some(item => item.name === role.replace(/^!/, ""));
            return /^!/.test(role) ? !temp : temp;
          });
        }
        return true;
      }
    };
  },
  CLER_AUTH(state) {
    state.token = null;
    state.user = {
      hasAccess: function() {
        return false;
      }
    };
    delete window.axios.defaults.headers.common["Authorization"];
  }
};

export const actions = {
  login({ commit }, data) {
    console.warn("LOGIN");
    let token = data["response-content"].access_token;
    cookie.set("token", token, {
      domain: "." + process.env.FRONT_URL.replace(/^https?:\/\//, "")
    });
    commit("SAVE_AUTH", token);
    commit("SAVE_USER", data);
    router.replace({ name: "home" });
  },
  info() {
    return this._vm.$api.auth.check_token();
  },
  logout({ commit }) {
    cookie.delete("token", {
      domain: "." + process.env.FRONT_URL.replace(/^https?:\/\//, "")
    });
    commit("CLER_AUTH");
    router.replace({ name: "login" });
  }
};
