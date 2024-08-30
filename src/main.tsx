import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/sass/index.scss";
import AppRoutes from "./AppRoutes";
import NavBar from "./layout/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />
			<AppRoutes />
		</BrowserRouter>
	</StrictMode>
);
