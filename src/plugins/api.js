import axios from "axios";

window.axios = axios;
window.axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2ZTVkOTQxN2Y1NzRkZjhmYTVlN2UzOWU5NzU1ODUzZTY2YjRhODM4OWE3NjJjOWI4YzIwZDNmMjNkYTYzZTVhYjgwNjk3NDM3YWNkOWQyIn0.eyJhdWQiOiIxIiwianRpIjoiYjZlNWQ5NDE3ZjU3NGRmOGZhNWU3ZTM5ZTk3NTU4NTNlNjZiNGE4Mzg5YTc2MmM5YjhjMjBkM2YyM2RhNjNlNWFiODA2OTc0MzdhY2Q5ZDIiLCJpYXQiOjE1OTczNTU4MTMsIm5iZiI6MTU5NzM1NTgxMywiZXhwIjoxNjI4ODkxODEzLCJzdWIiOiI5OTUiLCJzY29wZXMiOltdfQ.kJdy8W4DAXXTFPR8HKeSCjtjjvNXxxW2qCCx5MtGe16WZ0bNudxAiiO2wNw3fsTkcDSU3IEgJj-04TsrCkV8-Zp8NKAo4Ttv6Y7_SoeXKLH02KaeeBLKluWaHj6CEGBronG9rgcY4XWnWXlQYK_kX6cXD-RgDiFunc9M-IR2Mjp2M4fgRdCpFPMtg3GLH3-jHGhdopYdJPkZboM1WpoG-V4zLPkROHNpLjHhcG8fNoX4aX3WoB6dNOLfz9_HLH2pTZBnBl5KIp7R__X-QjLePeKJfDSpQ6F1uDqspphPpN-N6M3fvKELtMAa8AlBmSCvAtgU3sgZEL6btAZ0i4Pulb9q-5P290F3DoCGFeKU5HpxXhIM0vb6VDYOSxKHRJZSOKivx3Vq3nqNoKK1Sj0a_0XwHnhR0XucDpf9NNqm9TTwwuVafRzCvcx4rEpXNRNByCaIzSWlcI9L8AggCNYnvISO3RmhPuL-kBoeTnawv_iJujARKq-f0k19791a3Xfq7FwlAXVMvlgakDrLubWPRa5JStEU72PtKMYg6zpN_VtTsxfVtR570kqW-IsFkNZXDgo4qfPbm5mbCsidARDnlKCLOLQAEgKoz-Ov5aDKml2d_q49DLbP__6Oz0soaqmbMlsUxjsF-guBeKZTAFa6cjBrwxxIt3THSOGSjFA2QWs";
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

  console.warn(method);
  if (["delete", "put", "patch"].indexOf(method) !== -1) {
    data["_method"] = method;
    // method = "post";
  }
  console.warn(method);

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
