import Image from 'next/image';

import Rating from './Rating/rating';

const TestimonialCard = () => {
	return (
		<article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
			<div className="flex mb-4">
				<figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
					<Image src="/assets/home/profile.png" alt="Profile Dummy" layout="fill" objectFit="cover" objectPosition="center" />
				</figure>

				<div className="flex flex-col">
					<p className="text-heading-4 text-gray-100 font-mont font-bold mb-1">Bagas Putra</p>
					<p className="text-heading-5 text-gray-50 font-bold">Bandung, Jawa Barat</p>
				</div>
			</div>
			
      <Rating />

      <p className='text-heading-5 text-gray-70 my-4'>Nyari makanan halal gampang banget sudah ada tour guidenya, tour guidenya juga ramah enak diajak ngobrol, dan penginapannya pun nyaman</p>

      <p className='text-heading-5 text-gray-100 font-bold'>Nusa Penida, Bali</p>

      <p className='text-heading-6 text-gray-50'> 17-06-2023</p>

		</article>
	);
};

export default TestimonialCard;
