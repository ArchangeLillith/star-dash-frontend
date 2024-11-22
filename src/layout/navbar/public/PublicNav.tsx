import NavItem from "../components/NavItem";
import { publicLinks } from "./utils";


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
