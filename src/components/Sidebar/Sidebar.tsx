import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import styled from "styled-components";
import logoLight from "../../images/interview-light.svg";
import logoDark from '../../images/interview-dark.svg';
import { AppContext } from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAltFast, faNewspaper, faSearch, faChartNetwork, faUserCog, faUserChart, faSun, faSpaceStationMoonAlt, faPortalEnter } from '@fortawesome/pro-duotone-svg-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from '../../themes/themeManager';
import { secondaryGrey, sidebarBackgroundColor, sidebarTextColor } from "../../themes/theme";

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
  transition: var(--transition);
`;

export const Sidebar: React.FC<{}> = (): React.ReactElement => {
  const { setLoggedIn } = React.useContext(AppContext);
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

  return (
    <nav className="sidebar">
      <SidebarContainer className="sidebar-container">
        <a href="#" className="toggle-button">
          <GiHamburgerMenu className='sidebar-icon' />
        </a>
        {theme.mode === 'dark' ? <img className="sidebar-logo" src={logoDark} alt="Interview Logo" /> : <img className="sidebar-logo" src={logoLight} alt="Interview Logo" />}
        <LinkContainer className="sidebar-links">
          <li>
            <Link to="/interview/dashboard" className="sidebar-link">
              {theme.mode === 'dark' ? <FontAwesomeIcon className='sidebar-icon' icon={faTachometerAltFast} /> : <FontAwesomeIcon className='sidebar-icon' icon={faTachometerAltFast} swapOpacity />}
            DASHBOARD
            </Link>
          </li>
          <li>
            <Link to="/interview/jobs" className="sidebar-link">
              {theme.mode === 'dark' ? <FontAwesomeIcon className='sidebar-icon' icon={faNewspaper} /> : <FontAwesomeIcon className='sidebar-icon' icon={faNewspaper} swapOpacity />}
              JOB VACANCIES
            </Link>
          </li>
          <li>
            <Link to="/interview/candidates" className="sidebar-link">
              {theme.mode === 'dark' ? <FontAwesomeIcon className='sidebar-icon' icon={faSearch} /> : <FontAwesomeIcon className='sidebar-icon' icon={faSearch} swapOpacity />}
              CANDIDATE SEARCH
            </Link>
          </li>
          <li>
            <Link to="/interview/studio" className="sidebar-link">
              <FontAwesomeIcon className='sidebar-icon' icon={faChartNetwork} />
              REPORTING STUDIO
            </Link>
          </li>
          <li>
            <Link to="/interview/settings" className="sidebar-link">
              <FontAwesomeIcon className='sidebar-icon' icon={faUserCog} swapOpacity />
              USER SETTINGS
            </Link>
          </li>
          <li>
            <Link to="/interview/account" className="sidebar-link">
              <FontAwesomeIcon className='sidebar-icon' icon={faUserChart} swapOpacity />
              ACCOUNT & BILLING
            </Link>
          </li>
          <li>
            <a onClick={() => theme.toggle()}>
              {theme.mode === 'dark' ? <a className="sidebar-link"><FontAwesomeIcon className='sidebar-icon' icon={faSun} />LIGHT MODE</a> : <a className="sidebar-link"><FontAwesomeIcon className='sidebar-icon' icon={faSpaceStationMoonAlt} swapOpacity />DARK MODE</a>}
            </a>
          </li>
          <SignoutContainer onClick={() => setLoggedIn(false)} className='sidebar-signout'>
            <p>User Name</p>
            <FontAwesomeIcon className='sidebar-icon' icon={faPortalEnter} />
          </SignoutContainer>
        </LinkContainer>
      </SidebarContainer>
    </nav>
  );
}
