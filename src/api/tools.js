import { ajax } from "../plugins/api";

export default {
  landings: {
    all: data => ajax.get("landings", data),
    get: id => ajax.get(`landings/${id}?include=backgroundImage`),
    create: (data = {}, vmId = null, scope = "form") => ajax.post("landings", data, vmId, scope),
    update: (id, data = {}, vmId = null, scope = "form") => ajax.put(`landings/${id}`, data, vmId, scope),
    destroy: id => ajax.delete(`landings/${id}`)
  }
};
