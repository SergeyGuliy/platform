import axios from "axios";

window.axios = axios;
window.axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRhNTFhYmFhNDRhZGUzY2RjYjg0YTAxNTdmNjY2NDNjNTg3ZDk5NjM1ZTc5MDdjYWM1NzhkOTM1YzliOWY3YTcyNzQ0ODk5ZDRiNjJjMzk4In0.eyJhdWQiOiIxIiwianRpIjoiZGE1MWFiYWE0NGFkZTNjZGNiODRhMDE1N2Y2NjY0M2M1ODdkOTk2MzVlNzkwN2NhYzU3OGQ5MzVjOWI5ZjdhNzI3NDQ4OTlkNGI2MmMzOTgiLCJpYXQiOjE1OTY4NDYxOTcsIm5iZiI6MTU5Njg0NjE5NywiZXhwIjoxNjI4MzgyMTk3LCJzdWIiOiI5OTUiLCJzY29wZXMiOltdfQ.iungx0pIQs2AhIIQ_s3P3EBK4zIkk60QV7skiwEeoRwHV1j5eJEL37-StD_McMYAKTOefozLMS0J8Nk1qHtZ9NWo_BgsmjiUgoP69G3CE0qVVTW37rUGzRTmuVnGP4JCzcYlItLP4TnmVwvWEHe5W8QL2MFw-V0UuuzyxtVaXDxnYY5NlBYl2K-j6KyRqfO3EcRE40FhUnJF4do9lMxZ2HEFgwcU5k0smIL9Jz18R6l2HPoMa-39kuRWU9g3HZdp_y3tJXDkTBcQd1kF0GX-iE0CbnCBaxTmpbaKd0eUE-N8doRymwRn5IR1z2qqvidSY7ookB1rJrlL6tNx962OjkpAdvU09Kcl7RhO9wIgjIK3RNdI0CIIqUnDyO2c6SxX9Nardwy6UnLuu16pliMmnxhzf1mLYSozMIf2KKaZQLn87JaGR6qEwl3Too4XbcXFSELWYEH5cEbG74ko5ebT5JsXD6VYaPNQkqTnRQ7U4U2REsbIM75byijIEJnX8R6hsAqlk63pJKKSwsqUN5FOxv1xre6GYAxZYthPnOw5ENKipafqihKXRAN_0eBq5Q_n-OSz_nIzd1_YrubuP8DNg-fw2n96rxpwisfmd0TyNiKxVqX12hFLzTeP3NdgnpNlJFQIEmswRazuDV166x84VI_kZg1vG-1FENkufumUKC8";
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
