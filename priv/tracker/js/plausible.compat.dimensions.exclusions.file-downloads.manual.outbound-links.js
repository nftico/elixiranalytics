!function(){"use strict";var t,e,n,s=window.location,d=window.document,f=d.getElementById("plausible"),g=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function w(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===t){var i=!n||n&&n.split(",").some(p),a=r&&r.split(",").some(p);if(!i||a)return w("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),c=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);c[e]=c[e]||n}),o.p=c;var u=new XMLHttpRequest;u.open("POST",g,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&e&&e.callback&&e.callback()}}function p(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var i=window.plausible&&window.plausible.q||[];window.plausible=r;for(var a=0;a<i.length;a++)r.apply(this,i[a]);var o={},p=!1;function l(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function c(t,e,n,r){var i,a,o,l,c,u;o=e,l=!(a=t).target||a.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),u=o.defaultPrevented&&!p,l&&c&&!u?(e.preventDefault(),p=!0,i=v(n,function(){window.location=t.href}),setTimeout(i,5e3),m(n,r,i)):m(n,r,v(n,null))}function v(t,e){return function(){delete o[t],e&&0==Object.keys(o).length&&e()}}function m(t,e,n){o[t]=!0,plausible(t,{props:e,callback:n})}function u(t){var e,n=l(t.target);(e=n)&&e.href&&e.host&&e.host!==s.host&&c(n,t,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",u),d.addEventListener("auxclick",u);var h=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],b=f.getAttribute("file-types"),y=f.getAttribute("add-file-types"),k=b&&b.split(",")||y&&y.split(",").concat(h)||h;function x(t){var e,n,r=l(t.target),i=r&&r.href&&r.href.split("?")[0];n=(e=i)&&e.split(".").pop(),k.some(function(t){return t===n})&&c(r,t,"File Download",{url:i})}d.addEventListener("click",x),d.addEventListener("auxclick",x)}();