import React from "react";

import { FaExclamationCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/PersonalInformation.css";
import { Link } from "react-router-dom";

function PersonalInformation() {
  const [startDate, setStartDate] = React.useState(null);
  return (
    <div>
      <div className="hero-bg">
        <div className="header">
          <h1>Personal Information</h1>
        </div>
        <div className="form">
          <form>
            <div className="input-container">
              <input
                type="text"
                id="full-name"
                placeholder="Enter your full name"
                name="fullName"
                required
              />
            </div>

            <div className="gender">
              <label htmlFor="gender">Gender:</label>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>

            <div className="note">
              <div className="icon">
                <FaExclamationCircle />
              </div>
              <p>The phone number and birthday are only visible to you</p>
            </div>

            <div className="contact">
              <div className="phone-input-wrapper">
                <div className="country-code">
                  <select>
                    <option value="+234">+234</option>
                    <option value="+598">+598</option>
                    <option value="+1">+1</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="phone-number-input"
                />
              </div>
            </div>

            <div className="input-container">
              <div className="birthday">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select your birthday"
                  className="date-picker"
                />
              </div>
            </div>
            <p>Let us know your birthday so we don’t miss it!</p>
            <Link to="/address">
              <button type="submit">Save Information</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
