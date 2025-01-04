import "./login.css";
import LoginThumbnail from "../../assets/job_login.png";
import Logo from "../../components/common/logo/logo";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  return (
    <div className="login-wrap">
      <div className="login">
        <div className="login-left">
          <div className="logo-wrap">
            <Logo />
          </div>
          <img
            className="login-thumbnail"
            src={LoginThumbnail}
            alt="login-thumbnail"
          />
        </div>
        <div className="login-right">
          <div className="login-title">Login</div>
          <div className="login-form">
            <input
              type="email"
              placeholder="Email Id"
              className="login-inputs"
            />
            <p className="login-error">Please enter valid email</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="login-inputs"
            />
            <p className="login-error">Please enter password</p>
            <button
              className="login-submit-button"
              onClick={() => navigation("/home")}
            >
              Login
            </button>
            <button
              className="login-signup-button"
              onClick={() => navigation("/signup")}
            >
              Don't have an account?{" "}
              <span style={{ color: "#0073e6", fontWeight: "600" }}>
                Sign up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
