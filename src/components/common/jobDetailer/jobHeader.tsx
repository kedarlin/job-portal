import { FaCalendar } from "react-icons/fa";
import RQLogo from "../../../assets/rq_logo.png";
import { FaLocationPin } from "react-icons/fa6";

const JobHeader = () => {
  return (
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
  );
};

export default JobHeader;