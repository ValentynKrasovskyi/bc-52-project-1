(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const M=document.querySelector("[data-menu-open]"),S=document.querySelector("[data-menu-close]"),m=document.querySelector("[data-menu]");M.addEventListener("click",()=>{m.classList.remove("is-hidden")});S.addEventListener("click",()=>{m.classList.add("is-hidden")});const h=document.querySelectorAll(".smooth-scroll");h.forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const c=o.getAttribute("href");document.querySelector(c).scrollIntoView({behavior:"smooth"})})});const l={openMenuBtn:document.querySelector("[data-buy-open]"),closeMenuBtn:document.querySelector("[data-buy-close]"),menu:document.querySelector("[data-buy]")};l.openMenuBtn.addEventListener("click",g);l.closeMenuBtn.addEventListener("click",g);function g(){l.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const u={openMenuBtn:document.querySelector("[data-explore-open]"),closeMenuBtn:document.querySelector("[data-explore-close]"),menu:document.querySelector("[data-explore]")};u.openMenuBtn.addEventListener("click",f);u.closeMenuBtn.addEventListener("click",f);function f(){u.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const d={openMenuBtn:document.querySelector("[data-feedback-open]"),closeMenuBtn:document.querySelector("[data-feedback-close]"),menu:document.querySelector("[data-feedback]")};d.openMenuBtn.addEventListener("click",y);d.closeMenuBtn.addEventListener("click",y);function y(){d.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const i={openMenuBtn:document.querySelector("[data-review-open]"),closeMenuBtn:document.querySelector("[data-review-close]"),menu:document.querySelector("[data-review]")};i.openMenuBtn.addEventListener("click",p);i.closeMenuBtn.addEventListener("click",p);function p(){i.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const a={openMenuBtn:document.querySelector("[data-thank-open]"),closeMenuBtn:document.querySelector("[data-thank-close]"),menu:document.querySelector("[data-thank]")};a.openMenuBtn.addEventListener("click",L);a.closeMenuBtn.addEventListener("click",L);function L(){a.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}
