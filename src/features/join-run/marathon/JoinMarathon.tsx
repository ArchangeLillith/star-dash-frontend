import { Link } from "react-router-dom";
import TransitionWrapper from "../../../components/TransitionWrapper";

const JoinMarathon: React.FC = () => {
	return (
		<TransitionWrapper
			newBackgroundImage="/card-backgrounds/card_after_training\ \(3\).webp"
			oldBackgroundImage="/card-backgrounds/card_after_training\ \(14\).webp"
		>
			<div className="join-run-page">
				<div>
					<Link to="/carnival">Carnival!</Link>
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
						{["Fill Team"].map((team, index) => (
							<div
								role="group"
								aria-labelledby="fill-team-label"
								className="team-container"
								key={index + team[index]}
							>
								<div className="banner">{team}</div>
								<div className="input-container">
									<input className="input" placeholder="ISV1" type="number" />
									<input className="input" placeholder="ISV2" type="number" />
									<input className="input" placeholder="BP" type="number" />
								</div>
							</div>
						))}
					</div>
					<button className="submit-btn">Submit!</button>
				</form>
				<h2 className="desktop-title">Filler Registration</h2>
			</div>
		</TransitionWrapper>
	);
};

export default JoinMarathon;
