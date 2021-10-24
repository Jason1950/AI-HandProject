(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var t=aa(this);function u(a,b){if(b)a:{var c=t;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&r(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+h++,f)}function c(f,e){this.g=f;r(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=t[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&r(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ba(m(this))}})}return a});function ba(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}function ca(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var da="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},w;
if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var x;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;x=fa.a;break a}catch(a){}x=!1}w=x?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var z=w;function A(){this.j=!1;this.h=null;this.l=void 0;this.g=1;this.o=0;this.i=null}function B(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}A.prototype.m=function(a){this.l=a};
function C(a,b){a.i={I:b,J:!0};a.g=a.o}A.prototype.return=function(a){this.i={return:a};this.g=this.o};function E(a,b,c){a.g=c;return{value:b}}function ha(a){this.g=new A;this.h=a}function ja(a,b){B(a.g);var c=a.g.h;if(c)return F(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return G(a)}
function F(a,b,c,d){try{var h=b.call(a.g.h,c);if(!(h instanceof Object))throw new TypeError("Iterator result "+h+" is not an object");if(!h.done)return a.g.j=!1,h;var f=h.value}catch(e){return a.g.h=null,C(a.g,e),G(a)}a.g.h=null;d.call(a.g,f);return G(a)}function G(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,C(a.g,c)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.J)throw b.I;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ka(a){this.next=function(b){B(a.g);a.g.h?b=F(a,a.g.h.next,b,a.g.m):(a.g.m(b),b=G(a));return b};this.throw=function(b){B(a.g);a.g.h?b=F(a,a.g.h["throw"],b,a.g.m):(C(a.g,b),b=G(a));return b};this.return=function(b){return ja(a,b)};this[Symbol.iterator]=function(){return this}}function H(a,b){b=new ka(new ha(b));z&&a.prototype&&z(b,a.prototype);return b}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(a[h]=d[h])}return a};u("Object.assign",function(a){return a||la});
u("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var g=this.j();try{e(g.resolve,g.reject)}catch(k){g.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(g){g(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var g=this;this.i(function(){g.l()})}this.g.push(e)};var h=t.setTimeout;c.prototype.i=function(e){h(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var g=0;g<e.length;++g){var k=
e[g];e[g]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(n){k||(k=!0,l.call(g,n))}}var g=this,k=!1;return{resolve:e(this.D),reject:e(this.l)}};b.prototype.D=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.G(e);else{a:switch(typeof e){case "object":var g=null!=e;break a;case "function":g=!0;break a;default:g=!1}g?this.C(e):this.m(e)}};
b.prototype.C=function(e){var g=void 0;try{g=e.then}catch(k){this.l(k);return}"function"==typeof g?this.H(g,e):this.m(e)};b.prototype.l=function(e){this.u(2,e)};b.prototype.m=function(e){this.u(1,e)};b.prototype.u=function(e,g){if(0!=this.h)throw Error("Cannot settle("+e+", "+g+"): Promise already settled in state"+this.h);this.h=e;this.i=g;2===this.h&&this.F();this.K()};b.prototype.F=function(){var e=this;h(function(){if(e.L()){var g=t.console;"undefined"!==typeof g&&g.error(e.i)}},1)};b.prototype.L=
function(){if(this.o)return!1;var e=t.CustomEvent,g=t.Event,k=t.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof g?e=new g("unhandledrejection",{cancelable:!0}):(e=t.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.K=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)f.h(this.g[e]);this.g=null}};var f=new c;b.prototype.G=
function(e){var g=this.j();e.v(g.resolve,g.reject)};b.prototype.H=function(e,g){var k=this.j();try{e.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,g){function k(q,p){return"function"==typeof q?function(Q){try{l(q(Q))}catch(D){n(D)}}:p}var l,n,y=new b(function(q,p){l=q;n=p});this.v(k(e,l),k(g,n));return y};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.v=function(e,g){function k(){switch(l.h){case 1:e(l.i);break;case 2:g(l.i);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.g?f.h(k):this.g.push(k);this.o=!0};b.resolve=d;b.reject=function(e){return new b(function(g,k){k(e)})};b.race=function(e){return new b(function(g,k){for(var l=v(e),n=l.next();!n.done;n=l.next())d(n.value).v(g,k)})};b.all=function(e){var g=v(e),k=g.next();return k.done?d([]):new b(function(l,n){function y(Q){return function(D){q[Q]=D;p--;0==p&&l(q)}}var q=[],p=0;do q.push(void 0),p++,d(k.value).v(y(q.length-1),n),k=g.next();while(!k.done)})};return b});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(g){return g};var h=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var e=0;!(f=b.next()).done;)h.push(c.call(d,f.value,e++))}else for(f=b.length,e=0;e<f;e++)h.push(c.call(d,b[e],e));return h}});
u("Array.prototype.fill",function(a){return a?a:function(b,c,d){var h=this.length||0;0>c&&(c=Math.max(0,h+c));if(null==d||d>h)d=h;d=Number(d);0>d&&(d=Math.max(0,h+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});function I(a){return a?a:Array.prototype.fill}u("Int8Array.prototype.fill",I);u("Uint8Array.prototype.fill",I);u("Uint8ClampedArray.prototype.fill",I);u("Int16Array.prototype.fill",I);u("Uint16Array.prototype.fill",I);u("Int32Array.prototype.fill",I);
u("Uint32Array.prototype.fill",I);u("Float32Array.prototype.fill",I);u("Float64Array.prototype.fill",I);function ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,h={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};h[Symbol.iterator]=function(){return h};return h}u("Array.prototype.keys",function(a){return a?a:function(){return ma(this,function(b){return b})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});var na=this||self;function J(a,b){a=a.split(".");var c=na;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function K(a,b){var c=void 0;return new (c||(c=Promise))(function(d,h){function f(k){try{g(b.next(k))}catch(l){h(l)}}function e(k){try{g(b["throw"](k))}catch(l){h(l)}}function g(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,e)}g((b=b.apply(a,void 0)).next())})};var oa={};function L(a,b){if(b!==oa)throw Error("Bad secret");this.g=a}function M(){}L.prototype=da(M.prototype);L.prototype.constructor=L;if(z)z(L,M);else for(var N in M)if("prototype"!=N)if(Object.defineProperties){var pa=Object.getOwnPropertyDescriptor(M,N);pa&&Object.defineProperty(L,N,pa)}else L[N]=M[N];L.prototype.toString=function(){return this.g};function qa(a){var b=a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);if(2!==(null===b||void 0===b?void 0:b.length)||!(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(b[1])||/^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1])))throw Error("unsafe blob MIME type: "+a.type);if(URL&&URL.createObjectURL)a=new L(URL.createObjectURL(a),oa);else throw Error("cannot find createObjectURL");
return a};function O(){this.i=this.counter=0;this.g=Array.from({length:10}).fill(0)}
O.prototype.create=function(a,b,c){b=c.appendChild(document.createElement("div"));b.classList.add("control-panel-entry");b.classList.add("control-panel-fps");a=b.appendChild(document.createElement("canvas"));this.h=b.appendChild(document.createElement("div"));this.h.classList.add("fps-text");c=b.appendChild(document.createElement("div"));c.classList.add("fps-30");c.textContent="30";b=b.appendChild(document.createElement("div"));b.classList.add("fps-60");b.textContent="60";a.width=100;a.height=100;
this.j=a.getContext("2d");ra(this,0)};O.prototype.update=function(){};O.prototype.tick=function(){var a=Math.floor(performance.now()/1E3);1<=a-this.i&&(ra(this,this.counter),this.i=a,this.counter=0);++this.counter};
function ra(a,b){a.g.shift();a.g.push(b);var c=a.j;c.fillStyle="green";c.clearRect(0,0,c.canvas.width,c.canvas.height);for(var d=0;10>d;++d){var h=Math.min(100,Math.max(0,a.g[d]));c.fillRect(10*d+1,100-h+1,8,h)}c.setLineDash([2,2]);c.strokeStyle="#a0a0a0a0";c.lineWidth=2;c.beginPath();c.moveTo(0,30);c.lineTo(100,30);c.stroke();c.beginPath();c.moveTo(0,60);c.lineTo(100,60);c.stroke();a.h.textContent=b.toFixed(0)+" fps"};function P(a){this.g=a}
P.prototype.create=function(a,b,c){var d=this;this.options=b;b=this.g;c=c.appendChild(document.createElement("div"));c.classList.add("control-panel-entry");c.classList.add("control-panel-slider");var h=c.appendChild(document.createElement("span"));h.classList.add("label");(this.h=c.appendChild(document.createElement("span"))).classList.add("callout");var f=this.i=c.appendChild(document.createElement("input"));f.classList.add("value");f.type="range";b.range?(f.min=""+b.range[0],f.max=""+b.range[1],
f.step=void 0===b.step?"any":""+b.step):b.discrete&&(f.min="0",f.max=""+(Object.keys(b.discrete).length-1),f.step="1");f.oninput=function(){sa(d,Number(f.value))};f.onchange=function(){var e=Number(f.value);d.g.discrete&&(e=Object.keys(d.g.discrete)[e],Array.isArray(d.g.discrete)&&(e=Number(e)));d.options[d.g.field]=e;a()};h.textContent=b.title};
P.prototype.update=function(){var a=this.options[this.g.field];a=this.g.discrete&&!Array.isArray(this.g.discrete)?Object.keys(this.g.discrete).indexOf(a):a;this.i.value=""+a;sa(this,a)};function sa(a,b){b=a.g.discrete?Object.values(a.g.discrete)[b]:b;a.h.textContent=""+b};function R(a,b,c){a=document.createElement(a);b&&a.classList.add(b);if(c)for(b=v(c),c=b.next();!c.done;c=b.next())a.appendChild(c.value);return a}function S(a,b){return R("div",a,b)}function T(a,b){return R("span",a,b)}function ta(){var a=R("img","",void 0);a.src="https://fonts.gstatic.com/s/i/googlematerialicons/file_upload/v8/white-24dp/1x/gm_file_upload_white_24dp.png";return a};function ua(a,b){var c=this;this.g=a;this.i={};var d,h=S("custom-select-wrapper",[d=S("custom-select",[S("custom-select__trigger",[this.h=T(),S("arrow")]),this.options=S("custom-options")])]);h.onclick=function(){a.B&&a.B();d.classList.toggle("open");d.g=function(){a.A&&a.A()}};for(var f={},e=v(a.options),g=e.next();!g.done;f={s:f.s},g=e.next())f.s=g.value,g=void 0,this.options.appendChild(g=T("custom-option")),this.i[f.s.value]=g,g.textContent=f.s.name,g.setAttribute("data-value",f.s.value),g.onclick=
function(k){return function(){va(c,k.s.value)}}(f);window.addEventListener("click",function(k){d.contains(k.target)||d.classList.remove("open")});b.appendChild(h)}function va(a,b){for(var c=v(a.g.options),d=c.next();!d.done;d=c.next()){d=d.value;var h=a.i[d.value];if(h.textContent===b&&!h.classList.contains("selected"))return(b=a.options.querySelector(".selected"))&&b.classList.remove("selected"),h.classList.add("selected"),a.h.textContent=h.textContent,a.g.onclick(d),!0}return!1}
function wa(a){var b=a.options.querySelector(".selected");b&&(b.classList.remove("selected"),a.h.textContent="")};var xa={facingMode:"user",width:640,height:480},ya={allowVideo:!0,allowImage:!0};function U(a){this.h=[];this.u=0;this.l=!1;this.g=Object.assign(Object.assign({},a),ya);this.g.cameraOptions=Object.assign(Object.assign({},this.g.cameraOptions||{}),xa)}
function za(a){return K(a,function c(){var d,h,f,e,g;return H(c,function(k){if(1==k.g)return E(k,navigator.mediaDevices.getUserMedia({video:!0}),2);if(3!=k.g)return E(k,navigator.mediaDevices.enumerateDevices(),3);d=k.l;h=[];f=v(d);for(e=f.next();!e.done;e=f.next())g=e.value,""!==g.label&&h.push({label:g.label,deviceId:g.deviceId});return k.return(h)})})}function V(a){window.requestAnimationFrame(function(){a.tick()})}
U.prototype.tick=function(){var a=this,b=null;this.l&&(this.video.paused||this.video.currentTime===this.u||(this.u=this.video.currentTime,b=this.g.onFrame?this.g.onFrame(this.video,{width:this.video.videoWidth,height:this.video.videoHeight}):null),b?b.then(function(){V(a)}):V(this))};function Aa(a,b){a.video.srcObject=b;a.video.onloadedmetadata=function(){a.video.play();a.l=!0;V(a)}}
function Ba(a){return K(a,function c(){var d=this,h,f,e,g;return H(c,function(k){d.l=!1;if(d.j){h=d.j.getTracks();f=v(h);for(e=f.next();!e.done;e=f.next())g=e.value,g.stop();d.j=void 0}k.g=0})})}function Ca(a){return K(a,function c(){var d=this,h,f;return H(c,function(e){if(1==e.g)return h=d,E(e,za(d),2);f=e.l.map(function(g){return{label:g.label,type:"webcam",M:g,start:function(){return Da(h,g)}}});return e.return([].concat(f instanceof Array?f:ca(v(f))))})})}
function Ea(a,b){return K(a,function d(){var h=this;return H(d,function(f){1==f.g?f=E(f,Ba(h),2):3!=f.g?f=E(f,b.start(),3):h.g.onSourceChanged?f=E(f,h.g.onSourceChanged(),0):(f.g=0,f=void 0);return f})})}function Fa(a,b){return K(a,function d(){var h=this;return H(d,function(f){wa(h.m);h.g&&h.g.onFrame?f=E(f,h.g.onFrame(b,{width:b.naturalWidth,height:b.naturalHeight}),0):(f.g=0,f=void 0);return f})})}
function Da(a,b){return K(a,function d(){var h=this,f;return H(d,function(e){f=h;return e.return(navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:b.deviceId}},audio:!1}).then(function(g){f.j=g;Aa(f,g)}).catch(function(g){console.error("Failed to acquire camera feed: "+g);alert("Failed to acquire camera feed: "+g);throw g;}))})})}
function Ga(a,b){a.m=new ua({options:a.h.map(function(c){return{name:c.label,value:c.label,data:c}}),onclick:function(c){c.data.start()},B:function(){a.o.style.zIndex="1000"},A:function(){a.o.style.zIndex="100"}},b)}
function Ha(a,b){var c=b.appendChild(document.createElement("input"));c.type="file";c.style.display="none";b.appendChild(T("",[b=S("",[ta()])]));b.onclick=function(){c.click()};c.onchange=function(){return K(a,function h(){var f=this,e,g;return H(h,function(k){e=f;(g=c.files)&&0<g.length&&(f.i.onload=function(){return K(e,function n(){var y=this,q;return H(n,function(p){q=y;y.g.onFrame?p=E(p,Ea(y,{label:"file",type:"image",image:y.i,start:function(){return K(q,function D(){var ia=this;return H(D,
function(Ia){return E(Ia,Fa(ia,ia.i),0)})})}}),0):(p.g=0,p=void 0);return p})})},f.i.src=qa(g[0]).toString());k.g=0})})}}
U.prototype.create=function(a,b,c){var d=this,h=this.o=c.appendChild(document.createElement("div"));h.classList.add("control-panel-entry");h.classList.add("control-panel-source-picker");Ca(this).then(function(f){d.h=f;Ha(d,h);f=h.appendChild(document.createElement("div"));f.classList.add("inputs");d.video=f.appendChild(document.createElement("video"));d.i=f.appendChild(document.createElement("img"));Ga(d,h);0<d.h.length&&(f=d.h[0],va(d.m,f.label)||wa(d.m),f.start())})};U.prototype.update=function(){};function W(a){this.g=a}W.prototype.create=function(a,b,c){a=c.appendChild(document.createElement("div"));a.classList.add("control-panel-entry");a.classList.add("control-panel-text");a.textContent=this.g.title};W.prototype.update=function(){};function X(a){this.h=a}X.prototype.create=function(a,b,c){var d=this;this.i=a;this.options=b;this.g=c.appendChild(document.createElement("div"));this.g.classList.add("control-panel-entry");this.g.classList.add("control-panel-toggle");this.g.onclick=function(){d.options[d.h.field]=!d.options[d.h.field];d.i()};a=this.g.appendChild(document.createElement("span"));a.classList.add("label");this.value=this.g.appendChild(document.createElement("span"));this.value.classList.add("value");a.textContent=this.h.title};
X.prototype.update=function(){this.options[this.h.field]?(this.value.textContent="Yes",this.g.classList.add("yes"),this.g.classList.remove("no")):(this.value.textContent="No",this.g.classList.add("no"),this.g.classList.remove("yes"))};function Y(a,b){this.j=a;this.options=b;this.g=[];this.h=this.j.appendChild(document.createElement("div"));this.h.classList.add("control-panel")}Y.prototype.add=function(a){var b=this;a=v(a);for(var c=a.next();!c.done;c=a.next())c=c.value,this.g.push(c),c.create(function(){Z(b)},this.options,this.h);Z(this);return this};Y.prototype.on=function(a){this.i=a;Z(this);return this};function Z(a){for(var b=v(a.g),c=b.next();!c.done;c=b.next())c.value.update();a.i&&a.i(a.options)}J("ControlPanel",Y);
J("Slider",P);J("StaticText",W);J("Toggle",X);J("SourcePicker",U);J("FPS",O);}).call(this);