import{_ as m}from"./nuxt-link.4cb6756f.js";import{u as x}from"./useFetchApi.59d038d3.js";import{n as f,q as k,y,c as e,b as w,w as C,v as a,t as s,F as u,x as N,a as t,o as n}from"./entry.f773dc7a.js";const b=t("h1",{class:"text-xl opacity-50"}," ADMIN 상품 관리 ",-1),A=t("button",null,"등록",-1),B={key:0},D={key:1},F=t("tr",null,[t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"상품명"),t("th",{scope:"col"},"상품 상세정보"),t("th",{scope:"col"},"금액")],-1),g=["onClick"],M=f({__name:"product",async setup(v){let c,r;const{data:d,error:l}=([c,r]=k(()=>x("/product")),c=await c,r(),c),p=y(),i=_=>p.push({name:"productdetail-id",params:{id:_}});return(_,E)=>{const h=m;return n(),e(u,null,[b,w(h,{to:"/productwrite"},{default:C(()=>[A]),_:1}),a(l)?(n(),e("pre",B,"상품 조회 불가 : "+s(a(l).data),1)):(n(),e("table",D,[F,(n(!0),e(u,null,N(a(d),o=>(n(),e("tr",null,[t("td",null,s(o.id),1),t("td",{onClick:I=>i(o.id)},s(o.name),9,g),t("td",null,s(o.detail),1),t("td",null,s(o.price),1)]))),256))]))],64)}}});export{M as default};