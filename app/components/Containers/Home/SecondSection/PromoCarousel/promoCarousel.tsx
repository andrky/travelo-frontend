'use client';
import PromoCard from './PromoCard/promoCard';

import Carousel from 'react-multi-carousel';
import Image from 'next/image';

import LeftArrow from '../../../../../../public/assets/icons/left-arrow-rounded.svg';
import RightArrow from '../../../../../../public/assets/icons/right-arrow-rounded.svg';

const PromoCarousel = () => {
	return (
		<>
			<h3 className="text-heading-3 text-white font-mont font-bold pt-14 mb-4">Promo Liburan</h3>

			<Carousel
				className="py-5"
				containerClass="carousel-container"
				arrows
				centerMode={false}
				draggable
				swipeable
				customRightArrow={
					<button type="button" aria-label="Go to next slide" className="absolute z-50 right-0 opacity-50 hover:opacity-100">
						<Image src={RightArrow} alt="Left Arrow" height="75" width="75" />
					</button>
				}
				customLeftArrow={
					<button type="button" aria-label="Go to previous slide" className="absolute z-50 left-0 opacity-50 hover:opacity-100">
						<Image src={LeftArrow} alt="Left Arrow" height="75" width="75" />
					</button>
				}
				partialVisbile
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 720,
						},
						items: 2,
						paritialVisibilityGutter: 100,
					},
				}}
			>
				<PromoCard />
				<PromoCard />
				<PromoCard />
				<PromoCard />
				<PromoCard />
			</Carousel>
		</>
	);
};

export default PromoCarousel;
