import { defineComponent, withAsyncContext, useSSRContext } from 'vue';
import { u as useFetchApi } from './useFetchApi-95f08682.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admindetail",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => useFetchApi("/product")), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admindetail/admindetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admindetail-11baca1d.mjs.map
