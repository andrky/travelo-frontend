import Link from 'next/link';

const Nav = () => {
	return (
		// Nav
		<nav className="flex items-center gap-5">
			<Link href="/" className="text-heading-4 text-gray-70 font-robo font-bold">
				Beranda
			</Link>
			<Link href="/" className="text-heading-4 text-gray-70 font-robo font-bold">
				Kontak
			</Link>
			<Link href="/" className="text-heading-4 text-gray-70 font-robo font-bold">
				Paket
			</Link>
			<Link href="/" className="text-heading-4 text-gray-70 font-robo font-bold">
				Testimoni
			</Link>
		</nav>
	);
};

export default Nav;
