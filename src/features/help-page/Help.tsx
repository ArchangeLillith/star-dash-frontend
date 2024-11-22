import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthProvider";
import PublicHelp from "./public-help/PublicHelp";
import AuthHelp from "./auth-help/AuthHelp";

const HelpPage = () => {
	const { authState } = useContext(AuthContext);
	if (authState.authenticated) {
		return <AuthHelp />;
	}
	return <PublicHelp />;
};

export default HelpPage;
