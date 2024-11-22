import { Link } from "react-router-dom";
import TransitionWrapper from "../../../components/TransitionWrapper";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../../../context/settings/SettingsProvider";
import { backgroundMap } from "../../../context/settings/utils";

const JoinCarnival: React.FC = () => {
	const { setSettingsState } = useContext(SettingsContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSettingsState((prev) => ({
				...prev,
				currentPageBackground: backgroundMap["carnival"],
			}));
		}, 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<TransitionWrapper newBackgroundImage={backgroundMap.carnival}>
			<div className="join-run-page-carnival">
				<div>
					<Link to="/marathon">Marathon!</Link>
				</div>

				<form className="filler-registration-form">
					<div className="form-title">Filler Registration</div>
					<div className="top-content">
						<div className="manager-container">
							<label className="banner" htmlFor="manager-input">
								Manager Name
							</label>
							<input
								className="input"
								type="text"
								placeholder="Your manager..."
								id="manager-input"
							></input>
						</div>
						<div className="manager-container">
							{/* //Refactor add a tooltip here as to why we need this */}
							<label className="banner" htmlFor="discord-input">
								Discord Name
							</label>
							<input
								className="input"
								placeholder="Your Discord..."
								type="text"
								id="discord-input"
							></input>
						</div>
					</div>

					<div className="team-content">
						{["Fill Team", "Heal Team", "SB1 Team", "SB2 Team"].map(
							(team, index) => (
								<div
									role="group"
									aria-labelledby="fill-team-label"
									className="team-container"
									key={index + team[index]}
								>
									<div className="banner-background">
										<div className="banner">{team}</div>
									</div>
									<div className="input-container">
										<input className="input" placeholder="ISV1" type="number" />
										<input className="input" placeholder="ISV2" type="number" />
										<input className="input" placeholder="BP" type="number" />
									</div>
								</div>
							)
						)}
					</div>
					<button className="submit-btn">Submit!</button>
				</form>
				<h2 className="desktop-title">Filler Registration</h2>
			</div>
		</TransitionWrapper>
	);
};

export default JoinCarnival;
