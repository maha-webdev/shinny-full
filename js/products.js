const tl = gsap.timeline({ duration: 0.3, ease: "Power2" });

tl.from(".products-header-intro", {
  x: "-110%",
})
  .from(
    ".products-header-hero",
    {
      x: "110%",
    },
    "-=0.3"
  )
  .from(".products-content", {
    opacity: 0,
    y: 50,
  });
