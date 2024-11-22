import { useContext, useEffect } from "react";
import TransitionWrapper from "../../../components/TransitionWrapper";
import { SettingsContext } from "../../../context/settings/SettingsProvider";
import { backgroundMap } from "../../../context/settings/utils";

const AuthHelp = () => {
	const { setSettingsState } = useContext(SettingsContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSettingsState((prev) => ({
				...prev,
				currentPageBackground: backgroundMap["authHelp"],
			}));
		}, 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<TransitionWrapper newBackgroundImage={backgroundMap.authHelp}>
			<h1>AuthHelp component rendered</h1>
		</TransitionWrapper>
	);
};

export default AuthHelp;
