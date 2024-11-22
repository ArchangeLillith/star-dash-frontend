import { useState } from "react";
import JoinCarnival from "./cheerful-carnival/JoinCarnival";
import JoinMarathon from "./marathon/JoinMarathon";

const JoinRun: React.FC = () => {
	const [type, setType] = useState("Carnival");
	function toggleType() {
		if (type === "Marathon") {
			setType("Carnival");
		} else {
			setType("Marathon");
		}
	}
	return (
		<>
			<div className="join-run-page">
				<button onClick={toggleType}>
					{type === "Marathon" ? "Cheerful Carnival" : "Marathon"}
				</button>

				{type === "Marathon" ? <JoinMarathon /> : <JoinCarnival />}
				<h2 className="desktop-title">Filler Registration</h2>
			</div>
		</>
	);
};

export default JoinRun;
