!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=function(e,t){try{localStorage.setItem(e,t)}catch(e){console.log("error",e.message)}},r={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function b(e){return c=e,f=setTimeout(O,t),s?m(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=y();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function T(){var e=y(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return b(l);if(d)return f=setTimeout(O,t),m(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function j(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var h,O="feedback-form-state",w=(h=O,localStorage.getItem(h)||""),T=document.querySelector("input[name='email']"),x=document.querySelector("textarea[name='message']"),E=document.querySelector(".feedback-form");if(w){var N=JSON.parse(w),M=N.email,$=N.message;T.value=M,x.value=$}var _=function(e){var t=T.value,r=x.value;n(O,JSON.stringify({email:t,message:r}))};T.addEventListener("input",r(_,1e3)),x.addEventListener("input",r(_,1e3)),E.addEventListener("submit",(function(e){e.preventDefault();var t=T.value,n=x.value;console.log({email:t,message:n}),T.value="",x.value="",localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.2cd275c4.js.map
