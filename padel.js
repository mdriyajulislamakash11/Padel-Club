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
// const cursor = document.querySelector("#cursor");
// const main = document.querySelector("#main");

// main.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, {
//     x: e.clientX - cursor.offsetWidth / 2,
//     y: e.clientY - cursor.offsetHeight / 2,
//     duration: 0.3,
//     ease: "Power3.easeOut",

//   });
// });

gsap.from(".about", {
  x: 800,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
  },
});
gsap.from(".ab-imag", {
  x: -800,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
  },
});

gsap.from(".delevary", {
  x: -1200,
  duration: 3,
  delay: 1,
  
  scrollTrigger: {
    trigger: ".delevary",
    scroller: "body",
  },
});

gsap.from("#man", {
  rotate: -45,
  duration: 2,
  delay: 1,
  
  scrollTrigger: {
    trigger: "#man",
    scroller: "body",
  },
});



// popular
gsap.registerPlugin(ScrollTrigger);

// cards animation
gsap.utils.toArray(".pop-card").forEach((card, i) => {
  gsap.from(card, {
    y: 120,
    x: i % 2 === 0 ? -80 : 80,
    opacity: 0,
    scale: 0.9,
    duration: 0.9,
    ease: "power4.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});


// freedeback
gsap.registerPlugin(ScrollTrigger);

// LEFT CARD
gsap.from(".feed-left", {
  x: -1200,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".feed-left",
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});

// RIGHT CARD
gsap.from(".feed-right", {
  x: 1200,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".feed-right",
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});

