const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

document.addEventListener("DOMContentLoaded", () => {
  const boot = $("#boot"), field = $("#cubeField"), pct = $("#bootPct"), name = $("#bootName");
  const total = 18 * 9;
  for(let i=0;i<total;i++){
    const c = document.createElement("span");
    c.className = "cube";
    const delay = Math.random() * .7;
    c.style.setProperty("--delay", `${delay}s`);
    field.appendChild(c);
  }
  const cubes = $$(".cube");
  const nameLetters = "RADHSHAHMAT".split("");
  const revealCubes = () => {
    const shuffled = cubes.slice().sort(() => Math.random() - .5);
    shuffled.forEach((c,i) => {
      if(i < Math.ceil(cubes.length*.32)) c.classList.add("hot");
      c.style.setProperty("--delay", `${i*.008}s`);
    });
  };
  revealCubes();
  let p=0;
  const timer = setInterval(() => {
    p += Math.floor(Math.random()*13)+7;
    if(p>100) p=100;
    pct.textContent = p;
    if(p>=100){
      clearInterval(timer);
      setTimeout(() => {
        name.classList.add("show");
        setTimeout(() => boot.classList.add("done"), 520);
      }, 140);
    }
  }, 55);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
  }, {threshold:.12});
  $$(".reveal").forEach(el => observer.observe(el));

  const nav = $(".nav"), top = $("#toTop");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    top.classList.toggle("show", scrollY > 700);
  }, {passive:true});
  top.addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));

  if(matchMedia("(pointer:fine)").matches){
    const dot=$("#cursorDot"), ring=$("#cursorRing");
    let mx=-100,my=-100,rx=-100,ry=-100;
    window.addEventListener("mousemove", e => {mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px";});
    const loop=()=>{rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(loop)}; loop();
    $$("a,button,.project-card,.magnetic").forEach(el=>{
      el.addEventListener("mouseenter",()=>ring.classList.add("hover"));
      el.addEventListener("mouseleave",()=>ring.classList.remove("hover"));
    });
  }

  $$(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      if(matchMedia("(pointer:fine)").matches){
        const r=card.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
        const rx=((y/r.height)-.5)*-5, ry=((x/r.width)-.5)*5;
        card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }
    });
    card.addEventListener("mouseleave",()=>card.style.transform="");
  });

  $$(".magnetic").forEach(el=>{
    if(!matchMedia("(pointer:fine)").matches) return;
    el.addEventListener("mousemove",e=>{
      const r=el.getBoundingClientRect(), dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2);
      el.style.transform=`translate(${dx*.12}px,${dy*.12}px)`;
    });
    el.addEventListener("mouseleave",()=>el.style.transform="");
  });

  $("#year").textContent = new Date().getFullYear();
});
