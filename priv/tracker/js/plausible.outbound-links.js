!function(){"use strict";var a=window.location,r=window.document,o=r.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=a.href,n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function c(){n!==a.pathname&&(n=a.pathname,t("pageview"))}var u,d=window.history;d.pushState&&(u=d.pushState,d.pushState=function(){u.apply(this,arguments),c()},window.addEventListener("popstate",c)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){n||"visible"!==r.visibilityState||c()}):c();var p={},w=!1;function f(t,e,n,i){var a,r,o,l,s,c;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),s="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!w,l&&s&&!c?(e.preventDefault(),w=!0,a=h(n,function(){window.location=t.href}),setTimeout(a,5e3),v(n,i,a)):v(n,i,h(n,null))}function h(t,e){return function(){delete p[t],e&&0==Object.keys(p).length&&e()}}function v(t,e,n){p[t]=!0,plausible(t,{props:e,callback:n})}function g(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==a.host&&f(n,t,"Outbound Link: Click",{url:n.href})}r.addEventListener("click",g),r.addEventListener("auxclick",g)}();