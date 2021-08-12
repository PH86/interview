/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import Modal from "styled-react-modal";

import { backgroundColor, textColor } from "themes/theme";
import logo from "images/interview-dark.svg";
import { pageTransitions } from "utils/Animations";
import searchIcon from "images/searchIcon.png";
import { apiUrl, url } from "utils/constants";

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
  max-width: 95%;
`;

export const Register: React.FC = (): React.ReactElement => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState("");
  const [openSuccessModal, setOpenSucessModal] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const history = useHistory();

  const toggleSuccessModal = () => {
    setOpenSucessModal(!openSuccessModal);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const checkPassword = () => {
    if (userDetails.password.length >= 8) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  useEffect(() => {
    checkPassword();
  }, [userDetails.password]);

  // function to check regex
  // set state when regex complies
  // if state is true allow submit

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}${apiUrl.auth.createUser}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        // Handle successful api call
        if (res.ok) {
          res.json();
          toggleSuccessModal();
          // Show error message
        } else {
          setApiError("Email already in use");
        }
      })
      .catch((err) => err);
  };

  const completeLogin = () => {
    setOpenSucessModal(false);
    history.push(url.signIn);
  };

  return (
    <motion.div
      className="container"
      initial="initial"
      animate="animate"
      exit="initial"
      variants={pageTransitions}
    >
      <div className="form-container">
        <article className="form-container">
          <img className="form-logo" src={logo} alt="Interview Logo" />
          {apiError && <p className="error-message">{apiError}</p>}
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">
                Email address
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label htmlFor="password">
                Set a password
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
              </label>
              {!passwordValid && userDetails.password && (
                <p>* password must be at least 8 characters long</p>
              )}
            </div>
            {passwordValid ? (
              <button className="button" type="submit" form="loginForm">
                CREATE ACCOUNT
              </button>
            ) : (
              <button className="button-grey" type="button">
                CREATE ACCOUNT
              </button>
            )}
          </form>
        </article>
        <div className="form-container-footer">
          <p>Already have an account?</p>
          <Link to={url.signIn} className="text-button">
            Sign In
          </Link>
        </div>
      </div>
      <div className="vertical"></div>
      <div className="info-container">
        <img src={searchIcon} alt="search icon" />
        <h2>Your full solution to managing talent acquisition</h2>
        <h6>
          Say goodbye to silos and embrace a single sourcing, talent engagement,
          and hiring platform. Our solution creates a full talent lifecycle
          seamlessly uniting the advantages of our state of the art technology
        </h6>
      </div>
      <StyledModal
        isOpen={openSuccessModal}
        onBackgroundClick={toggleSuccessModal}
        onEscapeKeydown={toggleSuccessModal}
      >
        <article className="register-modal-container">
          <h3 className="register-modal-title">Success!</h3>
          <p className="register-modal-text">
            You are now registered please proceed to log in
          </p>
          <button
            onClick={() => completeLogin()}
            className="standard-button"
            type="button"
          >
            OK
          </button>
        </article>
      </StyledModal>
    </motion.div>
  );
};
