import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAltFast,
  faNewspaper,
  faSearch,
  faChartNetwork,
  faUserCog,
  faUserChart,
  faSun,
  faSpaceStationMoonAlt,
  faPortalEnter,
} from "@fortawesome/pro-duotone-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";

import { useTheme } from "themes/themeManager";
import {
  secondaryGrey,
  sidebarBackgroundColor,
  sidebarTextColor,
} from "themes/theme";
import "./Sidebar.css";
import logoLight from "images/interview-light.svg";
import logoDark from "images/interview-dark.svg";

import { useAuthContext } from "hooks/useAuthContext";
import { sidebarTransitions, staggerTransitions } from "utils/Animations";
import { url } from "utils/constants";
import { SidebarLink } from "./components/SidebarLink";

const SidebarContainer = styled.div`
  background-color: ${sidebarBackgroundColor};
  color: ${sidebarTextColor};
`;

const LinkContainer = styled.ul`
  background-color: ${sidebarBackgroundColor};
  color: ${sidebarTextColor};
`;

const SignoutContainer = styled.div`
  background-color: ${secondaryGrey};
`;

const LinkButton = styled.button`
  color: ${sidebarTextColor};
`;

export const Sidebar: React.FC = (): React.ReactElement => {
  const { signOut } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const urlLocation = useLocation();
  const theme = useTheme();

  useEffect(() => {
    setMenuOpen(false);
  }, [urlLocation]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <nav className="sidebar">
        <motion.div variants={staggerTransitions}>
          <SidebarContainer className="sidebar-container">
            <LinkButton
              className={`toggle-button ${menuOpen ? "active" : null}`}
              onClick={handleMenuToggle}
            >
              <GiHamburgerMenu className="sidebar-icon" />
            </LinkButton>
            <motion.img
              className="sidebar-logo"
              src={theme.mode === "dark" ? logoDark : logoLight}
              alt="Interview Logo"
              variants={sidebarTransitions}
            />
            <LinkContainer
              className={`sidebar-links ${menuOpen ? "active" : null}`}
            >
              <SidebarLink
                url={url.dashboard}
                title="Dashboard"
                icon={faTachometerAltFast}
                swapOpacity={false}
              />
              <SidebarLink
                url={url.jobs}
                title="Job Vacancies"
                icon={faNewspaper}
                swapOpacity={false}
              />
              <SidebarLink
                url={url.candidates}
                title="Candidate Search"
                icon={faSearch}
                swapOpacity={false}
              />
              <SidebarLink
                url={url.studio}
                title="Reporting Studio"
                icon={faChartNetwork}
                swapOpacity={false}
              />
              <SidebarLink
                url={url.settings}
                title="User Settings"
                icon={faUserCog}
                swapOpacity
              />
              <SidebarLink
                url={url.account}
                title="Account & Billing"
                icon={faUserChart}
                swapOpacity
              />
              <motion.div variants={sidebarTransitions}>
                <li>
                  <LinkButton
                    className="sidebar-link"
                    onClick={() => theme.toggle()}
                  >
                    <FontAwesomeIcon
                      className="sidebar-icon"
                      icon={
                        theme.mode !== "dark" ? faSpaceStationMoonAlt : faSun
                      }
                    />
                    {theme.mode === "dark" ? "LIGHT MODE" : "DARK MODE"}
                  </LinkButton>
                </li>
              </motion.div>
              <SignoutContainer className="sidebar-signout">
                <p>User Name</p>
                <div>
                  <LinkButton onClick={() => signOut()}>
                    <FontAwesomeIcon
                      className="sidebar-icon"
                      icon={faPortalEnter}
                    />
                  </LinkButton>
                </div>
              </SignoutContainer>
            </LinkContainer>
          </SidebarContainer>
        </motion.div>
      </nav>
    </motion.div>
  );
};
