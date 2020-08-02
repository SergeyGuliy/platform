import axios from "axios";

window.axios = axios;
window.axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmYjcwMjU5MTRhZDkzNGI2NDcyZDdlZmViMGFhNjJjYWI2ZWRmMGRhMGY2OGM1OTlkODQ4NzVlZjYzZGE3ZmVkNDhhNzFjOTBkOTdhYjNhIn0.eyJhdWQiOiIxIiwianRpIjoiNmZiNzAyNTkxNGFkOTM0YjY0NzJkN2VmZWIwYWE2MmNhYjZlZGYwZGEwZjY4YzU5OWQ4NDg3NWVmNjNkYTdmZWQ0OGE3MWM5MGQ5N2FiM2EiLCJpYXQiOjE1OTUwMDM3ODUsIm5iZiI6MTU5NTAwMzc4NSwiZXhwIjoxNjI2NTM5Nzg1LCJzdWIiOiI5OTUiLCJzY29wZXMiOltdfQ.hl1ngD-Sdgwei80wxp_GwhBypVM9dnpFyHsAwK6mbrC6oU2QHs1pZI77vFBuEXjk5CuxeaYPAYboigYXNk6RZXXumVpe3-3KEnUTGjzmbm-aBmOvz5IE4K-izboclbsldAAo8jzbIy6OXM1LQRATDpOElMitEkfoX-mL2SidnCf9HTkfeQnDuRYKepuRMdyOzd0HDImnsGdBhthGH8-X136MPZqj6k1rYIeVo5szE5k7IoR4cKZOfSWFyw1gjzG2iizMpEpyJdS1IXCoYgbpRRNYWtNnhi1_VhqF2CAK1lIJqJma-jf4dThSjW3kWHZXYLoFp4DQIF7o4JG-O4Is3UzCyXvacMWN-nRWdfyWIpDq9CS3MY1amAQjjn_xkbpEc_l8ToC4ByTZiNeyQtfak3t4g_CoeQzztmGQWGxR_u4abV3FsuSjHc14oqu1AY-5z3APYZAgYkGiCalbI_8Kz1OS1wgH5oe9HUyt52dA9Yql9pHEEbxnNcGUSsqy6o9kXhxYXQFqRxwL5ufNdKcJD7joigjvShvxfLkMHNnVkcSG3bNUsnkGA9Ay09YzTW-h3N5YJP0BSn15-qypRO6xP5bbpMUJYZeyu2xzWvfyZdeIroUfNJ00Hm07ypzhWD6YCA42TMfTCRfvbJPg-gouRWyXqunoT0lJIpMQ0ZqzAAY";
window.axiosTokens = {};
let domain = "";

export default {
  install(Vue, { options, routes }) {
    domain = options.domain;
    Vue.prototype.$api = routes;
  }
};

function buildData(formData, data, parentKey) {
  if (Array.isArray(data) && data.length === 0) {
    formData.append(parentKey, []);
  } else if (data && typeof data === "object" && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? "" : typeof data === "boolean" ? Number(data) : data;
    formData.append(parentKey, value);
  }
}

function jsonToFormData(data) {
  const formData = new FormData();
  buildData(formData, data);
  return formData;
}

function request(method, url, data, vmId = null, scope = "form", progress = () => {}) {
  data = { ...data };

  if (["delete", "put", "patch"].indexOf(method) !== -1) {
    data["_method"] = method;
    method = "post";
  }

  if (method === "post") {
    data = jsonToFormData(data);
  }
  let config = {
    method,
    url: domain + url
  };

  if (progress) {
    config = { ...config, onUploadProgress: progress.onUploadProgress };
  }

  if (method === "get") {
    config.params = data;
  } else {
    config.data = data;
  }

  let tokenKey = url;

  if (window.axiosTokens[tokenKey] && tokenKey !== "data") {
    window.axiosTokens[tokenKey]();
  }

  config.cancelToken = new window.axios.CancelToken(function executor(token) {
    window.axiosTokens[tokenKey] = token;
  });
  return window
    .axios(config)
    .then(data => {
      let response = data.data;

      if (response.description) {
        if (Array.isArray(response.description)) {
          response.description.forEach(description => {
            window.vue.$notify({
              group: "default",
              type: "success",
              text: description
            });
          });
        } else if (typeof response.description === "string") {
          window.vue.$notify({
            group: "default",
            type: "success",
            text: response.description
          });
        }
      }

      return data;
    })
    .catch(data => {
      if (data.response) {
        if (data.response.status === 403 && window.vue) {
          window.vue.$store.dispatch("main/checkTokenException");
          window.vue.$router.replace({ name: "login" });
        }

        let response = data.response.data;
        if (response.description) {
          if (Array.isArray(response.description)) {
            response.description.forEach(description => {
              window.vue.$notify({
                group: "default",
                type: "danger",
                text: description
              });
            });
          } else if (typeof response.description === "object") {
            if (response.description.validator) {
              if (vmId && scope) {
                Object.keys(response.description.validator).forEach(key => {
                  let error =
                    typeof response.description.validator[key] === "string"
                      ? response.description.validator[key]
                      : response.description.validator[key][0];

                  window.vue.errors.add({
                    vmId: vmId,
                    field: key,
                    msg: error,
                    scope: scope
                  });
                });
              }
            }
          } else if (typeof response.description === "string") {
            window.vue.$notify({
              group: "default",
              type: "danger",
              text: response.description
            });
          }
        }
      }
      return Promise.reject(data.response);
    });
}

export const ajax = {
  get: (url, data = {}, vmId = null, scope = "form") => request("get", url, data, vmId, scope),
  post: (url, data = {}, vmId = null, scope = "form", progress = () => {}) =>
    request("post", url, data, vmId, scope, progress),
  put: (url, data = {}, vmId = null, scope = "form") => request("put", url, data, vmId, scope),
  patch: (url, data = {}, vmId = null, scope = "form") => request("patch", url, data, vmId, scope),
  delete: (url, data = {}, vmId = null, scope = "form") => request("delete", url, data, vmId, scope)
};
