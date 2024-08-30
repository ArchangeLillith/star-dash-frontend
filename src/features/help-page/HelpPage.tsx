import AuthHelp from "./auth-help/AuthHelp";
import PublicHelp from "./public-help/PublicHelp";

const HelpPage = () => {
	const loggedIn: string = "true";
	return <>{loggedIn === "true" ? <AuthHelp /> : <PublicHelp />} </>;
};

export default HelpPage;
