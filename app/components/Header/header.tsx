import Image from 'next/image';

import Container from '../Container/container';
import Search from './Search/search';

import traveloLogo from '../../../public/assets/travelo-logo-header.png';

const Header = () => {
	return (
		<header className="h-[85px] bg-white shadow-lg p-4 w-screen">
			<Container>
				<div className="flex justify-between items-center">
					<div className="flex">
						<Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="48" width="182" />
						<Search />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
