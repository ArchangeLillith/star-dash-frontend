import { Link } from "react-router-dom";
import TransitionWrapper from "../../components/TransitionWrapper";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../../context/settings/SettingsProvider";
import { backgroundMap } from "../../context/settings/utils";

const Register = () => {
	const { setSettingsState } = useContext(SettingsContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSettingsState((prev) => ({
				...prev,
				currentPageBackground: backgroundMap["register"],
			}));
		}, 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<TransitionWrapper newBackgroundImage={backgroundMap.register}>
			<div className="page register">
				<div className="desktop-title">Manager Register</div>
				<form className="form">
					<div className="form-title">Manager Register</div>
					<div className="manager-container">
						<label htmlFor="username">Username</label>
						<input id="username" className="input"></input>
					</div>
					<div className="manager-container">
						<label htmlFor="password">Password</label>
						<input id="password" className="input"></input>
					</div>
					<div className="manager-container">
						<label htmlFor="password-confirm">Confirm Password</label>
						<input id="password-confirm" className="input"></input>
					</div>
					<div className="notice-text">
						Already have an account?{" "}
						<Link className="link" to="/login">
							Login!
						</Link>
					</div>
					<button className="submit-btn">Register</button>
				</form>
			</div>
		</TransitionWrapper>
	);
};

export default Register;
