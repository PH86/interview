import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "images/interview-dark.svg";
import { pageTransitions } from "utils/Animations";
import searchIcon from "images/searchIcon.png";

import { useAuthContext } from "hooks/useAuthContext";
import { apiUrl, url } from "utils/constants";

export const Register: React.FC = (): React.ReactElement => {
  const { signIn } = useAuthContext();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}${apiUrl.auth.signIn}`, {
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
          // Show error message
        } else {
          setApiError("There was a problem with your request");
        }
      })
      .catch((err) => err)
      // Remove this line once api call is set up as this is currently bypassing everything above
      .finally(() => signIn("test"));
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
              <label htmlFor="name">
                Your name
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
              </label>
            </div>
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
            </div>
            <button className="button" type="submit" form="loginForm">
              CREATE ACCOUNT
            </button>
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
    </motion.div>
  );
};
