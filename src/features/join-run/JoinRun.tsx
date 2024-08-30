import { useState } from "react";
import JoinCarnival from "./cheerful-carnival/JoinCarnival";
import JoinMarathon from "./marathon/JoinMarathon";

const JoinRun: React.FC = () => {
	const [type, setType] = useState("Marathon");
	function toggleType() {
		if (type === "Marathon") {
			setType("Carnival");
		} else {
			setType("Marathon");
		}
	}
	return (
		<>
			<div>
				<button onClick={toggleType}>
					{type === "Marathon" ? "Cheerful Carnival" : "Marathon"}
				</button>
			</div>
			{type === "Marathon" ? <JoinMarathon /> : <JoinCarnival />}
		</>
	);
};

export default JoinRun;
