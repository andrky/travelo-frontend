import HomeContainer from './components/Containers/Home/homeContainer';
import HomeLayout from './components/Layout/homeLayout';

const Home = () => {
	return (
		<>
			<HomeLayout>
				<HomeContainer />
			</HomeLayout>
		</>
	);
};

export default Home;
