import React from "react";
import Hamburger from "../../components/Hamburger";
import NavItem from "./NavItem";

interface HamburgerMenuProps {
	isOpen: boolean;
	toggleBurger: () => void;
	links: [{ href: string; text: string; className: string }];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	isOpen,
	toggleBurger,
	links,
}) => {
	return (
		<div className="media-navbar">
			<div className="hambuger" onClick={toggleBurger}>
				<Hamburger isOpen={isOpen} />
			</div>
			{isOpen && (
				<ul>
					{links.map((link) => (
						<NavItem key={link.href} {...link} />
					))}
				</ul>
			)}
		</div>
	);
};

export default HamburgerMenu;
