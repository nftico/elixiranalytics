!function(){"use strict";var t,e,n,o=window.location,l=window.document,c=l.getElementById("plausible"),u=c.getAttribute("data-api")||(t=c.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function r(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=c.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=c.getAttribute(t);a[e]=a[e]||n}),n.p=a;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=r;for(var i=0;i<a.length;i++)r.apply(this,a[i]);var p={},s=!1;function d(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function f(t,e,n,r){var a,i,o,l,c,u;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),u=o.defaultPrevented&&!s,l&&c&&!u?(e.preventDefault(),s=!0,a=v(n,function(){window.location=t.href}),setTimeout(a,5e3),g(n,r,a)):g(n,r,v(n,null))}function v(t,e){return function(){delete p[t],e&&0==Object.keys(p).length&&e()}}function g(t,e,n){p[t]=!0,plausible(t,{props:e,callback:n})}function w(t){var e,n=d(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&f(n,t,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",w),l.addEventListener("auxclick",w);var m=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=c.getAttribute("file-types"),b=c.getAttribute("add-file-types"),y=h&&h.split(",")||b&&b.split(",").concat(m)||m;function k(t){var e,n,r=d(t.target),a=r&&r.href&&r.href.split("?")[0];n=(e=a)&&e.split(".").pop(),y.some(function(t){return t===n})&&f(r,t,"File Download",{url:a})}l.addEventListener("click",k),l.addEventListener("auxclick",k)}();