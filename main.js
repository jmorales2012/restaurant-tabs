!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.querySelector("#content"),r=()=>{const e=document.createElement("section");e.classList.add("hero");const t=document.createElement("h1");t.innerText="Momo's Famous Cuisine";const n=document.createElement("h3");n.innerText="The Best Cuisine in America.",e.appendChild(t),e.appendChild(n),o.appendChild(e)},c=document.querySelector("#content"),a=document.querySelector("#content"),i=document.querySelector("#content"),d={Home:r,About:()=>{const e=document.createElement("section");e.classList.add("hero");const t=document.createElement("h1");t.innerText="About Us";const n=document.createElement("h3");n.innerText="The Best Cuisine in America.";const o=document.createElement("p");o.innerText="We are so passionate about making good food. That's why\n  we created Momo's Cuisine. To bring that passion to your plate.",e.appendChild(t),e.appendChild(n),e.appendChild(o),c.appendChild(e)},Contact:()=>{const e=document.createElement("section");e.classList.add("hero");const t=document.createElement("h1");t.innerText="Contact Us";const n=document.createElement("h3");n.innerText="The Best Cuisine in America.";const o=document.createElement("p");o.innerText="Give us a call at (555) 555-5555 today!",e.appendChild(t),e.appendChild(n),e.appendChild(o),a.appendChild(e)}};i.addEventListener("click",e=>{e.target.classList.contains("navbar-link")&&(l(),console.log(d[e.target.id]()))});const l=()=>{i.innerHTML="";const e=document.createElement("div"),t=document.createElement("ul");e.classList.add("menu"),t.classList.add("navbar");let n=["Home","About","Contact"];for(let e=0;e<n.length;e++){let o=document.createElement("li");o.innerHTML=`<a id="${n[e]}" class="navbar-link">${n[e]}</a>`,t.appendChild(o)}e.appendChild(t),i.appendChild(e)};l(),r()}]);