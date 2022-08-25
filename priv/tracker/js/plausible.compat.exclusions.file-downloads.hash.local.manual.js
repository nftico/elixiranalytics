!function(){"use strict";var e,t,a,u=window.location,c=window.document,s=c.getElementById("plausible"),d=s.getAttribute("data-api")||(e=s.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function n(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=s&&s.getAttribute("data-include"),n=s&&s.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(l),r=n&&n.split(",").some(l);if(!i||r)return f("exclusion rule")}function l(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var o={};o.n=e,o.u=t&&t.u?t.u:u.href,o.d=s.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}var i=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r=0;r<i.length;r++)n.apply(this,i[r]);var l={},g=!1;function o(e,t,a,n){var i,r,l,o,p,u;l=t,o=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),p="click"===l.type&&!(l.ctrlKey||l.metaKey||l.shiftKey),u=l.defaultPrevented&&!g,o&&p&&!u?(t.preventDefault(),g=!0,i=w(a,function(){window.location=e.href}),setTimeout(i,5e3),m(a,n,i)):m(a,n,w(a,null))}function w(e,t){return function(){delete l[e],t&&0==Object.keys(l).length&&t()}}function m(e,t,a){l[e]=!0,plausible(e,{props:t,callback:a})}var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=s.getAttribute("file-types"),b=s.getAttribute("add-file-types"),h=v&&v.split(",")||b&&b.split(",").concat(p)||p;function y(e){var t,a,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target),i=n&&n.href&&n.href.split("?")[0];a=(t=i)&&t.split(".").pop(),h.some(function(e){return e===a})&&o(n,e,"File Download",{url:i})}c.addEventListener("click",y),c.addEventListener("auxclick",y)}();