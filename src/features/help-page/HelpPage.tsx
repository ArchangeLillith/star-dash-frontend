import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthProvider";
import AuthHelp from "./auth-help/AuthHelp";
import PublicHelp from "./public-help/PublicHelp";

const HelpPage = () => {
	const { authState } = useContext(AuthContext);
	return (
		<>{authState.authenticated === true ? <AuthHelp /> : <PublicHelp />} </>
	);
};

export default HelpPage;
