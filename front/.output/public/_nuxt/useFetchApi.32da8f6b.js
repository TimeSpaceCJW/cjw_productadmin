import{O as M,r as O,P as L,Q as H,R as j,S as A,g as U,J as I,v as k,T as K,m as $,z as W,U as J,V,W as q,X as Y,Y as Z,Z as G,$ as Q,a0 as X}from"./entry.e23ab090.js";const C=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function ee(r,i){if(typeof r!="string")throw new TypeError("argument str must be a string");const s={},t=(i||{}).decode||se;let n=0;for(;n<r.length;){const a=r.indexOf("=",n);if(a===-1)break;let u=r.indexOf(";",n);if(u===-1)u=r.length;else if(u<a){n=r.lastIndexOf(";",a-1)+1;continue}const c=r.slice(n,a).trim();if(s[c]===void 0){let o=r.slice(a+1,u).trim();o.codePointAt(0)===34&&(o=o.slice(1,-1)),s[c]=re(o,t)}n=u+1}return s}function z(r,i,s){const e=s||{},t=e.encode||ne;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!C.test(r))throw new TypeError("argument name is invalid");const n=t(i);if(n&&!C.test(n))throw new TypeError("argument val is invalid");let a=r+"="+n;if(e.maxAge!==void 0&&e.maxAge!==null){const u=e.maxAge-0;if(Number.isNaN(u)||!Number.isFinite(u))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(u)}if(e.domain){if(!C.test(e.domain))throw new TypeError("option domain is invalid");a+="; Domain="+e.domain}if(e.path){if(!C.test(e.path))throw new TypeError("option path is invalid");a+="; Path="+e.path}if(e.expires){if(!te(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");a+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(a+="; HttpOnly"),e.secure&&(a+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a}function te(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}function re(r,i){try{return i(r)}catch{return r}}function se(r){return r.includes("%")?decodeURIComponent(r):r}function ne(r){return encodeURIComponent(r)}function ie(...r){var b;const i=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(i);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=I(),a=()=>null,u=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];t.server=t.server??!0,t.default=t.default??a,t.getCachedData=t.getCachedData??u,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??M.deep;const c=()=>![null,void 0].includes(t.getCachedData(s));if(!n._asyncData[s]||!t.immediate){(b=n.payload._errors)[s]??(b[s]=null);const h=t.deep?O:L;n._asyncData[s]={data:h(t.getCachedData(s)??t.default()),pending:O(!c()),error:H(n.payload._errors,s),status:O("idle")}}const o={...n._asyncData[s]};o.refresh=o.execute=(h={})=>{if(n._asyncDataPromises[s]){if(h.dedupe===!1)return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((h._initial||n.isHydrating&&h._initial!==!1)&&c())return Promise.resolve(t.getCachedData(s));o.pending.value=!0,o.status.value="pending";const g=new Promise((f,p)=>{try{f(e(n))}catch(v){p(v)}}).then(f=>{if(g.cancelled)return n._asyncDataPromises[s];let p=f;t.transform&&(p=t.transform(f)),t.pick&&(p=ae(p,t.pick)),o.data.value=p,o.error.value=null,o.status.value="success"}).catch(f=>{if(g.cancelled)return n._asyncDataPromises[s];o.error.value=f,o.data.value=k(t.default()),o.status.value="error"}).finally(()=>{g.cancelled||(o.pending.value=!1,n.payload.data[s]=o.data.value,o.error.value&&(n.payload._errors[s]=K(o.error.value)),delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=g,n._asyncDataPromises[s]};const d=()=>o.refresh({_initial:!0}),y=t.server!==!1&&n.payload.serverRendered;{const h=$();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const f=h._nuxtOnBeforeMountCbs;h&&(j(()=>{f.forEach(p=>{p()}),f.splice(0,f.length)}),A(()=>f.splice(0,f.length)))}o.error.value||y&&n.isHydrating&&c()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):h&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(d):t.immediate&&d(),t.watch&&U(t.watch,()=>o.refresh());const g=n.hook("app:data:refresh",async f=>{(!f||f.includes(s))&&await o.refresh()});h&&A(g)}const l=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(l,o),l}function ae(r,i){const s={};for(const e of i)s[e]=r[e];return s}const R=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function oe(r,i){i?i={...R,...i}:i=R;const s=F(i);return s.dispatch(r),s.toString()}const ce=Object.freeze(["prototype","__proto__","constructor"]);function F(r){let i="",s=new Map;const e=t=>{i+=t};return{toString(){return i},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let a="";const u=n.length;u<10?a="unknown:["+n+"]":a=n.slice(8,u-1),a=a.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](t):r.ignoreUnknown||this.unkown(t,a);else{let o=Object.keys(t);r.unorderedObjects&&(o=o.sort());let d=[];r.respectType!==!1&&!E(t)&&(d=ce),r.excludeKeys&&(o=o.filter(l=>!r.excludeKeys(l)),d=d.filter(l=>!r.excludeKeys(l))),e("object:"+(o.length+d.length)+":");const y=l=>{this.dispatch(l),e(":"),r.excludeValues||this.dispatch(t[l]),e(",")};for(const l of o)y(l);for(const l of d)y(l)}},array(t,n){if(n=n===void 0?r.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const c of t)this.dispatch(c);return}const a=new Map,u=t.map(c=>{const o=F(r);o.dispatch(c);for(const[d,y]of o.getContext())a.set(d,y);return o.toString()});return s=a,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),E(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const N="[native code] }",ue=N.length;function E(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-ue)===N}class w{constructor(i,s){i=this.words=i||[],this.sigBytes=s===void 0?i.length*4:s}toString(i){return(i||le).stringify(this)}concat(i){if(this.clamp(),this.sigBytes%4)for(let s=0;s<i.sigBytes;s++){const e=i.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<i.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=i.words[s>>>2];return this.sigBytes+=i.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const le={stringify(r){const i=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;i.push((e>>>4).toString(16),(e&15).toString(16))}return i.join("")}},fe={stringify(r){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,a=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|n<<8|a;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(i.charAt(u>>>6*(3-c)&63))}return s.join("")}},he={parse(r){const i=r.length,s=[];for(let e=0;e<i;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new w(s,i)}},de={parse(r){return he.parse(unescape(encodeURIComponent(r)))}};class pe{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(i){typeof i=="string"&&(i=de.parse(i)),this._data.concat(i),this._nDataBytes+=i.sigBytes}_doProcessBlock(i,s){}_process(i){let s,e=this._data.sigBytes/(this.blockSize*4);i?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let a=0;a<t;a+=this.blockSize)this._doProcessBlock(this._data.words,a);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new w(s,n)}}class ye extends pe{update(i){return this._append(i),this._process(),this}finalize(i){i&&this._append(i)}}const T=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ge=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class me extends ye{constructor(){super(...arguments),this._hash=new w([...T])}reset(){super.reset(),this._hash=new w([...T])}_doProcessBlock(i,s){const e=this._hash.words;let t=e[0],n=e[1],a=e[2],u=e[3],c=e[4],o=e[5],d=e[6],y=e[7];for(let l=0;l<64;l++){if(l<16)x[l]=i[s+l]|0;else{const _=x[l-15],m=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,S=x[l-2],D=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;x[l]=m+x[l-7]+D+x[l-16]}const b=c&o^~c&d,h=t&n^t&a^n&a,g=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),f=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),p=y+f+b+ge[l]+x[l],v=g+h;y=d,d=o,o=c,c=u+p|0,u=a,a=n,n=t,t=p+v|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+a|0,e[3]=e[3]+u|0,e[4]=e[4]+c|0,e[5]=e[5]+o|0,e[6]=e[6]+d|0,e[7]=e[7]+y|0}finalize(i){super.finalize(i);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function we(r){return new me().finalize(r).toString(fe)}function be(r,i={}){const s=typeof r=="string"?r:oe(r,i);return we(s).slice(0,10)}function _e(r,i,s){var D;const[e={},t]=typeof i=="string"?[{},i]:[i,s],n=W(()=>{let B=r;return typeof B=="function"&&(B=B()),k(B)}),a=e.key||be([t,((D=k(e.method))==null?void 0:D.toUpperCase())||"GET",k(e.baseURL),typeof n.value=="string"?n.value:"",k(e.params||e.query),k(e.headers)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const u=a===t?"$f"+a:a;if(!e.baseURL&&typeof n.value=="string"&&n.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:o,default:d,transform:y,pick:l,watch:b,immediate:h,getCachedData:g,deep:f,...p}=e,v=J({...V,...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),_={server:c,lazy:o,default:d,transform:y,pick:l,immediate:h,getCachedData:g,deep:f,watch:b===!1?[]:[v,n,...b||[]]};let m;return ie(u,()=>{var P;return(P=m==null?void 0:m.abort)==null||P.call(m),m=typeof AbortController<"u"?new AbortController:{},typeof n.value=="string"&&n.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(n.value,{signal:m.signal,...v})},_)}const xe={path:"/",watch:!0,decode:r=>G(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function ve(r,i){var n;const s={...xe,...i},e=Se(s)||{},t=O(e[r]??((n=s.default)==null?void 0:n.call(s)));{const a=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${r}`),u=()=>{Be(r,t.value,s),a==null||a.postMessage(s.encode(t.value))};let c=!1;q()&&Y(()=>{c=!0,u(),a==null||a.close()}),a&&(a.onmessage=o=>{c=!0,t.value=s.decode(o.data),Z(()=>{c=!1})}),s.watch?U(t,()=>{c||u()},{deep:s.watch!=="shallow"}):u()}return t}function Se(r={}){return ee(document.cookie,r)}function ke(r,i,s={}){return i==null?z(r,i,{...s,maxAge:-1}):z(r,i,s)}function Be(r,i,s={}){document.cookie=ke(r,i,s)}function Ce(r,i={}){const s=ve("token"),t={baseURL:X().baseUrl??"http://localhost:8080",key:r,headers:s.value?{Authorization:`Bearer ${s.value}`}:{},onResponse(a){},onResponseError(a){}},n=Q(i,t);return _e(r,n,"$1YV9rb3tZJ")}export{Ce as u};
