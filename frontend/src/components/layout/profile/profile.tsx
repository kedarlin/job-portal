import { BiPencil } from "react-icons/bi";
import ProfileHero from "../../common/profileHero/profileHero";
import "./profile.css";
import PdfIcon from '../../../assets/pdf_icon.png';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHero />
      <div className="profile-details">
        <div className="profile-detail-section">
          <div className="profile-detail-section-head">
            About
            <BiPencil />
          </div>
          <div className="profile-detail-section-about">
            I'm very interested in attending various interns to develop my
            skills and hone them for my future professions.
          </div>
        </div>

        <div className="profile-detail-section">
          <div className="profile-detail-section-head">
            Resume
            <BiPencil />
          </div>
          <div className="profile-detail-section-resume">
            <img style={{height: "30px", padding: "5px", border: "1px solid #999", borderRadius:"5px"}} src={PdfIcon} alt="pdf-icon" />
            <p>Kedar_resume.pdf</p>
          </div>
        </div>
        <div className="profile-detail-section">
          <div className="profile-detail-section-head">
            Skills
            <BiPencil />
          </div>
          <div className="profile-detail-section-skills">
            <p>C</p>
            <p>Data Structure</p>
            <p>Full Stack Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
