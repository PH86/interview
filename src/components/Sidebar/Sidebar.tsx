import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import styled from "styled-components";
import logoLight from "../../images/InterviewLogo.png";
import logoDark from '../../images/Logo2.png';
import { GoDashboard } from 'react-icons/go';
import { BiSearchAlt } from 'react-icons/bi';
import { ImStatsDots } from 'react-icons/im';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscAccount } from 'react-icons/vsc';
import { IoNewspaperOutline } from 'react-icons/io5';
import { CgSun } from 'react-icons/cg';
import { RiMoonClearLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from '../../themes/themeManager';
import { sidebarBackgroundColor, sidebarTextColor } from "../../themes/theme";

export const Sidebar: React.FC<{}> = (): React.ReactElement => {

  const theme = useTheme();
  React.useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const sidebarLinks = document.getElementsByClassName('sidebar-links')[0];

    toggleButton.addEventListener('click', () => {
      sidebarLinks.classList.toggle('active');
    });
    sidebarLinks.addEventListener('click', () => {
      sidebarLinks.classList.toggle('active');
    });
  }, [theme]);

  const Sidebar = styled.div`
    background-color: ${sidebarBackgroundColor};
    color: ${sidebarTextColor};
  `;

  const Ul = styled.ul`
  background-color: ${sidebarBackgroundColor};
  color: ${sidebarTextColor};
  `;

  return (
    <nav className="sidebar">
      <Sidebar className="sidebar-container">
        <a href="#" className="toggle-button">
          <GiHamburgerMenu className='sidebar-icon' />
        </a>
        {theme.mode === 'dark' ? <img className="sidebar-logo" src={logoLight} alt="Interview Logo" /> : <img className="sidebar-logo" src={logoDark} alt="Interview Logo" />}
        <Ul className="sidebar-links">
          <li>
            <Link to="/interview/dashboard" className="sidebar-link">
              <GoDashboard className='sidebar-icon' />
            DASHBOARD
            </Link>
          </li>
          <li>
            <Link to="/interview/jobs" className="sidebar-link">
              <IoNewspaperOutline className='sidebar-icon' />
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
          <li>
            <a onClick={() => theme.toggle()}>
              {theme.mode === 'dark' ? <a className="sidebar-link"><CgSun className='sidebar-icon' />LIGHT MODE</a> : <a className="sidebar-link"><RiMoonClearLine className='sidebar-icon' />DARK MODE</a>}
            </a>
          </li>
        </Ul>
      </Sidebar>
    </nav>
  );
}
