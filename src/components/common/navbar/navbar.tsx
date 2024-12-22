import { useEffect, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import Logo from "../logo/logo";
import "./navbar.css";
import { FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleNavigation = (item: string, path: string) => {
    setSelectedItem(item);
    navigation(path);
  };

  const location = useLocation();
  useEffect(
    () =>
      handleNavigation(location.pathname.slice(1), location.pathname.slice(1)),
    []
  );
  console.log(location.pathname.slice(1));

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div
            onClick={() => handleNavigation("Home", "/")}
            style={{ cursor: "pointer" }}
          >
            <Logo />
          </div>
          <div className="nav-search">
            <FaSearch className="nav-search-icon" />
            <input
              type="text"
              name="search"
              className="nav-search-input"
              placeholder="Search jobs"
            />
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-oppurtunity-lists">
            <div
              className={`navbar-right-oppurtunity-item ${
                selectedItem === "jobs" ? "active" : ""
              }`}
              onClick={() => handleNavigation("jobs", "/jobs")}
            >
              Jobs
            </div>
            <div
              className={`navbar-right-oppurtunity-item ${
                selectedItem === "internships" ? "active" : ""
              }`}
              onClick={() => handleNavigation("internships", "/internships")}
            >
              Internships
            </div>
            <div
              className={`navbar-right-oppurtunity-item ${
                selectedItem === "watchlist" ? "active" : ""
              }`}
              onClick={() => handleNavigation("watchlist", "/watchlist")}
            >
              Wishlist
            </div>
            <div
              className={`navbar-right-oppurtunity-item ${
                selectedItem === "applications" ? "active" : ""
              }`}
              onClick={() => handleNavigation("applications", "/applications")}
            >
              Applications
            </div>
          </div>
          <div
            className="navbar-right-user-section"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="navbar-right-item">
                <FaMessage className="navbar-right-item-icon" />
              </div>
              <div className="navbar-right-item">
                <FaBell className="navbar-right-item-icon" />
              </div>
              <div className="navbar-right-item">
                <IoPerson className="navbar-right-item-icon" />
              </div>
            </div>
            <button
              onClick={() => handleNavigation("login", "/login")}
              className="nav-auth-button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
