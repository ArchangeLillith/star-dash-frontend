interface SmallTileProps {
	title: string;
	body: string;
	href: string;
	className: string;
}

const SmallTile = (props: SmallTileProps) => {
	return (
		<section className={props.className + " welcome-card-section"}>
			<a href={props.href}>
				<div className="global-h1">{props.title}</div>
				<div className="global-h4">{props.body}</div>
			</a>
		</section>
	);
};

export default SmallTile;
