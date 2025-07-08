import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";
import { FaApple, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";
import { logIn, googleSignIn } from "../firebase/auth";

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await logIn(email, password);
      console.log("Login successful:", user);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await googleSignIn();
      console.log("Google login successful:", user);
      navigate("/dashboard");
    } catch (err) {
      alert("Google login failed: " + err.message);
    }
  };

  return (
    <div className="hero-bg">
      <div className="icon-bg">
        <div className="icon-container">
          <FaApple size={30} color="black" />
        </div>
        <div className="icon-container">
          <FaFacebook size={30} color="blue" />
        </div>
        <div className="icon-container" onClick={handleGoogleLogin}>
          <FcGoogle size={30} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="hero-content">
          <p>or log in with email</p>

          <div className="form">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              {emailValid && <span className="checkmark">✔️</span>}
            </div>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordValid && <span className="checkmark">✔️</span>}
              <span className="toggle-visibility" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Button type="submit" disabled={!emailValid || !passwordValid}>
              Log In
            </Button>
          </div>

          <div className="check-box">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
