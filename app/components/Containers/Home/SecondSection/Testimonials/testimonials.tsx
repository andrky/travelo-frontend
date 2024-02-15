import TestimonialCard from './TestimonialCard/testimonialCard';

const Testimonials = () => {
	return (
		<>
			<h3 className="text-heading-3 font-mont font-bold pt-16 mb-1">Testimonial Pelanggan</h3>

			<p className="text-heading-4 mb-4">Pendapat pelanggan tentang kami</p>

			<div className='flex justify-between'>
				{Array.from({ length: 5 }).map((_, index) => {
					return <TestimonialCard key={index} />;
				})}
			</div>
		</>
	);
};

export default Testimonials;
