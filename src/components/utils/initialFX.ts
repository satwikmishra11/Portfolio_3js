import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document.getElementsByTagName("main")[0].classList.add("main-active");

  // background fade-in
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate intro text
  animateText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    0.3
  );

  animateText([".landing-h2-info"], 0.3);

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Loop animations
  loopText(".landing-h2-info", ".landing-h2-info-1");
  loopText(".landing-h2-1", ".landing-h2-2");
}

/**
 * Splits text content into spans per character
 * and animates them with GSAP
 */
function animateText(selectors: string[], delay = 0) {
  selectors.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) return;

    // Split into chars
    const chars = el.textContent?.split("") || [];
    el.innerHTML = chars
      .map((ch) => `<span class="split-char">${ch}</span>`)
      .join("");

    gsap.fromTo(
      el.querySelectorAll(".split-char"),
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay,
      }
    );
  });
}

/**
 * Loops between two text elements with GSAP timeline
 */
function loopText(selector1: string, selector2: string) {
  const el1 = document.querySelector(selector1);
  const el2 = document.querySelector(selector2);

  if (!el1 || !el2) return;

  const chars1 = el1.textContent?.split("") || [];
  const chars2 = el2.textContent?.split("") || [];

  el1.innerHTML = chars1.map((ch) => `<span class="split-char">${ch}</span>`).join("");
  el2.innerHTML = chars2.map((ch) => `<span class="split-char">${ch}</span>`).join("");

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    el2.querySelectorAll(".split-char"),
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay,
    },
    0
  )
    .fromTo(
      el1.querySelectorAll(".split-char"),
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      el1.querySelectorAll(".split-char"),
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay,
      },
      0
    )
    .to(
      el2.querySelectorAll(".split-char"),
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
