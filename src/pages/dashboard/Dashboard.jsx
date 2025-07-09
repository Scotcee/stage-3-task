import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../dashboard/dashboard.style.css";

import { FaArrowUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { TbSquareKey } from "react-icons/tb";
import { DiHtml53dEffects } from "react-icons/di";
import { LuSquareUser } from "react-icons/lu";
import { GiWallet } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";

import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div>
      <div className="dashboard-bg">
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <Link to="/refresh">
            {" "}
            <TbSquareKey /> Dashboard
          </Link>
          <ul>
            <li>
              <Link to="/products">
                <DiHtml53dEffects />
                Products{" "}
                <div className="icon">
                  <FaAngleRight />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/customers">
                <LuSquareUser />
                Customers{" "}
                <div className="icon">
                  <FaAngleRight />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/income">
                <GiWallet />
                Income{" "}
                <div className="icon">
                  <FaAngleRight />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/promote">
                <CiDiscount1 />
                Promote{" "}
                <div className="icon">
                  <FaAngleRight />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/help">
                <LuMessageCircleQuestion />
                Help{" "}
                <div className="icon">
                  <FaAngleRight />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="body">
          <header>
            <div className="header">
              <h2>
                {currentUser?.email ? (
                  <>
                    Hello {currentUser.email}{" "}
                    <span
                      role="img"
                      aria-label="waving hand"
                      className="wave-hand"
                    >
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
            <div className="tracker">
              <div className="tracker-icon">
                <HiOutlineUsers />
              </div>
              <div className="tracker-content">
                <h3>Total Customers</h3>
                <p>5,423</p> <br /> <FaArrowUp />
                <p>
                  <span>19%</span>this month
                </p>
              </div>
              <div className="all-customer"></div>
            </div>
            <div className="tracker">
              <div className="tracker-icon">
                <HiOutlineUsers />
              </div>
              <div className="tracker-content">
                <h3>Total Customers</h3>
                <p>5,423</p> <br /> <FaArrowUp />
                <p>
                  <span>19%</span>this month
                </p>
              </div>
              <div className="all-customer"></div>
            </div>
            <div className="tracker">
              <div className="tracker-icon">
                <HiOutlineUsers />
              </div>
              <div className="tracker-content">
                <h3>Total Customers</h3>
                <p>5,423</p> <br /> <FaArrowUp />
                <p>
                  <span>19%</span>this month
                </p>
              </div>
              <div className="all-customer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
