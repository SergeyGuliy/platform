import { store, router } from "../config";

export default (params, to, from, next) => {
  let user = store.getters["auth/user"];

  if (user && Array.isArray(user.has_permissions)) {
    if (user.has_permissions.some(item => item === "has_access_to_admin")) {
      next();
      return;
    }
  }

  next(false);
  router.replace({ name: "home" });
};
