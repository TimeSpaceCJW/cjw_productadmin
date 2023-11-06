import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { defineComponent, withAsyncContext, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "product",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: product, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetchApi("/product")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><h1 class="text-xl opacity-50"> ADMIN \uC0C1\uD488 \uAD00\uB9AC </h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/productwrite" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>\uB4F1\uB85D</button>`);
          } else {
            return [
              createVNode("button", null, "\uB4F1\uB85D")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(`<p>Fetching...</p>`);
      } else if (unref(error)) {
        _push(`<pre>\uC0C1\uD488 \uC870\uD68C \uBD88\uAC00 : ${ssrInterpolate(unref(error).data)}</pre>`);
      } else {
        _push(`<table><tr><th scope="col">ID</th><th scope="col">\uC0C1\uD488\uBA85</th><th scope="col">\uC0C1\uD488 \uC0C1\uC138\uC815\uBCF4</th><th scope="col">\uAE08\uC561</th></tr><!--[-->`);
        ssrRenderList(unref(product), (item) => {
          _push(`<tr><td>${ssrInterpolate(item.id)}</td><td>`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/productdetail/1" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td>${ssrInterpolate(item.detail)}</td><td>${ssrInterpolate(item.price)}</td></tr>`);
        });
        _push(`<!--]--></table>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=product-1cd06c45.mjs.map
