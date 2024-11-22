import { Link } from "react-router-dom";
import TransitionWrapper from "../../components/TransitionWrapper";

const Login = () => {
	return (
		<TransitionWrapper
			oldBackgroundImage="/public/card-backgrounds/card_after_training\ \(14\).webp"
			newBackgroundImage="/public/card-backgrounds/card_after_training\ \(13\).webp"
		>
			<div className="page login">
				<div className="desktop-title">Login!</div>
				<form className="form">
					<div className="form-title">Login</div>
					<div className="manager-container">
						<label htmlFor="username">Username</label>
						<input id="username" className="input"></input>
					</div>
					<div className="manager-container">
						<label htmlFor="password">Password</label>
						<input id="password" className="input"></input>
					</div>
					<div className="notice-text">
						Don't have a manager account?{" "}
						<Link className="link" to="/register">
							Make one!
						</Link>
					</div>
					<button className="submit-btn">Login~</button>
				</form>
			</div>
		</TransitionWrapper>
	);
};

export default Login;
