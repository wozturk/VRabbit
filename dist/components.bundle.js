!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/",e(e.s=8)}({8:function(t,e,r){"use strict";r(9)},9:function(t,e,r){"use strict";AFRAME.registerComponent("set-scene",{schema:{on:{type:"string"},target:{type:"selector"},src:{type:"string"},dur:{type:"number",default:300}},init:function(){var t=this.data;this.el.addEventListener(t.on,function(){t.target.setAttribute("environment","preset",t.src);var e=document.querySelector("#camera-bg");e.srcObject.getTracks().forEach(function(t){return t.stop()}),e.srcObject=null})}})}});