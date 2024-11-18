import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div>
			<h1>Register component rendered</h1>
			<p>
				Wait I have an account! Let me <Link to="/login">login!</Link>
			</p>
		</div>
	);
};

export default Register;
