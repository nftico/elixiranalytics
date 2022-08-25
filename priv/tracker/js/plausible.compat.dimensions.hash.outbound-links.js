!function(){"use strict";var e,t,n,o=window.location,l=window.document,c=l.getElementById("plausible"),s=c.getAttribute("data-api")||(e=c.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function u(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return u("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag")}catch(e){}var n={};n.n=e,n.u=o.href,n.d=c.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var i=c.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),a=n.p||{};i.forEach(function(e){var t=e.replace("event-",""),n=c.getAttribute(e);a[t]=a[t]||n}),n.p=a,n.h=1;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}var a=window.plausible&&window.plausible.q||[];window.plausible=i;for(var r,d=0;d<a.length;d++)i.apply(this,a[d]);function f(){r=o.pathname,i("pageview")}window.addEventListener("hashchange",f),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){r||"visible"!==l.visibilityState||f()}):f();var p={},w=!1;function h(e,t,n,i){var a,r,o,l,c,s;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!w,l&&c&&!s?(t.preventDefault(),w=!0,a=v(n,function(){window.location=e.href}),setTimeout(a,5e3),g(n,i,a)):g(n,i,v(n,null))}function v(e,t){return function(){delete p[e],t&&0==Object.keys(p).length&&t()}}function g(e,t,n){p[e]=!0,plausible(e,{props:t,callback:n})}function b(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==o.host&&h(n,e,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",b),l.addEventListener("auxclick",b)}();