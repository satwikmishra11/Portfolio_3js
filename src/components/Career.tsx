import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.TECH (CSE)</h4>
                <h5>K.R. MANGALAM UNIVERSITY</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science and Engineering with a CGPA of 8.67 / 10.0.
              Focused on core computer science subjects, systems, competitive programming, and full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOFTWARE DEVELOPER INTERN</h4>
                <h5>XEBIA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led the planning and delivery of a student-focused academic management platform under senior engineering mentorship.
              Coordinated cross-functional teams on technology selection and UI/UX design, and oversaw the end-to-end development lifecycle.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOFTWARE DEVELOPER INTERN</h4>
                <h5>GOQUANT INC.</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Contributing to backend systems for institutional DeFi & digital assets trading infrastructure, building real-time market data pipelines,
              smart order routing, smart order execution, and lifecycle management tooling (settlement, clearing, PMS/RMS integration).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
