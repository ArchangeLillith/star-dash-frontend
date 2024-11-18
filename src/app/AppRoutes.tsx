import { useRoutes } from "react-router-dom";
import HomePage from "../features/home-page/HomePage";
import JoinRun from "../features/join-run/JoinRun";
import HelpPage from "../features/help-page/HelpPage";
import RunData from "../features/run-data/RunData";
import Schedule from "../features/schedule/Schedule";
import Login from "../features/login-register/Login";
import Register from "../features/login-register/Register";

const App = () => {
	const routes = useRoutes([
		{ path: "/", element: <HomePage /> },
		{ path: "/join-run", element: <JoinRun /> },
		{ path: "/help", element: <HelpPage /> },
		{ path: "/data", element: <RunData /> },
		{ path: "/schedule", element: <Schedule /> },
		{ path: "/event", element: <Schedule /> },
		{ path: "/login", element: <Login /> },
		{ path: "/register", element: <Register /> },
		{ path: "/filler-join", element: <JoinRun /> },
	]);

	return routes;
};

export default App;
