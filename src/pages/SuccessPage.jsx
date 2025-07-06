import React from "react";
import "../styles/SuccessPage.css";
import Button from "../components/Button";
import image from "../assets/success-image.png";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div>
      <div className="hero-bg-success">
        <div className="success-image">
          <img src={image} alt="Success" />
        </div>
        <div className="text-container">
          <h1>
            You are successfully <br /> registered!
          </h1>
        </div>
        <div className="button-container">
          <Link to="/login">
            <Button type="submit" className="button">
              Go to Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
