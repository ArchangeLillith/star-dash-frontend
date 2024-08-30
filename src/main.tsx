import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/sass/index.scss";
import Navbar from "./layout/navbar/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Navbar />
		<App />
	</StrictMode>
);
