(()=>{var t={9662:(t,r,e)=>{var n=e(7854),o=e(614),i=e(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9670:(t,r,e)=>{var n=e(7854),o=e(111),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,r,e)=>{var n=e(5656),o=e(1400),i=e(6244),a=function(t){return function(r,e,a){var u,c=n(r),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(1702),i=e(8361),a=e(7908),u=e(6244),c=e(5417),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,h,d,m){for(var b,g,x=a(y),S=i(x),w=n(h,d),O=u(S),j=0,M=m||c,L=r?M(y,O):e||p?M(y,0):void 0;O>j;j++)if((v||j in S)&&(g=w(b=S[j],j,x),t))if(r)L[j]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:s(L,b)}else switch(t){case 4:return!1;case 7:s(L,b)}return l?-1:o||f?f:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},206:(t,r,e)=>{var n=e(1702);t.exports=n([].slice)},7475:(t,r,e)=>{var n=e(7854),o=e(3157),i=e(4411),a=e(111),u=e(5112)("species"),c=n.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===c||o(r.prototype))||a(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?c:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},4326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,r,e)=>{var n=e(7854),o=e(1694),i=e(614),a=e(4326),u=e(5112)("toStringTag"),c=n.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=c(t),u))?e:s?a(r):"Object"==(n=a(r))&&i(r.callee)?"Arguments":n}},9920:(t,r,e)=>{var n=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r,e){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var l=u[f];n(t,l)||e&&n(e,l)||c(t,l,s(r,l))}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},8052:(t,r,e)=>{var n=e(7854),o=e(614),i=e(8880),a=e(6339),u=e(3505);t.exports=function(t,r,e,c){var s=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet,p=c&&void 0!==c.name?c.name:r;return o(e)&&a(e,p,c),t===n?(f?t[r]=e:u(r,e),t):(s?!l&&t[r]&&(f=!0):delete t[r],f?t[r]=e:i(t,r,e),t)}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,r,e)=>{var n=e(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(8052),u=e(3505),c=e(9920),s=e(4705);t.exports=function(t,r){var e,f,l,p,v,y=t.target,h=t.global,d=t.stat;if(e=h?n:d?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in r){if(p=r[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(h?f:y+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,r,e)=>{var n=e(1702),o=e(9662),i=e(4374),a=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.bind,a=o.call,u=n&&i.bind(a,a);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},8173:(t,r,e)=>{var n=e(9662);t.exports=function(t,r){var e=t[r];return null==e?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7854),o=e(1702),i=e(7293),a=e(4326),u=n.Object,c=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):u(t)}:u},2788:(t,r,e)=>{var n=e(1702),o=e(614),i=e(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,r,e)=>{var n,o,i,a=e(8536),u=e(7854),c=e(1702),s=e(111),f=e(8880),l=e(2597),p=e(5465),v=e(6200),y=e(3501),h="Object already initialized",d=u.TypeError,m=u.WeakMap;if(a||p.state){var b=p.state||(p.state=new m),g=c(b.get),x=c(b.has),S=c(b.set);n=function(t,r){if(x(b,t))throw new d(h);return r.facade=t,S(b,t,r),r},o=function(t){return g(b,t)||{}},i=function(t){return x(b,t)}}else{var w=v("state");y[w]=!0,n=function(t,r){if(l(t,w))throw new d(h);return r.facade=t,f(t,w,r),r},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw d("Incompatible receiver, "+t+" required");return e}}}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),a=e(648),u=e(5005),c=e(2788),s=function(){},f=[],l=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),y=!p.exec(s),h=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(t){return!1}},d=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(p,c(t))}catch(t){return!0}};d.sham=!0,t.exports=!l||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?d:h},4705:(t,r,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,r){var e=c[u(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:(t,r,e)=>{var n=e(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(7854),o=e(5005),i=e(614),a=e(7976),u=e(3307),c=n.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&a(r.prototype,c(t))}},6244:(t,r,e)=>{var n=e(7466);t.exports=function(t){return n(t.length)}},6339:(t,r,e)=>{var n=e(7293),o=e(614),i=e(2597),a=e(9781),u=e(6530).CONFIGURABLE,c=e(2788),s=e(9909),f=s.enforce,l=s.get,p=Object.defineProperty,v=a&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),h=t.exports=function(t,r,e){if("Symbol("===String(r).slice(0,7)&&(r="["+String(r).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!i(t,"name")||u&&t.name!==r)&&p(t,"name",{value:r,configurable:!0}),v&&e&&i(e,"arity")&&t.length!==e.arity&&p(t,"length",{value:e.arity}),e&&i(e,"constructor")&&e.constructor){if(a)try{p(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var n=f(t);return i(n,"source")||(n.source=y.join("string"==typeof r?r:"")),t};Function.prototype.toString=h((function(){return o(this)&&l(this).source||c(this)}),"toString")},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(614),i=e(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:(t,r,e)=>{var n=e(7854),o=e(9781),i=e(4664),a=e(3353),u=e(9670),c=e(4948),s=n.TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor;r.f=o?a?function(t,r,e){if(u(t),r=c(r),u(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=l(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return f(t,r,e)}:f:function(t,r,e){if(u(t),r=c(r),u(e),i)try{return f(t,r,e)}catch(t){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(6916),i=e(5296),a=e(9114),u=e(5656),c=e(4948),s=e(2597),f=e(4664),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=u(t),r=c(r),f)try{return l(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:(t,r,e)=>{var n=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,u=e(3501),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||c(f,e));return f}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(614),a=e(111),u=n.TypeError;t.exports=function(t,r){var e,n;if("string"===r&&i(e=t.toString)&&!a(n=o(e,t)))return n;if(i(e=t.valueOf)&&!a(n=o(e,t)))return n;if("string"!==r&&i(e=t.toString)&&!a(n=o(e,t)))return n;throw u("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(1702),i=e(8006),a=e(5181),u=e(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},4488:(t,r,e)=>{var n=e(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},7152:(t,r,e)=>{var n=e(7854),o=e(2104),i=e(614),a=e(8113),u=e(206),c=e(8053),s=/MSIE .\./.test(a),f=n.Function,l=function(t){return s?function(r,e){var n=c(arguments.length,1)>2,a=i(r)?r:f(r),s=n?u(arguments,2):void 0;return t(n?function(){o(a,this,s)}:a,e)}:t};t.exports={setTimeout:l(n.setTimeout),setInterval:l(n.setInterval)}},3505:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.22.5",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:(t,r,e)=>{var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},7466:(t,r,e)=>{var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(7854),o=e(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(111),a=e(2190),u=e(8173),c=e(2140),s=e(5112),f=n.TypeError,l=s("toPrimitive");t.exports=function(t,r){if(!i(t)||a(t))return t;var e,n=u(t,l);if(n){if(void 0===r&&(r="default"),e=o(n,t,r),!i(e)||a(e))return e;throw f("Can't convert object to primitive value")}return void 0===r&&(r="number"),c(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:(t,r,e)=>{var n=e(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:(t,r,e)=>{var n=e(7854).TypeError;t.exports=function(t,r){if(t<r)throw n("Not enough arguments");return t}},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),a=e(9711),u=e(133),c=e(3307),s=o("wks"),f=n.Symbol,l=f&&f.for,p=c?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var r="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=c&&l?l(r):p(r)}return s[t]}},9554:(t,r,e)=>{"use strict";var n=e(2109),o=e(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1539:(t,r,e)=>{var n=e(1694),o=e(8052),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8509),a=e(8533),u=e(8880),c=function(t){if(t&&t.forEach!==a)try{u(t,"forEach",a)}catch(r){t.forEach=a}};for(var s in o)o[s]&&c(n[s]&&n[s].prototype);c(i)},6815:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152).setInterval;n({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},8417:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152).setTimeout;n({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},2564:(t,r,e)=>{e(6815),e(8417)}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";e(9554),e(1539),e(4747),e(2564);var t=document.querySelector("#option1"),r=document.querySelector("#option2"),n=document.querySelector("#option3"),o=document.querySelector("#right span"),i=document.querySelector("#wrong span"),a=0,u=0;document.querySelectorAll(".option").forEach((function(t){t.addEventListener("click",(function(){+t.textContent===c?(a++,o.textContent=a,document.querySelector(".operation__right").style.visibility="visible",document.querySelector(".operation__right").style.top="10px",setTimeout((function(){document.querySelector(".operation__right").style.visibility="hidden",document.querySelector(".operation__right").style.top="40px"}),800),f()):(u++,i.textContent=u,document.querySelector(".operation__wrong").style.visibility="visible",document.querySelector(".operation__wrong").style.top="40px",setTimeout((function(){document.querySelector(".operation__wrong").style.visibility="hidden",document.querySelector(".operation__wrong").style.top="10px"}),800))}))}));var c=0;f();var s=document.querySelectorAll(".menu__link");function f(){var e=Math.floor(21*Math.random()),o=Math.floor(21*Math.random()),i=document.querySelector(".menu__link._active");switch(i.dataset.operator){case"addition":c=e+o,document.querySelector("#operation").textContent="+";break;case"subtraction":if(e<o){var a=[o,e];e=a[0],o=a[1]}c=e-o,document.querySelector("#operation").textContent="-";break;case"multiplication":c=e*o,document.querySelector("#operation").textContent="*";break;case"division":for(;e%o!=0;)e=Math.floor(21*Math.random()),o=Math.floor(21*Math.random());c=e/o,document.querySelector("#operation").textContent=":"}var u=Math.floor(21*Math.random()),s=Math.floor(21*Math.random());if("multiplication"===i.dataset.operator&&(u*=Math.floor(21*Math.random()),s*=Math.floor(21*Math.random())),u===c||u===s)for(;u===c||u===s;)u=Math.floor(21*Math.random());if(s===c||s===u)for(;s===c||s===u;)s=Math.floor(11*Math.random());for(var f=[c,u,s],l=f.length-1;l>0;l--){var p=Math.floor(Math.random()*(l+1)),v=[f[p],f[l]];f[l]=v[0],f[p]=v[1]}document.querySelector("#num1").textContent=e,document.querySelector("#num2").textContent=o,t.textContent=f[0],r.textContent=f[1],n.textContent=f[2]}s.forEach((function(t){t.addEventListener("click",(function(){t.classList.contains("_active")||(s.forEach((function(t){t.classList.remove("_active")})),t.classList.add("_active"),f())}))}))})()})();
//# sourceMappingURL=bundle.js.map