import { ajax } from "../plugins/api";

export default {
  analytics: {
    total: (registration_type = "team") => ajax.get("analytics/total/registrations", { registration_type }),
    list: (registration_type = "team", data = {}) =>
      ajax.get("analytics/list/registrations", { registration_type, ...data }),

    charts: {
      group_volume: (userId, data) =>
        ajax.get("analytics/statistic", {
          user_id: userId,
          analytics_type: "group_volume",
          ...data
        }),
      registrations: (userId, data) =>
        ajax.get("analytics/statistic", {
          user_id: userId,
          analytics_type: "registrations",
          ...data
        }),
      activated_partners: (userId, data) =>
        ajax.get("analytics/statistic", {
          user_id: userId,
          analytics_type: "activated_partners",
          ...data
        }),

      total: (userId, data) =>
        ajax.get("analytics/statistic", {
          user_id: userId,
          analytics_type: "total_info",
          ...data
        }),
      get: (userId, analyticsType, data) =>
        ajax.get("analytics/statistic", {
          user_id: userId,
          analytics_type: analyticsType,
          ...data
        })
    }
  }
};
