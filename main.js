(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},309:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"",""]);const i=o},965:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".pictures-to-move__collection {\r\n    opacity: 0.3;\r\n    transition: all 1s;\r\n    -webkit-transition: all 1s;\r\n}\r\n\r\n.opacity {\r\n    opacity: 1;\r\n    transition: all 1s;\r\n    -webkit-transition: all 1s;\r\n}\r\n\r\n#picture-container__1 {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 300px;\r\n}\r\n\r\n#picture-container__1 img {\r\n    left: 1200px;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n#picture-container__2 {\r\n    position: absolute;\r\n    top: 170px;\r\n    left: 70px;\r\n}\r\n\r\n#picture-container__2 img {\r\n    right: 200px;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n#picture-container__3 {\r\n    position: absolute;\r\n    top: 250px;\r\n    right: 200px;\r\n}\r\n\r\n#picture-container__3 img {\r\n    left: 350px;  \r\n    width: 100px;\r\n    height: 100px;  \r\n}",""]);const i=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(R([])));x&&x!==n&&r.call(x,i)&&(w=x);var _=g.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),u(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],u=e.base?c[0]+e.base:c[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:v(p,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,d=0;function v(t,e){var n,r,o;if(e.singleton){var i=d++;n=h||(h=u(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(t,e),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=u}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}var r=n(757),o=n.n(r);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(){function t(e){i(this,t),this.params=e}var n;return c(t,[{key:"setTitle",value:function(t){document.title=t}},{key:"getHtml",value:(n=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","");case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})}]),t}();var d=function(t){s(l,t);var n,r,a,u=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(a){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function l(t){var e;return i(this,l),(e=u.call(this,t)).setTitle("Projects"),e}return c(l,[{key:"getHtml",value:(n=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n            <div class="picture-container" id="picture-container__'.concat(this.params.id,'">\n                <img src= "').concat(this.params.img,'" alt="').concat(this.params.name,'" id="pictures-to-move__').concat(this.params.id,'" class="pictures-to-move__collection"/>\n                <a href="/project/').concat(this.params.id,'" class="nav__link" data-link>\n                    ').concat(this.params.name,"\n                </a>\n            </div>\n        "));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),l}(h);const v=[{id:1,name:"montagne",img:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/1/1/a/11a3b884f1_50170595_alpes-elevation.jpg",description:"Qui sit enim veniam et nisi reprehenderit proident. Exercitation sit qui quis sit labore sint aute ipsum mollit. Qui cupidatat do quis sint et minim dolore ipsum amet deserunt deserunt ad quis sunt. Duis fugiat proident ex adipisicing amet dolore esse."},{id:2,name:"snowy mountain",img:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/1/1/a/11a3b884f1_50170595_alpes-elevation.jpg",description:"Qui sit enim veniam et nisi reprehenderit proident. Exercitation sit qui quis sit labore sint aute ipsum mollit. Qui cupidatat do quis sint et minim dolore ipsum amet deserunt deserunt ad quis sunt. Duis fugiat proident ex adipisicing amet dolore esse."},{id:3,name:"wild mountain",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52ulEMl663AQ5ec_x99_BCKIsC_CzpulP5g&usqp=CAU",description:"Qui sit enim veniam et nisi reprehenderit proident. Exercitation sit qui quis sit labore sint aute ipsum mollit. Qui cupidatat do quis sint et minim dolore ipsum amet deserunt deserunt ad quis sunt. Duis fugiat proident ex adipisicing amet dolore esse."}];var m=function(t){s(h,t);var n,r,a,u,l=(a=h,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(a);if(u){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function h(t){var e;return i(this,h),(e=l.call(this,t)).setTitle("About"),e}return c(h,[{key:"createProjectList",value:(r=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(v.map((function(t){return new d(t).getHtml()})));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"getHtml",value:(n=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.createProjectList();case 2:return e=t.sent,t.abrupt("return",'\n            <div id="about">\n                <h1>Hi, it\'s Anne</h1>\n                <p>A front-end developer</p>\n                <div id="pictures-to-move">\n                    '.concat(e.map((function(t){return t})).join(""),"\n                </div>\n            </div>\n        "));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),h}(h),y=function(t){var e=t.result.slice(1),n=Array.from(t.route.path.matchAll(/:(\w+)/g)).map((function(t){return t[1]}));return Object.fromEntries(n.map((function(t,n){return[t,e[n]]})))},g=function(){var t=window.location.href,e=t.slice(t.length-1);return parseInt(e)},w=function(t){return v.find((function(e){return e.id===t}))};var b=function(t){s(l,t);var n,r,a,u=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(a){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function l(t){var e;return i(this,l),(e=u.call(this,t)).setTitle("Project"),e}return c(l,[{key:"getHtml",value:(n=e(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=g(),void 0===(n=w(e))){t.next=6;break}return t.abrupt("return",'\n            <div id="project">\n                <h1>Detailed project '.concat(n.id,"</h1>\n            </div>\n        "));case 6:return t.abrupt("return",'\n            <div id="project">\n                <h1>A bit ahead of time ? This project does not exist yet.</h1>\n            </div>\n        ');case 7:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})}]),l}(h);var x=function(t){s(l,t);var n,r,a,u=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(a){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function l(t){var e;return i(this,l),(e=u.call(this,t)).setTitle("Contact"),e}return c(l,[{key:"getHtml",value:(n=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n            <div id="contact">\n                <h1>Send me a message</h1>\n            </div>\n        ');case 1:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})}]),l}(h),_={init:function(){var t=document.querySelectorAll(".pictures-to-move__collection");document.querySelectorAll(".picture-container").forEach((function(t){return t.addEventListener("mousedown",_.movePicture)})),t.forEach((function(t){return t.addEventListener("mouseover",_.changeOpacity)})),t.forEach((function(t){return t.addEventListener("mouseleave",_.changeOpacity)}))},changeOpacity:function(t){var e=t.currentTarget.id;document.querySelector("#".concat(e)).classList.toggle("opacity")},movePicture:function(t){var e=document.querySelector("#".concat(t.currentTarget.id)),n=t.clientX-e.getBoundingClientRect().left,r=t.clientY-e.getBoundingClientRect().top,o=!1;function i(t){var i,a;o&&(i=t.pageX,a=t.pageY,e.style.left=i-n+"px",e.style.top=a-r+"px")}function a(){t.preventDefault(),o=!0}document.addEventListener("mousemove",i),document.addEventListener("mouseup",(function t(n){o=!1,document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",t),document.removeEventListener("mousedown",a),e.onmouseup=null})),document.addEventListener("mousedown",a)}},E=function(t){switch(t){case"About":_.init();break;case"Project":case"Contact":break;default:return}},L=function(){var t=e(o().mark((function t(){var e,n,r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(window.location),n=(e=[{path:"/",view:m,name:"About"},{path:"/project/:id",view:b,name:"Project"},{path:"/contact",view:x,name:"Contact"}]).map((function(t){return{route:t,result:location.pathname.match((e=t.path,new RegExp("^"+e.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$")))};var e})),(r=n.find((function(t){return null!==t.result})))||(r={route:e[0],result:[location.pathname]}),i=new r.route.view(y(r)),t.next=8,i.getHtml();case 8:document.querySelector("#app").innerHTML=t.sent,E(r.route.name);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=(n(666),n(379)),O=n.n(j),k=n(309);O()(k.Z,{insert:"head",singleton:!1}),k.Z.locals;var P=n(965);O()(P.Z,{insert:"head",singleton:!1}),P.Z.locals,document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){var e;t.target.matches("[data-link]")&&(t.preventDefault(),e=t.target.href,history.pushState(null,null,e),L())})),L()})),window.addEventListener("popstate",L);var R=document.location.href;window.onload=function(){console.log("hi");var t=document.querySelector("body");new MutationObserver((function(t){t.forEach((function(t){R!=document.location.href&&(R=document.location.href,console.log(R),L())}))})).observe(t,{childList:!0,subtree:!0})}})()})();