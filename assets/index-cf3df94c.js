(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const v=document.querySelector("[data-menu-open]"),h=document.querySelector("[data-menu-close]"),m=document.querySelector("[data-menu]");v.addEventListener("click",()=>{m.classList.remove("is-hidden")});h.addEventListener("click",()=>{m.classList.add("is-hidden")});const p=document.querySelectorAll(".smooth-scroll");p.forEach(n=>{n.addEventListener("click",o=>{o.preventDefault();const s=n.getAttribute("href");document.querySelector(s).scrollIntoView({behavior:"smooth"})})});const i=document.querySelector("[data-thank]"),b=document.querySelector("[data-thank-close]"),S=document.querySelector(".submit-buynow"),y=document.querySelector(".bynow-form"),c=document.querySelector("[data-buynow]"),k=document.querySelector("[data-buynow-close]"),w=document.querySelector("[data-buynow-open]"),q=document.querySelector("[data-buy-open]");w.addEventListener("click",()=>{c.classList.remove("is-hidden")});q.addEventListener("click",()=>{c.classList.remove("is-hidden")});k.addEventListener("click",()=>{c.classList.add("is-hidden")});S.addEventListener("click",function(){c.classList.add("is-hidden"),i.classList.remove("is-hidden")});b.addEventListener("click",function(){i.classList.add("is-hidden"),y.submit()});window.addEventListener("beforeunload",function(n){i.classList.contains("is-hidden")||y.submit()});const u={openMenuBtn:document.querySelector("[data-explore-open]"),closeMenuBtn:document.querySelector("[data-explore-close]"),menu:document.querySelector("[data-explore]")};u.openMenuBtn.addEventListener("click",f);u.closeMenuBtn.addEventListener("click",f);function f(){u.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const l=document.querySelector("[data-feedback]"),B=document.querySelector("[data-feedback-close]"),g=document.querySelector(".submit-review"),L=document.querySelector(".review-form"),a=document.querySelector("[data-review]"),E=document.querySelector("[data-review-close]"),O=document.querySelector("[data-review-open]");O.addEventListener("click",()=>{a.classList.remove("is-hidden")});E.addEventListener("click",()=>{a.classList.add("is-hidden")});g.addEventListener("click",function(){a.classList.add("is-hidden"),l.classList.remove("is-hidden")});B.addEventListener("click",function(){l.classList.add("is-hidden"),L.submit()});window.addEventListener("beforeunload",function(n){l.classList.contains("is-hidden")||L.submit()});