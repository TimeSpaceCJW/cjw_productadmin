import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "productwrite",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      detail: "",
      price: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-xl opacity-50"> ADMIN \uC0C1\uD488 \uB4F1\uB85D </h1><form><div><label for="name">\uC0C1\uD488\uBA85</label><input type="text"${ssrRenderAttr("value", formData.value.name)} id="name" placeholder="\uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694."></div><div><label for="detail">\uC0C1\uD488 \uC0C1\uC138\uC815\uBCF4</label><textarea id="detail" placeholder="\uC0C1\uD488 \uC0C1\uC138\uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694.">${ssrInterpolate(formData.value.detail)}</textarea></div><div><label for="price">\uAE08\uC561</label><input type="number"${ssrRenderAttr("value", formData.value.price)} id="price" placeholder="\uAE08\uC561\uC744 \uC785\uB825\uD558\uC138\uC694."></div><div><button type="submit">\uB4F1\uB85D</button></div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/productwrite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=productwrite-f0239c05.mjs.map
