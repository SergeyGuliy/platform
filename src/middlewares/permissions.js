import { store, router } from "../config";

export default (params, to, from, next) => {
  let user = store.getters["auth/user"];

  let permissions = [];
  if (typeof params === "string") {
    permissions.push(params);
  } else if (Array.isArray(params)) {
    permissions = permissions.concat(params);
  }

  if (user && Array.isArray(user.has_permissions)) {
    if (permissions.every(item => user.has_permissions.includes(item))) {
      next();
      return;
    }
  }

  next(false);
  if (user.has_permissions.includes("has_access_to_admin")) {
    router.replace({ name: "admin.home" });
  } else {
    router.replace({ name: "home" });
  }
};
