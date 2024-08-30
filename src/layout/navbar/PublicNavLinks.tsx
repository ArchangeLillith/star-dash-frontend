import NavItem from "./NavItem";

const publicLinks = [
	{ href: "/filler-join", text: "Fill for a Run!" },
	{ href: "/login", text: "Log In" },
	{ href: "/create-account", text: "Create Account" },
	{ href: "/help", text: "Help TT_TT" },
];

const PublicNavLinks = () => {
	return (
		<>
			{publicLinks.map((link) => (
				<NavItem key={link.href} {...link} />
			))}
		</>
	);
};

export default PublicNavLinks;
