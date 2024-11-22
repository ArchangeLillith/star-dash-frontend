//REFACTOR this is going to be useful like literally everywhere, we should move this at some point
export const handleStateChange =
	<T>(key: keyof T, setState: React.Dispatch<React.SetStateAction<T>>) =>
	(value: unknown) => {
		setState((prev) => ({
			...prev,
			[key]: value,
		}));
	};

export const inputConfigs = [
	{ id: "isv1", stateKey: "runnerIsv1", placeholder: "ISV1" },
	{ id: "isv2", stateKey: "runnerIsv2", placeholder: "ISV2" },
	{ id: "bp", stateKey: "runnerBp", placeholder: "BP" },
];
