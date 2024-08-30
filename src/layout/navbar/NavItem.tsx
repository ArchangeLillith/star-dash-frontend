interface NavItemProps {
	href: string;
	text: string;
	className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, className }) => {
	console.log(`Nav item hit`);
	return (
		//*MAKE THESE LINKS NOT A'S AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
		<li className={`nav-item ${className}`}>
			<a className={`nav-link ${className}`} href={href}>
				{text}
			</a>
		</li>
	);
};

export default NavItem;
