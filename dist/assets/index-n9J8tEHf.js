(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const q=[{id:1,category:"Yoga",img:"/public/assets/yoga.jpg",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",time:["Saturday-Sunday: 8:00am - 10.00am","Monday-Tuesday: 10:00am - 12.00pm","Wednesday-Friday: 3:00pm - 6.00pm"]},{id:2,category:"Group",img:"/public/assets/group.webp",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",time:["Saturday-Sunday: 12:00pm - 4.00pm","Tuesday-Thursday: 2:00pm - 4.00pm","Wednesday-Friday: 6:00pm - 9.00pm"]},{id:3,category:"Solo",img:"/public/assets/solo.jpg",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",time:["Saturday-Sunday: 10:00am - 12.00am","Monday-Tuesday: 12:00pm - 2.00pm","Wednesday-Friday: 2:00pm - 4.00pm"]},{id:4,category:"Stretching",img:"/pulic/assets/stret.webp",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",time:["Saturday-Sunday: 11:00am - 1.00pm","Tuesday-Thursday: 10:00am - 12.00pm","Wednesday-Friday: 10:00am - 12.00pm"]}];document.querySelector(".navbar");const c=document.querySelector(".nav-container"),d=document.querySelector(".container-top");document.addEventListener("scroll",()=>{window.pageYOffset!=0?(c.classList.add("nav-style"),d.style.paddingTop="72px"):(c.classList.remove("nav-style"),d.style.paddingTop="144px")});const l=document.querySelector(".menu-btn");["resize","scroll"].forEach(e=>window.addEventListener(e,()=>{l.checked==!0&&(l.checked=!1)}));const r=document.querySelectorAll(".group-btn"),m=document.querySelectorAll(".group-btn div"),p=document.querySelector(".group-content");r[0].style.backgroundColor="#FE9B01";for(let e=0;e<r.length;e++)r[e].addEventListener("click",()=>{for(let a=0;a<r.length;a++)r[a].style.backgroundColor="#355592",m[a].classList.remove("selection");r[e].style.backgroundColor="#FE9B01",m[e].classList.add("selection"),p.innerHTML="";const t=r[e].innerText;q.forEach(a=>{a.category==t&&L(a,p)})});const b=document.querySelector(".arrow-up"),h=document.querySelector("#height"),y=document.querySelector("#weight");y.addEventListener("input",()=>{let e=y.value/(h.value/100)**2,t;e>13.5&&e<18.5?t=7+(e-13.5)*16/5:e>25&&e<30||e>=30&&e<35||e>=35&&e<40?t=40+(e-24.5)*16/5:e>=18.5&&e<25&&(t=23+(e-18.5)*16/7),t>6&&t<88&&(b.style.left=`${t}%`)});function L(e,t){let a=document.createElement("div");a.classList.add("desc"),a.innerHTML=`<h3>Why are your ${e.category}?</h3>
  <p>
  ${e.desc}
  </p>
  <h3>When comes ${e.category} Your Time.</h3>
  <p>${e.time[0]}</p>
  <p>${e.time[1]}</p>
  <p>${e.time[2]}</p>
</div>`;let o=document.createElement("img");o.classList.add("class-img"),o.src=`${e.img}`,o.alt=`${e.category}`,t.append(a),t.append(o)}const u=document.querySelectorAll(".img-box"),g=document.querySelectorAll(".trainer-flag"),f=document.querySelectorAll(".trainer-name");for(let e=0;e<u.length;e++)u[e].addEventListener("mouseover",()=>{g[e].classList.remove("hidden"),f[e].classList.remove("hidden")}),u[e].addEventListener("mouseout",()=>{g[e].classList.add("hidden"),f[e].classList.add("hidden")});