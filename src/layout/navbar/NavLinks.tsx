import NavItem from "./NavItem";

interface NavLinksParams {
	selectionMode: boolean;
	confirmEventChange: () => void;
	user: {
		loggedIn: boolean;
		registeredEvents: { event: string; leadManager: string }[];
		event: string;
		leadManager: boolean;
		siteAdmin: boolean;
	};
}

const defaultLinks = [
	{ href: "#/filler-join", text: "Fill for a Run!" },
	{ href: "#/login", text: "Log In" },
	{ href: "#/create-account", text: "Create Account" },
	{ href: "#/hrlp", text: "Help TT_TT" },
];

const NavLinks: React.FC<NavLinksParams> = ({
	// selectionMode,
	// confirmEventChange,
	user,
}) => {
	const navLinks = [];
	if (user.registeredEvents.length === 0) {
		navLinks.push(
			...defaultLinks,
			{ href: "#/CreateRun", text: "Create new run!" },
			{ href: "#/JoinRun", text: "Join a Run!" }
		);
	} else if (user.registeredEvents.length > 1 && !user.event) {
		//Refactor why does this go to schedule....
		navLinks.push(
			...defaultLinks,
			{ href: "#/Schedule", text: "Choose an Event!" },
			{ href: "#/JoinRun", text: "Join a Run!" }
		);
	} else {
		if (user.siteAdmin) {
			navLinks.push({
				...defaultLinks,
				href: "#/SiteAdmin",
				text: "Site Settings",
				className: "admin-nav",
			});
		}
	}
	return (
		<>
			{navLinks.map((link) => (
				<NavItem key={link.href} {...link} />
			))}
			{/* Additional logic for event details */}
		</>
	);
};

export default NavLinks;
