import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Registration.css";
import { FaApple, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const location = useLocation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValid(value.includes("@") && value.includes(".com"));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPasswordValid(value.length >= 8);
  };

  return (
    <div>
      <div className="hero-bg">
        <div className="icon-bg">
          <div className="icon-container">
            <FaApple size={30} color="black" />
          </div>
          <div className="icon-container">
            <FaFacebook size={30} color="blue" />
          </div>
          <div className="icon-container">
            <FcGoogle size={30} />
          </div>
        </div>

        <form action="">
          <div className="hero-content">
            <p>or log in with email</p>

            <div className="form">
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Email address"
                  onChange={handleEmailChange}
                />
                {emailValid && <span className="checkmark">✔️</span>}
              </div>

              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
                {passwordValid && <span className="checkmark">✔️</span>}
                <span
                  className="toggle-visibility"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <Link to="/dashboard">
                <Button
                  onClick={() =>
                    console.log("Button clicked " + `${location.pathname}`)
                  }
                >
                  Create Account
                </Button>
              </Link>
            </div>

            <div className="check-box">
              <input type="checkbox" id="news" />
              <label htmlFor="news">Remember me</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
