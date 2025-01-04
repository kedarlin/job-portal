import "./profileHero.css";
import { BiPencil } from "react-icons/bi";
import ProfileBannerImg from "../../../assets/profile_banner.png";
import ProfileDpImg from "../../../assets/profile_dp.png";
import { FaBuilding, FaFile, FaShareAlt } from "react-icons/fa";

const ProfileHero = () => {
  return (
    <div className="profile-hero">
      <div className="profile-hero-banner">
        <img
          src={ProfileBannerImg}
          alt=""
          className="profile-hero-banner-img"
        />
        <BiPencil className="profile-hero-banner-edit-icon" />
      </div>
      <div className="profile-hero-details">
        <div className="profile-hero-left">
          <img src={ProfileDpImg} alt="" className="profile-hero-dp-img" />
          <div className="profile-hero-detail">
            <h3 className="profile-hero-detail-name">Kedar D</h3>
            <p className="profile-hero-detail-username">@kedar_ling</p>
            <div className="profile-hero-detail-workplace">
              <FaBuilding className="profile-hero-detail-icon" />
              St Joseph's College Of Engineering, Chennai
            </div>
            <div className="profile-hero-detail-resume">
              <FaFile className="profile-hero-detail-icon" />
              <span style={{ color: "#005cb7" }}>Resume</span>
            </div>
          </div>
        </div>
        <div className="profile-hero-right">
          <div className="profile-hero-right-top">
            <FaShareAlt style={{fontSize: "20px", color: "#888", padding:"5px", border:"1px solid #999", borderRadius:"5px", cursor:"pointer"}}/>
          </div>
          <button className="profile-hero-edit-button">
            <BiPencil style={{fontSize: "20px"}} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
