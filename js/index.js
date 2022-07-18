const tl = gsap.timeline({ duration: 0.3, ease: "Power2" });

tl.from(".navbar", {
  y: "-100%",
})
  .from(".home-hero", {
    x: "-100%",
  })
  .from(
    ".home-intro",
    {
      x: "120%",
    },
    "-=0.3"
  );
