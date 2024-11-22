import { Link } from "react-router-dom";
import { tiles } from "./utils";
import TransitionWrapper from "../../../components/TransitionWrapper";

const SiteHome: React.FC = () => {
	return (
		<TransitionWrapper
			newBackgroundImage="/card-backgrounds/flipped-home.PNG"
			oldBackgroundImage="/card-backgrounds/card_after_training\ \(14\).webp"
		>
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
