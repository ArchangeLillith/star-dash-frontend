import { useRoutes } from "react-router-dom";
import HomePage from "../features/home-page/HomePage";
import JoinRun from "../features/join-run/JoinRun";
import RunData from "../features/run-data/RunData";
import Schedule from "../features/schedule/Schedule";
import Login from "../features/login-register/Login";
import Register from "../features/login-register/Register";
import CreateRun from "../features/create-run/CreateRun";
import JoinMarathon from "../features/join-run/marathon/JoinMarathon";
import JoinCarnival from "../features/join-run/cheerful-carnival/JoinCarnival";
import AuthHelp from "../features/help-page/auth-help/AuthHelp";
import PublicHelp from "../features/help-page/public-help/PublicHelp";

const App = () => {
	const routes = useRoutes([
		{ path: "/", element: <HomePage /> },
		{ path: "/help", element: <PublicHelp /> },
		{ path: "/auth-help", element: <AuthHelp /> },
		{ path: "/data", element: <RunData /> },
		{ path: "/schedule", element: <Schedule /> },
		{ path: "/event", element: <Schedule /> },
		{ path: "/login", element: <Login /> },
		{ path: "/register", element: <Register /> },
		{ path: "/marathon", element: <JoinMarathon /> },
		{ path: "/carnival", element: <JoinCarnival /> },
		{ path: "/create-run", element: <CreateRun /> },
	]);

	return routes;
};

export default App;
