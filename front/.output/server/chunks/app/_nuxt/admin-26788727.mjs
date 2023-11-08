import { defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFetchApi } from './useFetchApi-43505cf2.mjs';
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
  __name: "admin",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: admin, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetchApi("/admin")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtExampleLayout = resolveComponent("NuxtExampleLayout");
      _push(ssrRenderComponent(_component_NuxtExampleLayout, mergeProps({
        repo: "nuxt/examples",
        example: "advanced/use-custom-fetch-composable"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-xl opacity-50"${_scopeId}> ADMIN \uAD00\uB9AC\uC790 \uC815\uBCF4 </h1>`);
            if (unref(pending)) {
              _push2(`<p${_scopeId}>Fetching...</p>`);
            } else if (unref(error)) {
              _push2(`<pre${_scopeId}>\uAD00\uB9AC\uC790\uC815\uBCF4 \uC870\uD68C \uBD88\uAC00 : ${ssrInterpolate(unref(error).data)}</pre>`);
            } else {
              _push2(`<table${_scopeId}><tr${_scopeId}><th scope="col"${_scopeId}>ID</th><th scope="col"${_scopeId}>\uAD00\uB9AC\uC790\uBA85</th><th scope="col"${_scopeId}>\uBD80\uC11C\uBA85</th></tr><!--[-->`);
              ssrRenderList(unref(admin), (item) => {
                _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.id)}</td><td${_scopeId}>${ssrInterpolate(item.name)}</td><td${_scopeId}>${ssrInterpolate(item.deptname)}</td></tr>`);
              });
              _push2(`<!--]--></table>`);
            }
          } else {
            return [
              createVNode("h1", { class: "text-xl opacity-50" }, " ADMIN \uAD00\uB9AC\uC790 \uC815\uBCF4 "),
              unref(pending) ? (openBlock(), createBlock("p", { key: 0 }, "Fetching...")) : unref(error) ? (openBlock(), createBlock("pre", { key: 1 }, "\uAD00\uB9AC\uC790\uC815\uBCF4 \uC870\uD68C \uBD88\uAC00 : " + toDisplayString(unref(error).data), 1)) : (openBlock(), createBlock("table", { key: 2 }, [
                createVNode("tr", null, [
                  createVNode("th", { scope: "col" }, "ID"),
                  createVNode("th", { scope: "col" }, "\uAD00\uB9AC\uC790\uBA85"),
                  createVNode("th", { scope: "col" }, "\uBD80\uC11C\uBA85")
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(admin), (item) => {
                  return openBlock(), createBlock("tr", null, [
                    createVNode("td", null, toDisplayString(item.id), 1),
                    createVNode("td", null, toDisplayString(item.name), 1),
                    createVNode("td", null, toDisplayString(item.deptname), 1)
                  ]);
                }), 256))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-26788727.mjs.map
