import{u as d}from"./useFetchApi.59d038d3.js";import{n as i,q as m,s as h,u as x,w as y,o as t,v as s,c as a,t as n,F as f,x as k,a as e}from"./entry.f773dc7a.js";const g=e("h1",{class:"text-xl opacity-50"}," ADMIN 관리자 정보 ",-1),w={key:0},B={key:1},C={key:2},F=e("tr",null,[e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"관리자명"),e("th",{scope:"col"},"부서명")],-1),L=i({__name:"admin",async setup(N){let o,l;const{data:p,pending:_,error:r}=([o,l]=m(()=>d("/admin")),o=await o,l(),o);return(v,A)=>{const u=h("NuxtExampleLayout");return t(),x(u,{repo:"nuxt/examples",example:"advanced/use-custom-fetch-composable"},{default:y(()=>[g,s(_)?(t(),a("p",w,"Fetching...")):s(r)?(t(),a("pre",B,"관리자정보 조회 불가 : "+n(s(r).data),1)):(t(),a("table",C,[F,(t(!0),a(f,null,k(s(p),c=>(t(),a("tr",null,[e("td",null,n(c.id),1),e("td",null,n(c.name),1),e("td",null,n(c.deptname),1)]))),256))]))]),_:1})}}});export{L as default};
