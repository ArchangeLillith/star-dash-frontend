import SmallTile from "../components/SmallTile";

const SiteHome: React.FC = () => {
	const tiles = [
		{
			title: "Fill for a Run",
			body: "Add your stats to your runners list!",
			href: "/marathon",
			className: "marathon text-black",
		},
		{
			title: "Log In",
			body: "Log in to see the schedule~",
			href: "/login",
			className: "login text-black",
		},
		{
			title: "Register as a Manager",
			body: "Make an account to track your fillers",
			href: "/register",
			className: "register text-black",
		},
		{
			title: "About",
			body: "Learn about the site",
			href: "/about",
			className: "about text-black",
		},
		{
			title: "Helpppp",
			body: "FAQ's and help for using the site",
			href: "/help",
			className: "help text-black",
		},
	];
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
