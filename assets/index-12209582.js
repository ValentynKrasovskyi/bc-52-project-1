(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g=document.querySelector("[data-menu-open]"),h=document.querySelector("[data-menu-close]"),m=document.querySelector("[data-menu]");g.addEventListener("click",()=>{m.classList.remove("is-hidden")});h.addEventListener("click",()=>{m.classList.add("is-hidden")});const v=document.querySelectorAll(".smooth-scroll");v.forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.getAttribute("href");document.querySelector(s).scrollIntoView({behavior:"smooth"})})});const i=document.querySelector("[data-thank]"),b=document.querySelector("[data-thank-close]"),S=document.querySelector(".submit-buynow"),y=document.querySelector(".bynow-form"),c=document.querySelector("[data-buynow]"),k=document.querySelector("[data-buynow-close]"),q=document.querySelector("[data-buynow-open]"),B=document.querySelector("[data-buy-open]");q.addEventListener("click",()=>{c.classList.remove("is-hidden")});B.addEventListener("click",()=>{c.classList.remove("is-hidden")});k.addEventListener("click",()=>{c.classList.add("is-hidden")});S.addEventListener("click",function(){c.classList.add("is-hidden"),i.classList.remove("is-hidden")});b.addEventListener("click",function(){i.classList.add("is-hidden"),y.submit()});window.addEventListener("beforeunload",function(o){i.classList.contains("is-hidden")||y.submit()});const u={openMenuBtn:document.querySelector("[data-explore-open]"),closeMenuBtn:document.querySelector("[data-explore-close]"),menu:document.querySelector("[data-explore]")};u.openMenuBtn.addEventListener("click",f);u.closeMenuBtn.addEventListener("click",f);function f(){u.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const l={openMenuBtn:document.querySelector("[data-feedback-open]"),closeMenuBtn:document.querySelector("[data-feedback-close]"),menu:document.querySelector("[data-feedback]")};l.openMenuBtn.addEventListener("click",L);l.closeMenuBtn.addEventListener("click",L);function L(){l.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const a={openMenuBtn:document.querySelector("[data-review-open]"),closeMenuBtn:document.querySelector("[data-review-close]"),menu:document.querySelector("[data-review]")};a.openMenuBtn.addEventListener("click",p);a.closeMenuBtn.addEventListener("click",p);function p(){a.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}