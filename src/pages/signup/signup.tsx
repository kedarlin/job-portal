import "./signup.css";
import SignupThumbnail from "../../assets/job_login.png";
import Logo from "../../components/common/logo/logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupDetails from "./SignupDetails";
import { FaMars, FaVenus } from "react-icons/fa";

const Signup = () => {
  enum signupStatusEnum {
    NoComplete = "noComplete",
    AuthComplete = "authComplete",
    Complete = "complete",
  }
  const navigation = useNavigate();

  const [signupStatus, SetSignupStatus] = useState<signupStatusEnum>(
    signupStatusEnum.NoComplete
  );

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
          <div className="signup-title">Create an account</div>
          <div className="signup-progresses">
            <div
              className={`signup-progress ${
                signupStatus === "noComplete" || signupStatus === 'authComplete' ? "complete" : ""
              }`}
              onClick={() => SetSignupStatus(signupStatusEnum.NoComplete)}
            />
            <div
              className={`signup-progress ${
                signupStatus === "authComplete" ? "complete" : ""
              }`}
            />
          </div>
          {signupStatus === "authComplete" ? (
            <SignupDetails />
          ) : (
            <div className="signup-auth">
              <div className="signup-auth-names">
                <div className="signup-auth-inputbox">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="first name"
                    className="signup-inputs"
                  />
                </div>
                <div className="signup-auth-inputbox">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="last name"
                    className="signup-inputs"
                  />
                </div>
              </div>
              <div className="signup-auth-inputbox">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter EmailId"
                  className="signup-inputs"
                />
              </div>
              <div className="signup-auth-inputbox">
                <label>Phone</label>
                <input
                  type="password"
                  placeholder="Enter Phone Number"
                  className="signup-inputs"
                />
              </div>
              <div className="signup-auth-inputbox">
                <label>Gender</label>
                <div className="signup-auth-genders">
                  <div className="signup-auth-gender">
                    <FaMars />
                    Male
                  </div>
                  <div className="signup-auth-gender">
                    <FaVenus />
                    Female
                  </div>
                </div>
              </div>
              <div className="signup-auth-inputbox">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="signup-inputs"
                />
              </div>
              <div className="signup-auth-inputbox">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="signup-inputs"
                />
              </div>
              <button
                className="signup-submit-button"
                onClick={() => SetSignupStatus(signupStatusEnum.AuthComplete)}
              >
                Next
              </button>
            </div>
          )}
          {signupStatus === "noComplete" ? (
            <button
              className="signup-signup-button"
              onClick={() => navigation("/login")}
            >
              Already have account?{" "}
              <span style={{ color: "#0073e6", fontWeight: "600" }}>Login</span>
            </button>
          ) : (
            <button
              className="signup-submit-button"
              onClick={() => {SetSignupStatus(signupStatusEnum.Complete); navigation('/');}}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
