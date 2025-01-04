import "./jobDetailer.css";
import JobHeader from "./jobHeader";
import ApplySection from "./applySection";
import DetailCard from "./detailsCard";
import AdditionalDetails from "./additionalDetails";
import { HiUserGroup, HiSparkles } from "react-icons/hi";
import { FaCalendar } from "react-icons/fa";

const JobDetailer = () => {
  return (
    <div className="jobdetailer">
      <JobHeader />
      <ApplySection />
      <div className="jobdetailer-application-details">
        <DetailCard
          icon={<HiUserGroup />}
          title="Applied"
          value={1008}
        />
        <DetailCard
          icon={<HiSparkles />}
          title="Impressions"
          value={10008}
        />
        <DetailCard
          icon={<FaCalendar />}
          title="Application Deadline"
          value="18 Jan 2025, 12:00 AM IST"
        />
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
      <AdditionalDetails />
    </div>
  );
};

export default JobDetailer;