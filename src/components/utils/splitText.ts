import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // Handle paragraphs
  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    // Manually split text into words
    const words = (para.textContent || "").trim().split(/\s+/);
    para.innerHTML = words
      .map((word) => `<span class="split-word">${word}</span>`)
      .join(" ");

    const wordSpans = para.querySelectorAll(".split-word");

    para.anim = gsap.fromTo(
      wordSpans,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  // Handle titles
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    // Manually split text into characters
    const chars = (title.textContent || "").split("");
    title.innerHTML = chars
      .map((ch) => `<span class="split-char">${ch}</span>`)
      .join("");

    const charSpans = title.querySelectorAll(".split-char");

    title.anim = gsap.fromTo(
      charSpans,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  // Refresh handling
  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
