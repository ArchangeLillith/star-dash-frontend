import ManagerHome from "./manager-home/ManagerHome";
import SiteHome from "./site-home/SiteHome";

const loggedIn = false;

const HomePage = () => {
	return loggedIn ? <ManagerHome /> : <SiteHome />;
};

export default HomePage;
