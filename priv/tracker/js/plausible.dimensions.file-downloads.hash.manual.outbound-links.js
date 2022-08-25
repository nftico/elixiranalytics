!function(){"use strict";var o=window.location,l=window.document,c=l.currentScript,u=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function p(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=c.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=c.getAttribute(t);i[e]=i[e]||n}),n.p=i,n.h=1;var a=new XMLHttpRequest;a.open("POST",u,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var r={},s=!1;function a(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function d(t,e,n,r){var i,a,o,l,c,u;o=e,l=!(a=t).target||a.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),u=o.defaultPrevented&&!s,l&&c&&!u?(e.preventDefault(),s=!0,i=f(n,function(){window.location=t.href}),setTimeout(i,5e3),w(n,r,i)):w(n,r,f(n,null))}function f(t,e){return function(){delete r[t],e&&0==Object.keys(r).length&&e()}}function w(t,e,n){r[t]=!0,plausible(t,{props:e,callback:n})}function i(t){var e,n=a(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&d(n,t,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",i),l.addEventListener("auxclick",i);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=c.getAttribute("file-types"),h=c.getAttribute("add-file-types"),m=v&&v.split(",")||h&&h.split(",").concat(g)||g;function b(t){var e,n,r=a(t.target),i=r&&r.href&&r.href.split("?")[0];n=(e=i)&&e.split(".").pop(),m.some(function(t){return t===n})&&d(r,t,"File Download",{url:i})}l.addEventListener("click",b),l.addEventListener("auxclick",b)}();