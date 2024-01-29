import Link from 'next/link';

const NavItem = ({ label, href = '/' }: { label: string; href: string }) => {
	return (
		<>
			<Link href={href} className="text-heading-4 text-gray-70 font-mont font-bold">
				{label}
			</Link>
		</>
	);
};

export default NavItem;
