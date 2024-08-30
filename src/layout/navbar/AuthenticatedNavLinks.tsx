import NavItem from "./NavItem";

interface AuthenticatedNavLinksParams {
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

const defaultLinks = [{ href: "#/help", text: "Help" }];

const AuthenticatedNavLinks: React.FC<AuthenticatedNavLinksParams> = ({
	// selectionMode,
	// confirmEventChange,
	user,
}) => {
	console.log(`NavLinks hit`);
	const navLinks = [];
	if (user.registeredEvents.length === 0) {
		navLinks.push(
			...defaultLinks,
			{ href: "#/join-run", text: "Join a Run" },
			{ href: "#/create-run", text: "Create new run" }
		); 
	} else if (user.registeredEvents.length > 1 && user.event) {
		navLinks.push(
			{ href: "/schedule", text: "Schedule" },
			{ href: "/data", text: "Fillers and Managers" },
			{ href: "/join-run", text: "Join a Run" },
			{ href: "/schedule", text: "Choose an Event" },
			...defaultLinks
		);
	}
	if (user.siteAdmin) {
		navLinks.push({
			href: "#/SiteAdmin",
			text: "Site Settings",
			className: "admin-nav",
			...defaultLinks,
		});
	}

	return (
		<>
			{navLinks.map((link) => (
				<NavItem key={link.href} {...link} />
			))}
		</>
	);
};

export default AuthenticatedNavLinks;
