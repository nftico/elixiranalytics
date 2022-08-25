!function(){"use strict";var e,t,n,p=window.location,d=window.document,f=d.getElementById("plausible"),w=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var n=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!n||n&&n.split(",").some(s),i=a&&a.split(",").some(s);if(!r||i)return g("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:p.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),n=f.getAttribute(e);u[t]=u[t]||n}),o.p=u,o.h=1;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function s(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<r.length;i++)a.apply(this,r[i]);var o={},s=!1;function l(e,t,n,a){var r,i,o,l,u,c;o=t,l=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!s,l&&u&&!c?(t.preventDefault(),s=!0,r=h(n,function(){window.location=e.href}),setTimeout(r,5e3),v(n,a,r)):v(n,a,h(n,null))}function h(e,t){return function(){delete o[e],t&&0==Object.keys(o).length&&t()}}function v(e,t,n){o[e]=!0,plausible(e,{props:t,callback:n})}function u(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==p.host&&l(n,e,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",u),d.addEventListener("auxclick",u)}();