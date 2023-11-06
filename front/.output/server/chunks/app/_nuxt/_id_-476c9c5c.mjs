import { defineComponent, reactive, unref, useSSRContext } from 'vue';
import { g as useRoute } from '../server.mjs';
import { ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const productItem = reactive({
      id: "",
      name: "",
      detail: "",
      price: ""
    });
    console.log(productItem.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-xl opacity-50"> ADMIN \uC0C1\uD488 \uC0C1\uC138 </h1><table><tr><th scope="col">ID</th><th scope="col">\uC0C1\uD488\uBA85</th><th scope="col">\uC0C1\uD488 \uC0C1\uC138\uC815\uBCF4</th><th scope="col">\uAE08\uC561</th></tr><tr><td>${ssrInterpolate(unref(productItem).id)}</td><td>${ssrInterpolate(unref(productItem).name)}</td><td>${ssrInterpolate(unref(productItem).detail)}</td><td>${ssrInterpolate(unref(productItem).price)}</td></tr></table><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/productdetail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-476c9c5c.mjs.map
