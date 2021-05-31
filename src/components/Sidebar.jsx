import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../images/InterviewLogo.PNG";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-container">
          <img className="form-logo" src={logo} alt="Interview Logo" />
          <ul className="sidebar-links">
            <li>
              <Link to="/interview/dashboard" className="sidebar-link">
                DASHBOARD
              </Link>
            </li>
            <li>
              <Link to="/interview/jobs" className="sidebar-link">
                JOB VACANCIES
              </Link>
            </li>
            <li>
              <Link to="/interview/candidates" className="sidebar-link">
                CANDIDATE SEARCH
              </Link>
            </li>
            <li>
              <Link to="/interview/studio" className="sidebar-link">
                REPORTING STUDIO
              </Link>
            </li>
            <li>
              <Link to="/interview/settings" className="sidebar-link">
                USER SETTINGS
              </Link>
            </li>
            <li>
              <Link to="/interview/account" className="sidebar-link">
                ACCOUNT & BILLING
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
