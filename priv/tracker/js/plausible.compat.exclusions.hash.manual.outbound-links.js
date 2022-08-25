!function(){"use strict";var e,t,n,c=window.location,s=window.document,d=s.getElementById("plausible"),p=d.getAttribute("data-api")||(e=d.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var n=d&&d.getAttribute("data-include"),a=d&&d.getAttribute("data-exclude");if("pageview"===e){var r=!n||n&&n.split(",").some(u),i=a&&a.split(",").some(u);if(!r||i)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:c.href,o.d=d.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",p,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function u(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<r.length;i++)a.apply(this,r[i]);var o={},w=!1;function l(e,t,n,a){var r,i,o,l,u,c;o=t,l=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!w,l&&u&&!c?(t.preventDefault(),w=!0,r=g(n,function(){window.location=e.href}),setTimeout(r,5e3),h(n,a,r)):h(n,a,g(n,null))}function g(e,t){return function(){delete o[e],t&&0==Object.keys(o).length&&t()}}function h(e,t,n){o[e]=!0,plausible(e,{props:t,callback:n})}function u(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==c.host&&l(n,e,"Outbound Link: Click",{url:n.href})}s.addEventListener("click",u),s.addEventListener("auxclick",u)}();