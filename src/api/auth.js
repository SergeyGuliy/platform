import { ajax } from "../plugins/api";
import { store } from "../config";

export default {
  auth: {
    check_token: () => {
      return ajax
        .get("check-token?include=referralLink,rank,country,city,sex,roles,avatar,referralParent.avatar")
        .then(({ data }) => {
          let response = data.data;
          console.warn(response);
          console.warn(response);
          store.commit("auth/SAVE_USER", response, { root: true });
          return response;
        })
        .catch(() => {
          console.warn("FAIL LOGIN");

          store.dispatch("auth/logout", {}, { root: true });
        });
    },
    update: (data, vmId = null, scope = "form") => ajax.put("users", data, vmId, scope),
    updateSex: (data, vmId = null, scope = "form") => ajax.post(`users/sex?include=sex`, data, vmId, scope)
  }
};
