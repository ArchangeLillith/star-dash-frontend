import { Link } from "react-router-dom";
import { tiles } from "./utils";
import TransitionWrapper from "../../../components/TransitionWrapper";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../../../context/settings/SettingsProvider";
import { backgroundMap } from "../../../context/settings/utils";

const SiteHome: React.FC = () => {
	const { setSettingsState } = useContext(SettingsContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSettingsState((prev) => ({
				...prev,
				currentPageBackground: backgroundMap["home"],
			}));
		}, 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<TransitionWrapper newBackgroundImage={backgroundMap.home}>
			<div className="home-page">
				<div className="title-container">
					<div className="home-title">Welcome to </div>
					<div className="home-title-2">StarDash!</div>
				</div>
				<div className="container">
					<div className="container-title">Welcome</div>
					{tiles.map((tile) => (
						<Link to={tile.href} className="manager-container">
							<div className="card-title">{tile.title}</div>
							<div className="card-text">
								<p>{tile.body}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</TransitionWrapper>
	);
};

export default SiteHome;
