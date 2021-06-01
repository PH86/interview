import React, { useState, useContext } from "react";
import "./SignInForm.css";
import logo from "../../images/InterviewLogo.PNG";
import { SignInContext } from "../../context";

function SignInForm() {
  const { loggedIn, setLoggedIn } = useContext(SignInContext);
  const [passwordRecover, setPasswordRecover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleRecover = (e) => {
    e.preventDefault();
    console.log("recovery");
  };

  return (
    <>
      <article className="form-container">
        <img className="form-logo" src={logo} alt="Interview Logo" />
        {passwordRecover ? (
          <>
            <form classname="form" id="recoverForm" onSubmit={handleRecover}>
              <div className="input-container">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-container">
                <h3>
                  Please enter the email address you would like the recovery
                  link sent to{" "}
                </h3>
              </div>
            </form>
            <button className="btn" type="submit" form="recoverForm">
              Recover
            </button>
          </>
        ) : (
          <>
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-container">
                <label htmlFor="password">PASSWORD</label>
                <input type="password" id="password" name="password" required />
              </div>
            </form>
            <div>
              <button className="btn" type="submit" form="loginForm">
                LOG IN
              </button>
              <button
                className="text-btn"
                onClick={(e) => setPasswordRecover(true)}
              >
                Forgot your password?
              </button>
            </div>
          </>
        )}
      </article>
    </>
  );
}

export default SignInForm;
