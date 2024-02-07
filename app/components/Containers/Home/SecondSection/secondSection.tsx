import styles from '../SecondSection/SecondSection.module.css';
import 'react-multi-carousel/lib/styles.css';

import Container from '../../layout';
import PromoCarousel from './PromoCarousel/promoCarousel';
import Packages from './Packages/Packages';

const SecondSection = () => {
	return (
		<section className={styles.section}>
			<Container>
				<PromoCarousel />
				<Packages />
			</Container>
		</section>
	);
};

export default SecondSection;
