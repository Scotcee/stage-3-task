import React from "react";
import "../../../styles/DashboardTable.css";

function DashboardTable() {
  return (
    <div>
      <div className="table-bg">
        <div className="table-heading">
          <div className="heading-title">
            <h2>All Customers</h2>
            <h4>Active Members</h4>
          </div>
          <div className="search-bg">
            <div className="search-bar">
              <input type="search" placeholder="Search..." /> <span>🔎</span>
            </div>
            <select>
              <option value="Short By: Newest">Sort By: Newest</option>
              <option value="Short By: oldest">Sort By: oldest</option>
            </select>
          </div>
        </div>
        <div className="table-container">
          <table className="customer-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td>Microsoft</td>
                <td>(225) 555-0118</td>
                <td>jane.cooper@microsoft.com</td>
                <td>USA</td>
                <td className="status active">Active</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>Google</td>
                <td>(302) 123-4567</td>
                <td>john.smith@google.com</td>
                <td>UK</td>
                <td className="status inactive">Inactive</td>
              </tr>
              <tr>
                <td>Aisha Bello</td>
                <td>Flutterwave</td>
                <td>(234) 803-000-0000</td>
                <td>aisha.bello@flutterwave.com</td>
                <td>Nigeria</td>
                <td className="status active">Active</td>
              </tr>
              <tr>
                <td>Aisha Bello</td>
                <td>Flutterwave</td>
                <td>(234) 803-000-0000</td>
                <td>aisha.bello@flutterwave.com</td>
                <td>Nigeria</td>
                <td className="status active">Active</td>
              </tr>
              <tr>
                <td>Aisha Bello</td>
                <td>Flutterwave</td>
                <td>(234) 803-000-0000</td>
                <td>aisha.bello@flutterwave.com</td>
                <td>Nigeria</td>
                <td className="status active">Active</td>
              </tr>
              <tr>
                <td>Aisha Bello</td>
                <td>Flutterwave</td>
                <td>(234) 803-000-0000</td>
                <td>aisha.bello@flutterwave.com</td>
                <td>Nigeria</td>
                <td className="status active">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardTable;
