import { SignInForm } from "../../components/SignInForm/SignInForm";
import "./SignIn.css";
import { motion } from "framer-motion";
import { pageTransitions } from "../../utils/Animations";
import searchIcon from "../../images/searchIcon.png";

export const SignIn: React.FC<{}> = (): React.ReactElement => {
  return (
    <motion.div className="container" 
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
    >
      <div className="form-container">
        <SignInForm />
        <div className="form-container-footer">
          <p>Don’t have an account?</p>
          <button className="text-button">Get started for free</button>
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
}
