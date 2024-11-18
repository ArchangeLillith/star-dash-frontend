import { useState } from "react";
import ManagerData from "./manager-data/ManagerData";
import FillerData from "./filler-data/FillerData";

const RunData = () => {
	const [type, setType] = useState("Manager");
	function toggleType() {
		if (type === "Manager") {
			setType("Fillers");
		} else {
			setType("Manager");
		}
	}
	return (
		<>
			<div>
				<button onClick={toggleType}>
					{type === "Manager" ? "Fillers" : "Manager"}
				</button>
			</div>
			{type === "Manager" ? <ManagerData /> : <FillerData />}
		</>
	);
};

export default RunData;
