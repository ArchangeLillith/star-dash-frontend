interface SmallTileProps {
	title: string;
	body: string;
	bgimg: string;
	href: string;
	textColor: string;
}

const SmallTile = (props: SmallTileProps) => {
	function classes() {
		const bg = props.bgimg ? props.bgimg : " ";
		const txt = props.textColor ? " text-" + props.textColor : " text-white";
		return "welcome-card-section " + bg + txt;
	}

	return (
		<section className={classes()}>
			<a href={props.href}>
				<div>{props.title}</div>
				<div>
					{props.title && <h5 className="card-title">{props.title}</h5>}
					{props.body}
				</div>
			</a>
		</section>
	);
};

export default SmallTile;
