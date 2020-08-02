import { store, router } from "../config";

export default (params, to, from, next) => {
  if (!store.getters["auth/check"]) {
    next();
    return;
  }

  next(false);
  router.replace({ name: "home" });
};
