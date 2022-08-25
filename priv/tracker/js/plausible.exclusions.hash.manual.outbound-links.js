!function(){"use strict";var u=window.location,s=window.document,d=s.currentScript,p=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var n=d&&d.getAttribute("data-include"),a=d&&d.getAttribute("data-exclude");if("pageview"===e){var r=!n||n&&n.split(",").some(c),i=a&&a.split(",").some(c);if(!r||i)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:u.href,o.d=d.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",p,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function c(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<t.length;n++)e.apply(this,t[n]);var a={},w=!1;function r(e,t,n,a){var r,i,o,l,c,u;o=t,l=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),u=o.defaultPrevented&&!w,l&&c&&!u?(t.preventDefault(),w=!0,r=g(n,function(){window.location=e.href}),setTimeout(r,5e3),h(n,a,r)):h(n,a,g(n,null))}function g(e,t){return function(){delete a[e],t&&0==Object.keys(a).length&&t()}}function h(e,t,n){a[e]=!0,plausible(e,{props:t,callback:n})}function i(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==u.host&&r(n,e,"Outbound Link: Click",{url:n.href})}s.addEventListener("click",i),s.addEventListener("auxclick",i)}();