import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/sass/index.scss";
import NavBar from "./layout/navbar/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NavBar />
		<App />
	</StrictMode>
);
