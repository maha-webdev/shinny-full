const tl = gsap.timeline({ duration: 0.3, ease: "Power2" });

tl.from(".contact-title", {
  x: "-200%",
})
  .from(
    ".contact-subtitle",
    {
      x: "-200%",
    },
    "-=0.3"
  )
  .from(
    ".contact-form",
    {
      x: "200%",
    },
    "-=0.3"
  );
