import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/sass/index.scss";
import AppRoutes from "./AppRoutes";
import NavBar from "../layout/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/auth/AuthProvider";
import SettingsProvider from "../context/settings/SettingsProvider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<SettingsProvider>
					<NavBar />
					<AppRoutes />
				</SettingsProvider>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>
);
