window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`; // concotination
});

gsap.registerePlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
