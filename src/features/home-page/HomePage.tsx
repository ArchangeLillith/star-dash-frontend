import { useContext } from "react";
import ManagerHome from "./manager-home/ManagerHome";
import SiteHome from "./site-home/SiteHome";
import { AuthContext } from "../../context/auth/AuthProvider";

const HomePage = () => {
	const { authState } = useContext(AuthContext);
	if (authState.authenticated) {
		return <ManagerHome />;
	}
	return <SiteHome />;
};

export default HomePage;
