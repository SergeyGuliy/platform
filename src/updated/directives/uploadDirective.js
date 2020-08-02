export const UploadDirective = {
  inserted: function(el, data, vnode) {
    const file = document.createElement("input");

    file.setAttribute("type", "file");
    file.setAttribute("id", data.arg);
    file.style.width = "0";
    file.style.display = "none";

    el.parentNode.insertBefore(file, el.nextSibling);
    el.addEventListener("click", () => {
      file.click();
    });

    file.addEventListener("change", thisData => {
      let emitData = { id: data.arg, file: thisData.target.files[0] };

      if (data.expression && vnode?.context[data.expression]) {
        vnode.context[data.expression](emitData);
      }
    });
  },
  unbind(el) {
    const input = el.nextSibling;
    el.removeEventListener("click", () => {});
    input.removeEventListener("change", () => {});
    input.remove();
  }
};
