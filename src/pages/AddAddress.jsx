import React from "react";
import "../styles/AddAddress.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function AddAddress() {
  const pages = ["/", "/personal-information", "/address", "/add-address"];
  const currentPageIndex = pages.indexOf(location.pathname);
  const pageNumber = currentPageIndex !== -1 ? currentPageIndex + 1 : "?";
  const totalPages = pages.length;
  return (
    <div className="hero-bg">
      <div className="header-address">
        <div className="header">
          <h1>Add Address</h1>
          <p>{`${pageNumber} / ${totalPages} `}</p>
        </div>
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
