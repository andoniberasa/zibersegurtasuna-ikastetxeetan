(()=>{"use strict";var e,a,t,r,c,d={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=d,b.c=f,e=[],b.O=(a,t,r,c)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],c=e[i][2];for(var f=!0,o=0;o<t.length;o++)(!1&c||d>=c)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(f=!1,c<d&&(d=c));if(f){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,r,c]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var d={};a=a||[null,t({}),t([]),t(t)];for(var f=2&r&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(c,d),c},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",948:"8717b14a",973:"8ea1448e",1852:"c79b0257",1914:"d9f32620",2051:"721fb8a1",2144:"c3355aad",2267:"59362658",2362:"e273c56f",2452:"aa440bc4",2483:"d0cae391",2535:"814f3328",2773:"c67ff205",2946:"66d14472",3024:"98e4e78e",3085:"1f391b9e",3089:"a6aa9e1f",3514:"73664a40",3608:"9e4087bc",3727:"ebcdca7f",4013:"01a85c17",4195:"c4f5d8e4",4242:"321c3219",4368:"a94703ab",5254:"b4389e24",5338:"0d4dfd58",5972:"f1b5006c",6103:"ccc49370",6213:"4d9fa8bb",6455:"7a9cedb3",6649:"9a7b3e6b",7341:"d44a9bc7",7414:"393be207",7558:"528fa8aa",7756:"ee5e2eb2",7828:"058c072c",7918:"17896441",8436:"174f9e4f",8518:"a7bd4aaa",8601:"9d5bed37",8610:"6875c492",8636:"f4f34a3a",8650:"8cd71986",8768:"261bcd48",8841:"46510866",9003:"925b3f96",9333:"5021a0a8",9642:"7661071f",9661:"5e95c892",9671:"0e384e19",9817:"14eb3368",9896:"91f03dd0",9933:"2126dcd5"}[e]||e)+"."+{53:"c4d3db85",948:"1d7f9c56",973:"fdee02e7",1404:"23b44f27",1772:"1bcce1cb",1852:"369d85a8",1914:"47667f23",2051:"ae79377c",2144:"4cdb8b79",2267:"d4cbc929",2362:"c6a668c1",2452:"c57b3c5b",2483:"218a0ec7",2535:"53e2b537",2773:"d3aafcd2",2946:"07b0a711",3024:"579cb196",3085:"03e7daf3",3089:"9b842aa4",3514:"3c8a41d6",3608:"48ae65c5",3727:"ca4d3386",4013:"6ec00fd3",4195:"2e884fe7",4242:"e7c83223",4368:"b033ade6",5254:"eae4d827",5338:"4cd7aa32",5972:"51282128",6103:"812a8b30",6213:"1cd54112",6455:"76d60615",6649:"d079ffd0",7341:"eb66475a",7414:"1b32e0fa",7558:"7cc1970f",7756:"8ca01cf2",7828:"714a6568",7918:"2d775edf",8436:"a2b7d4d8",8518:"50fb155a",8601:"e0688d9d",8610:"1df8e380",8636:"d2eef6d4",8650:"6138ad54",8768:"5fed63b5",8841:"b5ec6bd9",9003:"81f1a430",9333:"7f8b584f",9642:"a5bcaa11",9661:"1db03320",9671:"d05447e1",9677:"d00e7e02",9817:"90ff8c5e",9896:"7619d012",9933:"6d0dc5b8"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},c="my-website:",b.l=(e,a,t,d)=>{if(r[e])r[e].push(a);else{var f,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+t){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",c+t),f.src=e),r[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/zibersegurtasuna-ikastetxeetan/",b.gca=function(e){return e={17896441:"7918",46510866:"8841",59362658:"2267","935f2afb":"53","8717b14a":"948","8ea1448e":"973",c79b0257:"1852",d9f32620:"1914","721fb8a1":"2051",c3355aad:"2144",e273c56f:"2362",aa440bc4:"2452",d0cae391:"2483","814f3328":"2535",c67ff205:"2773","66d14472":"2946","98e4e78e":"3024","1f391b9e":"3085",a6aa9e1f:"3089","73664a40":"3514","9e4087bc":"3608",ebcdca7f:"3727","01a85c17":"4013",c4f5d8e4:"4195","321c3219":"4242",a94703ab:"4368",b4389e24:"5254","0d4dfd58":"5338",f1b5006c:"5972",ccc49370:"6103","4d9fa8bb":"6213","7a9cedb3":"6455","9a7b3e6b":"6649",d44a9bc7:"7341","393be207":"7414","528fa8aa":"7558",ee5e2eb2:"7756","058c072c":"7828","174f9e4f":"8436",a7bd4aaa:"8518","9d5bed37":"8601","6875c492":"8610",f4f34a3a:"8636","8cd71986":"8650","261bcd48":"8768","925b3f96":"9003","5021a0a8":"9333","7661071f":"9642","5e95c892":"9661","0e384e19":"9671","14eb3368":"9817","91f03dd0":"9896","2126dcd5":"9933"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>r=e[a]=[t,c]));t.push(r[2]=c);var d=b.p+b.u(a),f=new Error;b.l(d,(t=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var c=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",f.name="ChunkLoadError",f.type=c,f.request=d,r[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var r,c,d=t[0],f=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(r in f)b.o(f,r)&&(b.m[r]=f[r]);if(o)var i=o(b)}for(a&&a(t);n<d.length;n++)c=d[n],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(i)},t=self.webpackChunkmy_website=self.webpackChunkmy_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();