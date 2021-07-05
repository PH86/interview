import { useState } from 'react'; 
import { motion } from "framer-motion";
import { pageTransitions } from "utils/Animations";
import logo from "images/interview-dark.svg";

import { useAuthContext } from "hooks/useAuthContext";

export const PasswordReset: React.FC<{}> = (): React.ReactElement => {
    const { resetPassword } = useAuthContext()
	const [email, setEmail] = useState('')

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
        console.log(email);
        
	}

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        resetPassword(email)
    };

    return (
        <motion.div
            className="container slim-container"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={pageTransitions}
        >
            <div className="form-container">
            <img className="form-logo" src={logo} alt="Interview Logo" />
            <form className="form" id="recoverForm" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={(event) => handleOnChange(event)}
                        required 
                    />
                </div>
                <div className="input-container">
                    <h3>
                        Please enter the email address you would like the recovery link
                        sent to{" "}
                    </h3>
                </div>
            </form>
            <button className="button" type="submit" form="recoverForm">
                Recover
            </button>
            </div>
        </motion.div>
    );
}
