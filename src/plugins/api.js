import axios from "axios";

window.axios = axios;
window.axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY4MjkxNDYxODY5ZTA1NmU4NzFjY2RmOTMyNjhmYjJjZGJjMDhhZjZlNmI0MWUzYzZjMjM0NzU2YTM2ZGRjNWRmZjQ0NzYzNTliY2M3ZWZmIn0.eyJhdWQiOiIxIiwianRpIjoiZjgyOTE0NjE4NjllMDU2ZTg3MWNjZGY5MzI2OGZiMmNkYmMwOGFmNmU2YjQxZTNjNmMyMzQ3NTZhMzZkZGM1ZGZmNDQ3NjM1OWJjYzdlZmYiLCJpYXQiOjE1OTY2NTgwNjMsIm5iZiI6MTU5NjY1ODA2MywiZXhwIjoxNjI4MTk0MDYzLCJzdWIiOiI5OTUiLCJzY29wZXMiOltdfQ.OzM2NN73DaMb-isEq-qjtaiG1RNzwcDCMR4AgDA095Ye-ZTMIW6lJSfvfTd2rbFAdZLmVaxV9R8L-rOlIk_Izd2lcaNYveG5Zt9rUgduqO5rxWFUxU7ljmiksxYz0EkjlJNNDMgKKwY2wwEVAGaIbZVa-qKWo1fKFY3SJ78PAVhHjPt1yHgfsnW8dUBkNlDLcDmSdz4t6_goVFsh7Mmo6hI5gfiZrDSVSOhAvDRktPQkHUGiVTin4nCD3p4xUUd-31lT9Iz7jogVvN2yfl_sDn5gxJD5wIjbAxGe8CNs3BVpkbQXGPG-GccW65ciEvWMeqbb2yiSwr7jjrFirQ_FlR_RsjOBm9GEZrxqtzYdXHhloD942idbao5nn9b2GyUqqU7jBx7RobOEDCCjWxB-7QfXiycUAbcbtLfzweJWB_kh2w3pr72zAHAvbSWxPMYwkofc6jwLzofSLveTBetrCppRruWRuVhmSlzCN953w4T9zSIYf5q6qS4rTfgOeeNjt3qlo1uItQC2mkgcHg3XDIn3-GDu-fe7LEANpLaE5IfzzzrVS_Xb4b7Q4eeYtl-tGSFNhL4WHEhNappHSphwwJLAPB6PIOGHpyOpeShkHzYAQ9IZ-VvsmDQD6E6QeDWGQaBUJA8bkxEqoGm3Nx5A1O9mz5C8gbl5av96jTHE_LQ";
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
