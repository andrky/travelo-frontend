import Image from 'next/image';

import Container from '../Containers/layout';
import Search from './Search/search';
import Nav from './Nav/nav';
import Button from '../Button/layout';

import traveloLogo from '../../../public/assets/travelo-logo-header.png';

const Header = () => {
	return (
		<header className="h-[85px] bg-white shadow-lg p-4">
			<Container>
				<div className="flex justify-between items-center">
					<div className="flex">
						<Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="48" width="182" />
						<Search />
					</div>
					<div className="flex gap-5">
						<Nav />
						<Button className="w-[190px]">Masuk</Button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
