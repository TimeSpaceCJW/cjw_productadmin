import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';
import { u as useFetchApi } from './useFetchApi-43505cf2.mjs';
import { useRoute, useRouter } from 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const productId = route.params.id;
    const { data: product, error } = ([__temp, __restore] = withAsyncContext(() => useFetchApi(`/productdetail/${productId}`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-xl opacity-50"> ADMIN \uC0C1\uD488 \uC0C1\uC138 </h1>`);
      if (unref(error)) {
        _push(`<pre>\uC0C1\uD488 \uC870\uD68C \uBD88\uAC00 : ${ssrInterpolate(unref(error).data)}</pre>`);
      } else {
        _push(`<table><tr><th scope="col">ID</th><th scope="col">\uC0C1\uD488\uBA85</th><th scope="col">\uC0C1\uD488 \uC0C1\uC138\uC815\uBCF4</th><th scope="col">\uAE08\uC561</th></tr><tr><td>${ssrInterpolate(unref(product).id)}</td><td>${ssrInterpolate(unref(product).name)}</td><td>${ssrInterpolate(unref(product).detail)}</td><td>${ssrInterpolate(unref(product).price)}</td></tr></table>`);
      }
      _push(`<button>\uC0AD\uC81C</button><!--]-->`);
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
//# sourceMappingURL=_id_-83b3e02f.mjs.map
