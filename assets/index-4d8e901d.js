(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();new Swiper(".swiper1",{speed:400,initialSlide:0,slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination1",type:"bullets",clickable:!0},autoplay:{delay:3e3},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}}});new Swiper(".swiper2",{speed:400,initialSlide:0,slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination2",type:"bullets",clickable:!0},autoplay:{delay:3e3},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}}});const S=document.querySelector("[data-menu-open]"),g=document.querySelector("[data-menu-close]"),b=document.querySelector("[data-menu]");S.addEventListener("click",()=>{b.classList.remove("is-hidden")});g.addEventListener("click",()=>{b.classList.add("is-hidden")});const k=document.querySelectorAll(".smooth-scroll");k.forEach(n=>{n.addEventListener("click",i=>{i.preventDefault();const r=n.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth"})})});const u=document.querySelector("[data-thank]"),q=document.querySelector("[data-thank-close]"),E=document.querySelector(".submit-buynow"),L=document.querySelector(".bynow-form"),d=document.querySelector("[data-buynow]"),B=document.querySelector("[data-buynow-close]"),O=document.querySelector("[data-buynow-open]"),P=document.querySelector("[data-buy-open]");O.addEventListener("click",()=>{d.classList.remove("is-hidden"),document.body.classList.add("no-scroll")});P.addEventListener("click",()=>{d.classList.remove("is-hidden"),document.body.classList.add("no-scroll")});B.addEventListener("click",()=>{d.classList.add("is-hidden"),document.body.classList.remove("no-scroll")});E.addEventListener("click",function(){d.classList.add("is-hidden"),u.classList.remove("is-hidden"),document.body.classList.add("no-scroll")});q.addEventListener("click",function(){u.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),L.submit()});window.addEventListener("beforeunload",function(n){u.classList.contains("is-hidden")||L.submit()});const s=document.querySelector(".video-cover"),c=document.querySelector(".play-icon"),o=document.querySelector(".video"),V={opacity:1,transition:"opacity 0.3s ease-in-out"},j={opacity:1,transition:"opacity 0.3s ease-in-out"},v={opacity:0,pointerEvents:"none"};s.addEventListener("click",f);s.addEventListener("touchstart",f);function f(){Object.assign(s.style,v),Object.assign(c.style,v),Object.assign(s.style,{opacity:0,pointerEvents:"none"}),Object.assign(c.style,{opacity:0,pointerEvents:"none"}),o.classList.remove("is-hidden"),o.src+="?autoplay=1";const n=window.innerWidth;n>=768&&n<=1200?o.style.maxHeight="400px":o.style.maxHeight="none",o.addEventListener("ended",function(){Object.assign(s.style,V),Object.assign(c.style,j),Object.assign(s.style,{opacity:1,pointerEvents:"auto"}),Object.assign(c.style,{opacity:1,pointerEvents:"auto"}),o.classList.add("is-hidden")})}const y={openMenuBtn:document.querySelector("[data-explore-open]"),closeMenuBtn:document.querySelector("[data-explore-close]"),menu:document.querySelector("[data-explore]")};y.openMenuBtn.addEventListener("click",w);y.closeMenuBtn.addEventListener("click",w);function w(){y.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const m=document.querySelector("[data-feedback]"),x=document.querySelector("[data-feedback-close]"),C=document.querySelector(".submit-review"),h=document.querySelector(".review-form"),p=document.querySelector("[data-review]"),M=document.querySelector("[data-review-close]"),I=document.querySelector("[data-review-open]");I.addEventListener("click",()=>{p.classList.remove("is-hidden"),document.body.classList.add("no-scroll")});M.addEventListener("click",()=>{p.classList.add("is-hidden"),document.body.classList.remove("no-scroll")});C.addEventListener("click",function(){p.classList.add("is-hidden"),m.classList.remove("is-hidden"),document.body.classList.add("no-scroll")});x.addEventListener("click",function(){m.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),h.submit()});window.addEventListener("beforeunload",function(n){m.classList.contains("is-hidden")||h.submit()});
