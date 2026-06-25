import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "CodeJudge",
    category: "Distributed Online Judge Platform",
    tools: "React, Next.js 14, Node.js, Go, Docker, PostgreSQL, Redis, WebSocket, RabbitMQ",
    link: "https://github.com/satwikmishra11/CodeJudge",
    image: "/images/placeholder.webp",
  },
  {
    title: "ZynexHub",
    category: "Social Networking Mobile App",
    tools: "React Native, Firebase Firestore, Expo EAS, Reanimated, FlatList Virtualization, Hermes",
    link: "https://github.com/satwikmishra11/ZynexHub",
    image: "/images/placeholder.webp",
  },
  {
    title: "AI Job Portal",
    category: "AI recruitment platform",
    tools: "Flask, MongoDB, AWS S3, Redis, Gemini AI (Resume Parsing & Semantic Matching)",
    link: "https://github.com/satwikmishra11",
    image: "/images/placeholder.webp",
  },
  {
    title: "AuthNexus",
    category: "Authentication Library",
    tools: "Python, Flask, FastAPI (Modular JWT/OAuth2 PyPI package)",
    link: "https://pypi.org/project/authnexus",
    image: "/images/placeholder.webp",
  },
  {
    title: "CodeXccelerate",
    category: "AI Mock Interview System (1st Place Hackathon)",
    tools: "Full-Stack, Speech Analysis, UI/UX Design (Prize: 1,00,000 INR)",
    link: "https://github.com/satwikmishra11",
    image: "/images/placeholder.webp",
  },
  {
    title: "Apache DataFusion",
    category: "Open Source Contributions",
    tools: "Rust, Apache Arrow (3+ PRs merged into core engine)",
    link: "https://github.com/apache/datafusion",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
