import React from "react";
import "../styles/Address.css";
import { Link } from "react-router-dom";
import { IoIosContacts, IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import Button from "../components/Button";

function Address() {
  const pages = ["/", "/personal-information", "/address", "/add-address"];
  const currentPageIndex = pages.indexOf(location.pathname);
  const pageNumber = currentPageIndex !== -1 ? currentPageIndex + 1 : "?";
  const totalPages = pages.length;
  return (
    <div>
      <div className="hero-bg">
        <div className="header">
          <h1>Add Address</h1>
          <p>{`${pageNumber} / ${totalPages} `}</p>
        </div>
        <form action="submit">
          <input
            type="address"
            placeholder="Search for  address"
            className="address-input"
          />
          <p>Your address is not visible to other users</p>

          <div className="search-address">
            <Button type="" className="button">
              <CiLocationOn /> Use current location
            </Button>
            <Link to="/add-address">
              <Button type="submit" className="button">
                Add manually
              </Button>
            </Link>
          </div>
        </form>

        <div className="share-address">
          <h2>sharing your address shows : </h2>
          <ul>
            <li>
              <div className="icon">
                <IoIosContacts />
              </div>
              people near you
            </li>
            <li>
              <div className="icon">
                <IoMdTime />
              </div>
              Estimated delivery time
            </li>
            <li>
              <div className="icon">
                <TbCurrencyNaira />
              </div>
              Estimated shipping cost
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Address;
