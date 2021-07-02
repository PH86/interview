import React from "react";
import "./SignInForm.css";
import logo from "../../images/interview-dark.svg";
import { useAppContext } from "hooks/useAppContext";
import history from "utils/history";
import { urls } from 'utils/constants';


export const SignInForm: React.FC<{}> = (): React.ReactElement => {
	const { signIn } = useAppContext()
	const [passwordRecover, setPasswordRecover] = React.useState(false);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		signIn('test')
		history.push(urls.dashboard)

	};

	const handleRecover = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("recovery");
	};

	return (
		<article className="form-container">
			<img className="form-logo" src={logo} alt="Interview Logo" />
			{passwordRecover ? (
				<>
					<form className="form" id="recoverForm" onSubmit={handleRecover}>
						<div className="input-container">
							<label htmlFor="email">EMAIL ADDRESS</label>
							<input type="email" id="email" name="email" required />
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
				</>
			) : (
				<>
					<form id="loginForm" onSubmit={handleSubmit}>
						<div className="input-container">
							<label htmlFor="email">EMAIL ADDRESS</label>
							<input type="email" id="email" name="email" 
							// required 
							/>
						</div>
						<div className="input-container">
							<label htmlFor="password">PASSWORD</label>
							<input type="password" id="password" name="password" 
							// required 
							/>
						</div>
					</form>
					<div>
						<button className="button" type="submit" form="loginForm">
							LOG IN
						</button>
						<button
							className="text-button"
							onClick={(e) => setPasswordRecover(true)}
						>
							Forgot your password?
						</button>
					</div>
				</>
			)}
		</article>
	);
}
