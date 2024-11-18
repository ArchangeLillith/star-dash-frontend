import SmallTile from "../components/SmallTile";
import { tiles } from "./utils";

const SiteHome: React.FC = () => {

	return (
		<div className="card-wrapper">
			{tiles.map((tile) => (
				<SmallTile
					key={tile.title}
					title={tile.title}
					body={tile.body}
					href={tile.href}
					className={tile.className}
				/>
			))}
		</div>
	);
};

export default SiteHome;
