import Header from './Header/header';
import Footer from './Footer/footer';

interface Props {
	children: React.ReactNode;
	noFooter?: boolean;
}

const HomeLayout = ({ children, noFooter = false }: Props) => {
	return (
		<>
			<Header />
			{children}
			{noFooter ? null : <Footer />}
		</>
	);
};

export default HomeLayout;
