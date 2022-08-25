!function(){"use strict";var t,e,i,u=window.location,d=window.document,f=d.getElementById("plausible"),v=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function g(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var i=f&&f.getAttribute("data-include"),n=f&&f.getAttribute("data-exclude");if("pageview"===t){var a=!i||i&&i.split(",").some(p),r=n&&n.split(",").some(p);if(!a||r)return g("exclusion rule")}var o={};o.n=t,o.u=u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),c=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),i=f.getAttribute(t);c[e]=c[e]||i}),o.p=c,o.h=1;var s=new XMLHttpRequest;s.open("POST",v,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&e&&e.callback&&e.callback()}}function p(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<a.length;o++)n.apply(this,a[o]);function l(){r=u.pathname,n("pageview")}window.addEventListener("hashchange",l),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l();var c={},p=!1;function s(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function w(t,e,i,n){var a,r,o,l,c,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!p,l&&c&&!s?(e.preventDefault(),p=!0,a=h(i,function(){window.location=t.href}),setTimeout(a,5e3),m(i,n,a)):m(i,n,h(i,null))}function h(t,e){return function(){delete c[t],e&&0==Object.keys(c).length&&e()}}function m(t,e,i){c[t]=!0,plausible(t,{props:e,callback:i})}function b(t){var e,i=s(t.target);(e=i)&&e.href&&e.host&&e.host!==u.host&&w(i,t,"Outbound Link: Click",{url:i.href})}d.addEventListener("click",b),d.addEventListener("auxclick",b);var y=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],k=f.getAttribute("file-types"),x=f.getAttribute("add-file-types"),E=k&&k.split(",")||x&&x.split(",").concat(y)||y;function L(t){var e,i,n=s(t.target),a=n&&n.href&&n.href.split("?")[0];i=(e=a)&&e.split(".").pop(),E.some(function(t){return t===i})&&w(n,t,"File Download",{url:a})}d.addEventListener("click",L),d.addEventListener("auxclick",L)}();