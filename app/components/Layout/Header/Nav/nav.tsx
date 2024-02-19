import NavItem from '../NavItem/navItem';

const Nav = () => {
	return (
		// Nav
		<nav className="flex items-center gap-5">
			<NavItem href="/" label="Beranda"></NavItem>
			<NavItem href="/" label="Kontak"></NavItem>
			<NavItem href="/" label="Paket"></NavItem>
			<NavItem href="/" label="Testimoni"></NavItem>
		</nav>
	);
};

export default Nav;
