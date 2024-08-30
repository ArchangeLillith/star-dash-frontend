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

const defaultLinks = [{ href: "#/help", text: "Help TT_TT" }];

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
			{ href: "#/create-run", text: "Create new run!" },
			{ href: "#/join-run", text: "Join a Run!" }
		);
	} else if (user.registeredEvents.length > 1 && !user.event) {
		//Refactor why does choose event go to schedule.... 
		navLinks.push(
			{ href: "#/schedule", text: "Choose an Event!" },
			{ href: "#/join-run", text: "Join a Run!" },
			...defaultLinks
		);
	} else if (user.registeredEvents.length > 1 && user.event) {
		navLinks.push(
			{ href: "/schedule", text: "Choose an Event!" },
			{ href: "/join-run", text: "Join a Run!" },
			{ href: "/schedule", text: "Schedule!" },
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
