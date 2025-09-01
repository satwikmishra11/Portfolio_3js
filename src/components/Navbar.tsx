import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

// Register only free plugins
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Reset scroll on load
    window.scrollTo({ top: 0, behavior: "auto" });

    // Navbar fade / sticky effect
    ScrollTrigger.create({
      trigger: ".header",
      start: "top top",
      end: "+=200",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(".header", {
          backgroundColor: self.progress > 0.2 ? "rgba(0,0,0,0.8)" : "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    // Smooth scroll for links (mimic ScrollSmoother scrollTo)
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section) {
            gsap.to(window, {
              duration: 1.2,
              scrollTo: { y: section, offsetY: 0 },
              ease: "power2.inOut",
            });
          }
        }
      });
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          S.M.
        </a>
        <a
          href="mailto:satwikmishra46@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          satwikmishra46@mail.com
        </a>
        <ul>
          <li>
            <a data-href="/src/components/utils/about.tsx" href="./about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="./work" href="./work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="./contact" href="./contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
