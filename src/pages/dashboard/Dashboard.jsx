import React from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../dashboard/dashboard.style.css";
import { logOut } from "../../firebase/auth";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { TbSquareKey } from "react-icons/tb";
import { DiHtml53dEffects } from "react-icons/di";
import { LuSquareUser, LuMessageCircleQuestion } from "react-icons/lu";
import { GiWallet } from "react-icons/gi";
import { CiDiscount1, CiMonitor, CiLogout } from "react-icons/ci";

import { HiOutlineUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

import { useAuth } from "../../context/AuthContext";
import DashboardTable from "./components/DashboardTable";

function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="dashboard-bg">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <Link to="/refresh">
          <span className="icon">
            <TbSquareKey />
          </span>
          <span className="">Dashboard</span>
        </Link>

        <ul>
          <li>
            <Link to="/products">
              <span className="icon">
                <DiHtml53dEffects />
              </span>
              <span className="label">Products</span>
              <div className="icon label">
                <FaAngleRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/customers">
              <span className="icon">
                <LuSquareUser />
              </span>
              <span className="label">Customers</span>
              <div className="icon label">
                <FaAngleRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/income">
              <span className="icon">
                <GiWallet />
              </span>
              <span className="label">Income</span>
              <div className="icon label">
                <FaAngleRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/promote">
              <span className="icon">
                <CiDiscount1 />
              </span>
              <span className="label">Promote</span>
              <div className="icon label">
                <FaAngleRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <span className="icon">
                <LuMessageCircleQuestion />
              </span>
              <span className="label">Help</span>
              <div className="icon label">
                <FaAngleRight />
              </div>
            </Link>
          </li>
          <li></li>
        </ul>
        <button onClick={handleLogout} className="logout-button">
          <p className="icon">
            <CiLogout />
          </p>
          <p className="label">Log Out</p>
        </button>
      </nav>

      <div className="body">
        <header>
          <div className="header">
            <h2>
              {currentUser?.email ? (
                <>
                  Hello {currentUser.email}{" "}
                  <span role="img" aria-label="wave" className="wave-hand">
                    👋
                  </span>
                </>
              ) : (
                "Loading..."
              )}
            </h2>
          </div>
          <div className="search-bar">
            <input type="search" placeholder="Search..." /> <span>🔎</span>
          </div>
        </header>

        <div className="body-bg">
          <div className="tracker-bg">
            <div className="tracker">
              <div className="tracker-icon">
                <HiOutlineUsers />
              </div>
              <div className="tracker-content">
                <h3>Total Customers</h3>
                <h1>5,423</h1>
                <p>
                  <FaArrowUp color="#28a745" /> <span>19%</span> this month
                </p>
              </div>
            </div>

            <div className="tracker">
              <div className="tracker-icon">
                <CgProfile />
              </div>
              <div className="tracker-content">
                <h3>Members</h3>
                <h1>1,893</h1>
                <p>
                  <FaArrowDown color="#ff0000" />{" "}
                  <span style={{ color: "#ff0000" }}>1%</span> this month
                </p>
              </div>
            </div>

            <div className="tracker">
              <div className="tracker-icon">
                <CiMonitor />
              </div>
              <div className="tracker-content">
                <h3>Active Now</h3>
                <h1>189</h1>
                <p>
                  <FaArrowUp color="#28a745" /> <span>19%</span> this month
                </p>
              </div>
            </div>
          </div>

          <div className="all-customers">
            <DashboardTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
