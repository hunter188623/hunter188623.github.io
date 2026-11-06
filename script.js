const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-link[href^='#']").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll('.nav-link[href^="#"]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}});},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>observer.observe(section));
