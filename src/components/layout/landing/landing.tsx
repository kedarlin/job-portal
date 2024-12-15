import Card from "../../common/card/card";
import "./landing.css";
import intern_bg_img from "../../../assets/intern_thumbnail.png";
import job_bg_img from "../../../assets/jobs_thumbnail.png";

function Landing() {
  // const brandLogos = [];

  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-left">
          <h1 className="landing-left-title">
            <span className="landing-left-title-span">Set </span>
            Your Career
          </h1>
          <p className="landing-left-desc">
            Explore Various Oppurtunities across various firms and apply to the
            jobs to get hired by your dream company.
          </p>
        </div>
        <div className="landing-right">
          <Card
            title="Internships"
            description="Gain Practical Experience"
            color="#9be6c1"
            imagePath={intern_bg_img}
          />
          <Card
            title="Jobs"
            description="Explore careers"
            color="#9bc9ff"
            imagePath={job_bg_img}
          />
        </div>
      </div>
      <div className="landing-carousel">
        <div className="landing-carousel-title">
          Industry Vetarans
          <br />
          <span>Trust us</span>
        </div>
        <div className="carousel-list">
          <div className="carousel-item">
            <img src='' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
