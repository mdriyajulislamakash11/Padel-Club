   
   var tl = gsap.timeline();

   tl.from("li", {
     y: -50,
     opacity: 5,
     duration: 1,
     delay: 0.2,
     stagger: 0.3,
   });
   
   
   
   gsap.to(".boox", {
 
      rotation: 3360,
      duration: 2.5,
      repeat: Infinity,
      yoyo: true,
scale: 0.2,
borderradius: "50%",
    });

    gsap.to(".boox1", {
      backgroundColor: "#22c55e",
      rotation: -360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      scale: 0.2,
    });