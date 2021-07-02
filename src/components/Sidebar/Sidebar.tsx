import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAltFast, faNewspaper, faSearch, faChartNetwork, faUserCog, faUserChart, faSun, faSpaceStationMoonAlt, faPortalEnter } from '@fortawesome/pro-duotone-svg-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useTheme } from 'themes/themeManager';
import { secondaryGrey, sidebarBackgroundColor, sidebarTextColor } from "themes/theme";
import "./Sidebar.css";
import logoLight from "images/interview-light.svg";
import logoDark from 'images/interview-dark.svg';

import { useAppContext } from "hooks/useAppContext";
import { sidebarTransitions, staggerTransitions } from "utils/Animations";


const SidebarContainer = styled.div`
  background-color: ${sidebarBackgroundColor};
  color: ${sidebarTextColor};
  transition: var(--transition);
`;

const LinkContainer = styled.ul`
  background-color: ${sidebarBackgroundColor};
  color: ${sidebarTextColor};
  transition: var(--transition);
`;

const SignoutContainer = styled.div`
  background-color: ${secondaryGrey};
`;

export const Sidebar: React.FC<{}> = (): React.ReactElement => {
  const { signOut } = useAppContext();
  // const urlLocation = useLocation();
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
  }, []);

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <nav className="sidebar">
        <motion.div variants={staggerTransitions}>
          <SidebarContainer className="sidebar-container">
            <a href="#" className="toggle-button">
              <GiHamburgerMenu className='sidebar-icon' />
            </a>
            {theme.mode === 'dark' ?
              <motion.img
                className="sidebar-logo"
                src={logoDark}
                alt="Interview Logo"
                variants={sidebarTransitions}
              /> :
              <motion.img
                className="sidebar-logo"
                src={logoLight}
                alt="Interview Logo"
                variants={sidebarTransitions}
              />}
            <LinkContainer className="sidebar-links">
              {/* <motion.div variants={sidebarTransitions}>
                <li>
                  <Link to="/interview/dashboard" className={urlLocation.pathname === "/interview/dashboard" ? "sidebar-link-active" : "sidebar-link"}>
                    {theme.mode === 'dark' ? <FontAwesomeIcon className='sidebar-icon' icon={faTachometerAltFast} /> : <FontAwesomeIcon className='sidebar-icon' icon={faTachometerAltFast} swapOpacity />}
                    DASHBOARD
                  </Link>
                </li>
              </motion.div>
              <motion.div variants={sidebarTransitions}>
                <li>
                  <Link to="/interview/jobs" className={urlLocation.pathname === "/interview/jobs" ? "sidebar-link-active" : "sidebar-link"}>
                    {theme.mode === 'dark' ? <FontAwesomeIcon className='sidebar-icon' icon={faNewspaper} /> : <FontAwesomeIcon className='sidebar-icon' icon={faNewspaper} swapOpacity />}
                    JOB VACANCIES
                  </Link>
                </li>
              </motion.div>
              <motion.div variants={sidebarTransitions}>
                <li>
                  <Link to="/interview/candidates" className={urlLocation.pathname === "/interview/candidates" ? "sidebar-link-active" : "sidebar-link"}>
                    {theme.mode === 'dark' ? <FontAwesomeIcon className='sidebar-icon' icon={faSearch} /> : <FontAwesomeIcon className='sidebar-icon' icon={faSearch} swapOpacity />}
                    CANDIDATE SEARCH
                  </Link>
                </li>
              </motion.div>
              <motion.div variants={sidebarTransitions}>
                <li>
                  <Link to="/interview/studio" className={urlLocation.pathname === "/interview/studio" ? "sidebar-link-active" : "sidebar-link"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={faChartNetwork} />
                    REPORTING STUDIO
                  </Link>
                </li>
              </motion.div>
              <motion.div variants={sidebarTransitions}>
                <li>
                  <Link to="/interview/settings" className={urlLocation.pathname === "/interview/settings" ? "sidebar-link-active" : "sidebar-link"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={faUserCog} swapOpacity />
                    USER SETTINGS
                  </Link>
                </li>
              </motion.div>
              <motion.div variants={sidebarTransitions}>
                <li>
                  <Link to="/interview/account" className={urlLocation.pathname === "/interview/account" ? "sidebar-link-active" : "sidebar-link"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={faUserChart} swapOpacity />
                    ACCOUNT & BILLING
                  </Link>
                </li>
              </motion.div> */}
              <motion.div variants={sidebarTransitions}>
                <li>
                  <a onClick={() => theme.toggle()}>
                    {theme.mode === 'dark' ? <a className="sidebar-link"><FontAwesomeIcon className='sidebar-icon' icon={faSun} />LIGHT MODE</a> : <a className="sidebar-link"><FontAwesomeIcon className='sidebar-icon' icon={faSpaceStationMoonAlt} swapOpacity />DARK MODE</a>}
                  </a>
                </li>
              </motion.div>
              <motion.div variants={sidebarTransitions}>
                <SignoutContainer onClick={() => signOut()} className='sidebar-signout'>
                  <p>User Name</p>
                  <FontAwesomeIcon className='sidebar-icon' icon={faPortalEnter} />
                </SignoutContainer>
              </motion.div>
            </LinkContainer>
          </SidebarContainer>
        </motion.div>
      </nav>
    </motion.div>
  );
}
