import Card from "../../common/card/card";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-left">
        <h2 className="landing-left-title">
          <span className="landing-left-title-span">Set</span>
          Your Career
        </h2>
        <p className="landing-left-desc">
          Explore Various Oppurtunities across various firms and apply to the
          jobs to get hired by your dream company.
        </p>
      </div>
      <div className="landing-right">
        <Card title="Internship" description="Gain Practical Experienc" color="#9be6c1" imagePath="/assets/jobs_thumbnail.webp" />
      </div>
    </div>
  );
}

export default Landing;
