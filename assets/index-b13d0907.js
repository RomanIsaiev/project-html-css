(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i=document.querySelector(".js-steps");let s=0;i.querySelectorAll("li").forEach(r=>{s++,r.querySelector(".js-step-counter").textContent=s});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".js-open-modal"),n=document.querySelectorAll(".data-modal-close"),l=document.querySelector(".data-modal");r.forEach(function(o){o.addEventListener("click",function(){l.classList.remove("visually-hidden")})}),n.forEach(function(o){o.addEventListener("click",function(){l.classList.add("visually-hidden")})})});
