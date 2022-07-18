const tl = gsap.timeline({ duration: 0.3, ease: "Power2" });

tl.from(".about-row", {
  y: 50,
  opacity: 0,
  stagger: 0.5,
});
