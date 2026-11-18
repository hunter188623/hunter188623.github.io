const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-link[href^='#']").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll('.nav-link[href^="#"]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}});},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>observer.observe(section));


// Remove stale category filter controls if an older cached/legacy markup is present.
(() => {
  const labels = new Set(["all", "ctf", "portswigger", "bug bounty", "web security"]);
  document.querySelectorAll("button, a").forEach((el) => {
    const label = el.textContent.trim().replace(/\\s+/g, " ").toLowerCase();
    if (!labels.has(label)) return;
    const parent = el.parentElement;
    if (!parent) return;
    const siblings = [...parent.children].filter((child) =>
      labels.has(child.textContent.trim().replace(/\\s+/g, " ").toLowerCase())
    );
    if (siblings.length >= 3) parent.remove();
    else el.remove();
  });
})();
