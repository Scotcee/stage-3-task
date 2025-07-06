import React, { use } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/Registration.css";
import { FaApple, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";

function Registration() {
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

  // Check if the current page is the registration page
  const isRegistrationPage = location.pathname === "/";

  return (
    <div>
      {/* <div className="step-indicator">
        <p>
          Step {currentStep} of {totalSteps}
        </p>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div> */}

      {isRegistrationPage ? (
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
              <p>or register with email</p>

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

                <Link to="/personal-information">
                  <Button onClick={() => console.log("Button clicked")}>
                    Create Account
                  </Button>
                </Link>
              </div>

              <div className="check-box">
                <input type="checkbox" id="news" />
                <label htmlFor="news">Send me news and promotions</label>
              </div>
            </div>
          </form>

          <div className="registration-footer">
            <p>
              By continuing, you agree to our <a href="#">Terms of Service</a>{" "}
              <br />
              and <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
}

export default Registration;
