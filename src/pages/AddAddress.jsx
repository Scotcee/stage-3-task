import React from "react";
import "../styles/AddAddress.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function AddAddress() {
  return (
    <div className="hero-bg">
      <div className="header">
        <h1>Add Address</h1>
        <form action="submit">
          <input type="address" placeholder="street address" />
          <input type="text" placeholder="Apartment (optional)" />
          <input type="text" placeholder="City" />
          <div className="flex-container">
            <input type="text" placeholder="State" />
            <input type="number" placeholder="Zip code" />
          </div>
          <Link to="/success">
            <Button type="submit" className="button">
              Save Information
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddAddress;
