import React, { useState } from "react";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import "../styles/Registration.css";
import { FaApple, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";
import { signUp, googleSignIn } from "../firebase/auth";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const isRegistrationPage = location.pathname === "/";

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes("@") && value.includes(".com"));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password);
      console.log("Signed up:", user);
      navigate("/personal-information");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((newUser) => {
        console.log("Google Sign In successful:", newUser);
        navigate("/personal-information");
      })
      .catch((err) => {
        alert("Google Sign In failed: " + err.message);
      });
  };

  return (
    <div>
      {isRegistrationPage && (
        <div className="hero-bg">
          <header className="hero-header">
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </header>
          <div className="icon-bg">
            <div className="icon-container">
              <FaApple size={30} color="black" />
            </div>
            <div className="icon-container">
              <FaFacebook size={30} color="blue" />
            </div>
            <div className="icon-container">
              <a href="#" onClick={handleGoogleSignIn}>
                <FcGoogle size={30} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="hero-content">
              <p>or register with email</p>

              <div className="form">
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={handleEmailChange}
                    value={email}
                  />
                  {emailValid && <span className="checkmark">✔️</span>}
                </div>

                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  {passwordValid && <span className="checkmark">✔️</span>}
                  <span
                    className="toggle-visibility"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <Button type="submit" disabled={!emailValid || !passwordValid}>
                  Create Account
                </Button>
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
      )}

      <Outlet />
    </div>
  );
}

export default Registration;
