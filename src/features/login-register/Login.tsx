import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<h1>Login component rendered</h1>
			<p>
				Dont have an account? Register <Link to="/register">here!</Link>
			</p>
		</div>
	);
};

export default Login;
