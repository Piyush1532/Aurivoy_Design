const menuBar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-close");
const navbar = document.querySelector("#navbar");

menuBar.addEventListener("click", () => {
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
});

// gsap animation start here

const tL = gsap.timeline();

tL.from(".home header", {
  opacity: 0,
  y: -100,
  duration: 1.5,
  ease: "power4.out",
});

tL.from(".home .main h1,.home .main p,.home .main .search", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power4.out",
  stagger:.2
});

gsap.utils.toArray(".animation-on-scroll").forEach((box)=>{
  gsap.to(box,{
    opacity:1,
    x:0,
    y:0,
    scale:1,
    scrollTrigger:{
      trigger:box,
      start:"top 75%",
      toggleActions:"play none none reverse",

    },


  })
})

const textReveal=document.querySelectorAll(".text-reveal-animation")

textReveal.forEach(textAnimation => {
  textAnimation.innerHTML = textAnimation.textContent
    .split(" ")
    .map(word => {
      return `<span class="word">${word.split("").map(letter => 
        `<span class="letter">${letter === '' ? '&nbsp;' : letter}</span>`
      ).join("")}</span>`;
    })
    .join(" ");

 
  gsap.fromTo(
    textAnimation.querySelectorAll(".letter"),
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textAnimation,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
