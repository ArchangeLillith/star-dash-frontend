import { useRoutes } from "react-router-dom";
import HomePage from "./features/home-page/HomePage";
import JoinRun from "./features/join-run/JoinRun";
import HelpPage from "./features/help-page/HelpPage";
// import Schedule from "./features/schedule/Schedule";

const App = () => {
	const routes = useRoutes([
		{ path: "/", element: <HomePage /> },
		{ path: "/join-run", element: <JoinRun /> },
		{ path: "/help", element: <HelpPage /> },
		// { path: "/schedule", element: <Schedule /> },
	]);

	return routes;
};

export default App;
