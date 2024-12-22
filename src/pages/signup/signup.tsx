import "./signup.css";
import SignupThumbnail from "../../assets/job_login.png";
import Logo from "../../components/common/logo/logo";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigation = useNavigate();

  return (
    <div className="signup-wrap">
      <div className="signup">
        <div className="signup-left">
          <div className="logo-wrap">
            <Logo />
          </div>
          <img
            className="signup-thumbnail"
            src={SignupThumbnail}
            alt="signup-thumbnail"
          />
        </div>
        <div className="signup-right">
          <div className="signup-title">Sign Up</div>
          <div className="signup-form">
            <input
              type="email"
              placeholder="Email Id"
              className="signup-inputs"
            />
            <p className="signup-error">Please enter valid email</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="signup-inputs"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="signup-inputs"
            />
            <p className="signup-error">Please enter password</p>
            <button
              className="signup-submit-button"
              onClick={() => navigation("/")}
            >
              Signup
            </button>
            <button
              className="signup-signup-button"
              onClick={() => navigation("/login")}
            >
              Already have an account?{" "}
              <span style={{ color: "#0073e6", fontWeight: "600" }}>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
