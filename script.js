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
