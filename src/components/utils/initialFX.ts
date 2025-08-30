import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { smoother } from "../Navbar";

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

export function initialFX() {
  // Ensure smoother is available before using it
  if (smoother) {
    smoother.paused(false);
  }
  
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Create the SplitText instance for the main landing text
  const landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );

  // Animate the characters of the main landing text
  gsap.from(landingText.chars, {
    opacity: 0,
    y: 80,
    filter: "blur(5px)",
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.025,
    delay: 0.3,
  });

  // Create and animate the second set of text
  const landingText2 = new SplitText(".landing-h2-info", {
    type: "chars,lines",
    linesClass: "split-h2",
  });
  gsap.from(landingText2.chars, {
    opacity: 0,
    y: 80,
    filter: "blur(5px)",
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.025,
    delay: 0.3,
  });

  // Animate other landing elements
  gsap.from(".landing-info-h2", {
    opacity: 0,
    y: 30,
    duration: 1.2,
    ease: "power1.inOut",
    delay: 0.8,
  });

  gsap.from([".header", ".icons-section", ".nav-fade"], {
    opacity: 0,
    duration: 1.2,
    ease: "power1.inOut",
    delay: 0.1,
  });
}
