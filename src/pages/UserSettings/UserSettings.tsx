import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "styled-react-modal";

import { backgroundColor, textColor } from "themes/theme";
import { pageTransitions, modalTransitions } from "utils/Animations";
import { MetaInfo } from "components";
import {
  AccountInformation,
  SecurityInformation,
} from "pages/UserSettings/components";

const StyledModal = Modal.styled`
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: 15px;
`;

export const UserSettings: React.FC = (): React.ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalComponent, setModalComponent] = useState<JSX.Element>();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const openModalComponent = (component: JSX.Element) => {
    setModalComponent(component);
    setOpenModal(true);
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={pageTransitions}
      className="content-container accounts-content-container"
    >
      <h1>User Settings</h1>
      <div className="section-container">
        <div className="detail-box sub-box">
          <p>
            <b>Account Information</b>
          </p>
          <MetaInfo label="First name" text="Test" />
          <MetaInfo label="Last name" text="User" />
          <MetaInfo label="Email address" text="test.user@company.com" />
          <MetaInfo label="Phone number" text="07900000000" />
          <MetaInfo label="Job position" text="Hiring Manager" />
          <button
            className="standard-button"
            onClick={() => openModalComponent(<AccountInformation />)}
            type="button"
          >
            Edit
          </button>
        </div>
        <div className="detail-box sub-box">
          <p>
            <b>Security Information</b>
          </p>
          <MetaInfo label="Password" text="**********" />
          <button
            className="standard-button"
            onClick={() => openModalComponent(<SecurityInformation />)}
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
      <StyledModal
        isOpen={openModal}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <motion.div variants={modalTransitions}>{modalComponent}</motion.div>
      </StyledModal>
    </motion.div>
  );
};
