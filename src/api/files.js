import { ajax } from "../plugins/api";

export default {
  files: {
    get: type => ajax.get("user-files", { type }),
    upload: (file, vmId = null, scope = "form") => ajax.post("user-files", { file }, vmId, scope),
    multipleUpload: (files, vmId = null, scope = "form") => ajax.post("user-files/multi", { files }, vmId, scope)
  }
};
