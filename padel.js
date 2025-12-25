var tl = gsap.timeline();

tl.from("li", {
  y: -50,
  opacity: 5,
  duration: 1,
  delay: 0.2,
  stagger: 0.3,
});

gsap.from(".header-h1", {
  x: 900,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".header-h1",
    scroller: "body",
  },
});

gsap.from(".header-p", {
  x: -900,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

// Animate card from Left
gsap.from(".left-animate", {
  x: -800,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".left-animate",
    scroller: "body",
  },
});

// Custom Cursor
const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX - cursor.offsetWidth / 2,
    y: e.clientY - cursor.offsetHeight / 2,
    duration: 0.3,
    ease: "Power3.easeOut",
    
  });
});

