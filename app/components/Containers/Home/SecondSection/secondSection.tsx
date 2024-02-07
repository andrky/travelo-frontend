import styles from '../SecondSection/SecondSection.module.css';
import 'react-multi-carousel/lib/styles.css';

import Container from '../../layout';
import PromoCarousel from './PromoCarousel/promoCarousel';

const SecondSection = () => {
	return (
		<section className={styles.section}>
			<Container>
				<PromoCarousel />
			</Container>
		</section>
	);
};

export default SecondSection;
