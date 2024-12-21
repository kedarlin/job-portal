import "./jobDetailer.css";
import RQLogo from "../../../assets/rq_logo.png";
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { HiSparkles, HiUserGroup } from "react-icons/hi";
import WorkDetailImg from '../../../assets/work_details.png';

const JobDetailer = () => {
  const [toggleWishlist, setToggleWishlist] = useState<boolean>(false);
  return (
    <div className="jobdetailer">
      <div className="jobdetailer-header">
        <div className="jobdetailer-header-head">
          <div className="jobdetailer-header-head-left">
            <img
              src={RQLogo}
              alt="jobdetailer-company-logo"
              className="jobdetailer-logo"
            />
          </div>
          <div className="jobdetailer-header-head-right">
            <div className="jobdetailer-header-title">Full Stack Developer</div>
            <div className="jobdetailer-header-company">Rootquotient</div>
          </div>
        </div>
        <div className="jobdetailer-header-details">
          <div className="jobdetailer-header-location">
            <FaLocationPin />
            Bangalore, India
          </div>
          <div className="jobdetailer-header-postedon">
            <FaCalendar />
            Dec 08, 2024
          </div>
        </div>
      </div>

      <div className="jobdetailer-apply">
        <FaHeart
          onClick={() => setToggleWishlist(!toggleWishlist)}
          style={{
            color: toggleWishlist ? "red" : "",
            cursor: "pointer",
            fontSize: "22px",
          }}
        />
        <button className="jobdetailer-apply-button">Quick Apply</button>
      </div>

      <div className="jobdetailer-application-details">
        <div
          className="jobdetailer-applicants"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <HiUserGroup
            className="jobdetailer-applicants-icon"
            style={{
              padding: "15px",
              backgroundColor: "#e9e9e9",
              borderRadius: "5px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#666" }}>Applied</div>
            <div>1008</div>
          </div>
        </div>
        <div
          className="jobdetailer-impressions"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <HiSparkles
            className="jobdetailer-impressions-icon"
            style={{
              padding: "15px",
              backgroundColor: "#e9e9e9",
              borderRadius: "5px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#666" }}>Impressions</div>
            <div>10008</div>
          </div>
        </div>
        <div
          className="jobdetailer-deadline"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <FaCalendar
            className="jobdetailer-impressions-icon"
            style={{
              padding: "15px",
              backgroundColor: "#e9e9e9",
              borderRadius: "5px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#666" }}>Application Deadline</div>
            <div>18 Jan 2025, 12:00 AM IST</div>
          </div>
        </div>
      </div>

      <div className="jobdetailer-eligibility">
        <div
          style={{
            fontSize: "20px",
            fontWeight: "500",
            marginLeft: "-20px",
            paddingLeft: "15px",
            borderLeft: "5px solid blue",
          }}
        >
          Eligibility
        </div>
        <div style={{ fontSize: "12px", color: "#777" }}>
          Engineering Students
        </div>
      </div>

      <div className="jobdetailer-description">
        <div
          style={{
            fontSize: "20px",
            fontWeight: "500",
            marginLeft: "-20px",
            paddingLeft: "15px",
            borderLeft: "5px solid blue",
          }}
        >
          Job Description
        </div>
      </div>

      <div className="jobdetailer-additional-details">
      <div
          style={{
            fontSize: "20px",
            fontWeight: "500",
            marginLeft: "-20px",
            paddingLeft: "15px",
            borderLeft: "5px solid blue",
          }}
        >
          Additional Information
        </div>
        <div className="jobdetailer-addtional-items" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <div className="jobdetailer-addtional-item">
                <div className="additional-item-left">
                    <div className="additional-info-title" style={{fontWeight: "500"}}>Work Detail</div>
                    <div className="additional-info">
                        Working days : <span style={{color: "#666"}}> 5 Days</span>
                    </div>
                </div>
            </div>
            <div className="additional-item-right">
                <img className="additional-item-right-img" src={WorkDetailImg} style={{height: "90px", margin: "-25px"}} alt="additional-image"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailer;
