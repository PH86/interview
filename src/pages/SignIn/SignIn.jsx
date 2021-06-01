import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./SignIn.css";
import searchIcon from "../../images/searchIcon.PNG";

function SignIn() {
  return (
    <div className="container">
      <div className="form-container">
        <SignInForm />
        <div className="form-container-footer">
          <p>Don’t have an account?</p>
          <button className="text-btn">Get started for free</button>
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
    </div>
  );
}

export default SignIn;
