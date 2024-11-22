import { Link } from "react-router-dom";

interface NavItemProps {
	href: string;
	text: string;
	className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, className }) => {
	return (
		<li className={`nav-item ${className}`}>
			<Link className={`nav-link ${className}`} to={href}>
				{text}
			</Link>
		</li>
	);
};

export default NavItem;
