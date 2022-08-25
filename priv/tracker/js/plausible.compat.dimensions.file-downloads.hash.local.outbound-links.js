!function(){"use strict";var t,e,n,o=window.location,l=window.document,c=l.getElementById("plausible"),s=c.getAttribute("data-api")||(t=c.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function i(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var n={};n.n=t,n.u=o.href,n.d=c.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var i=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};i.forEach(function(t){var e=t.replace("event-",""),n=c.getAttribute(t);a[e]=a[e]||n}),n.p=a,n.h=1;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=i;for(var r,p=0;p<a.length;p++)i.apply(this,a[p]);function u(){r=o.pathname,i("pageview")}window.addEventListener("hashchange",u),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){r||"visible"!==l.visibilityState||u()}):u();var d={},f=!1;function v(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function g(t,e,n,i){var a,r,o,l,c,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!f,l&&c&&!s?(e.preventDefault(),f=!0,a=w(n,function(){window.location=t.href}),setTimeout(a,5e3),h(n,i,a)):h(n,i,w(n,null))}function w(t,e){return function(){delete d[t],e&&0==Object.keys(d).length&&e()}}function h(t,e,n){d[t]=!0,plausible(t,{props:e,callback:n})}function b(t){var e,n=v(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&g(n,t,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",b),l.addEventListener("auxclick",b);var m=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],y=c.getAttribute("file-types"),k=c.getAttribute("add-file-types"),x=y&&y.split(",")||k&&k.split(",").concat(m)||m;function E(t){var e,n,i=v(t.target),a=i&&i.href&&i.href.split("?")[0];n=(e=a)&&e.split(".").pop(),x.some(function(t){return t===n})&&g(i,t,"File Download",{url:a})}l.addEventListener("click",E),l.addEventListener("auxclick",E)}();