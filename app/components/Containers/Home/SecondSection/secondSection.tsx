'use client';
import styles from '../SecondSection/SecondSection.module.css';
import Carousel from 'react-multi-carousel';
import Container from '../../layout';
import PromoCarousel from './PromoCarousel/promoCarousel';
import 'react-multi-carousel/lib/styles.css';

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
