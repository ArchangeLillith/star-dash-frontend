import { useRoutes } from "react-router-dom";
import HomePage from "../features/home-page/HomePage";
import Schedule from "../features/schedule/Schedule";
import Login from "../features/login/Login";
import Register from "../features/register/Register";
import CreateRun from "../features/create-run/CreateRun";
import JoinMarathon from "../features/join-run/marathon/JoinMarathon";
import JoinCarnival from "../features/join-run/cheerful-carnival/JoinCarnival";
import HelpPage from "../features/help-page/Help";

const App = () => {
	const routes = useRoutes([
		{ path: "/", element: <HomePage /> },
		{ path: "/help", element: <HelpPage /> },
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
