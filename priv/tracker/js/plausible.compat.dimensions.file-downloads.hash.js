!function(){"use strict";var t,e,n,o=window.location,l=window.document,p=l.getElementById("plausible"),s=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function c(t){console.warn("Ignoring Event: "+t)}function i(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var n={};n.n=t,n.u=o.href,n.d=p.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var i=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};i.forEach(function(t){var e=t.replace("event-",""),n=p.getAttribute(t);a[e]=a[e]||n}),n.p=a,n.h=1;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var a=window.plausible&&window.plausible.q||[];window.plausible=i;for(var r,u=0;u<a.length;u++)i.apply(this,a[u]);function d(){r=o.pathname,i("pageview")}window.addEventListener("hashchange",d),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){r||"visible"!==l.visibilityState||d()}):d();var f={},w=!1;function v(t,e,n,i){var a,r,o,l,p,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!w,l&&p&&!s?(e.preventDefault(),w=!0,a=g(n,function(){window.location=t.href}),setTimeout(a,5e3),h(n,i,a)):h(n,i,g(n,null))}function g(t,e){return function(){delete f[t],e&&0==Object.keys(f).length&&e()}}function h(t,e,n){f[t]=!0,plausible(t,{props:e,callback:n})}var m=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],b=p.getAttribute("file-types"),y=p.getAttribute("add-file-types"),k=b&&b.split(",")||y&&y.split(",").concat(m)||m;function x(t){var e,n,i=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),a=i&&i.href&&i.href.split("?")[0];n=(e=a)&&e.split(".").pop(),k.some(function(t){return t===n})&&v(i,t,"File Download",{url:a})}l.addEventListener("click",x),l.addEventListener("auxclick",x)}();