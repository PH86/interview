import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../images/InterviewLogo.PNG";
import { GoDashboard } from 'react-icons/go';
import { BiSearchAlt } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscAccount } from 'react-icons/vsc';
import { GrNotes } from 'react-icons/gr';

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-container">
          <img className="form-logo" src={logo} alt="Interview Logo" />
          <ul className="sidebar-links">
            <li>
              <Link to="/interview/dashboard" className="sidebar-link">
                <GoDashboard className='sidebar-icon' />
              DASHBOARD
              </Link>
            </li>
            <li>
              <Link to="/interview/jobs" className="sidebar-link">
                <GrNotes className='sidebar-icon' />
                JOB VACANCIES
              </Link>
            </li>
            <li>
              <Link to="/interview/candidates" className="sidebar-link">
                <BiSearchAlt className='sidebar-icon' />
                CANDIDATE SEARCH
              </Link>
            </li>
            <li>
              <Link to="/interview/studio" className="sidebar-link">
                <ImStatsDots className='sidebar-icon' /> REPORTING STUDIO
              </Link>
            </li>
            <li>
              <Link to="/interview/settings" className="sidebar-link">
                <IoSettingsOutline className='sidebar-icon' />
                USER SETTINGS
              </Link>
            </li>
            <li>
              <Link to="/interview/account" className="sidebar-link">
                <VscAccount className='sidebar-icon' />
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
