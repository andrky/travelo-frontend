import Image from 'next/image';

import Button from '@/app/components/Button/layout';


const PackageCard = () => {
	return (
		<article className="flex flex-col bg-white rounded-xl overflow-hidden w-[393px] shadow-md">
			<figure className="relative w-full h-[268px]">
				<Image src="/assets/home/cliff.png" alt="Cliff Image" layout="fill" objectFit="cover" objectPosition="center" />
			</figure>

			<div className="flex flex-col p-4">
				<div className="flex items-center mb-4">
					<Image src="/assets/icons/yellow-star.svg" alt="Star Rating" width="23" height="20" />

					<p className="text-heading-5 text-gray-70 ml-1">4.6 (1.233 Review)</p>
				</div>

				<p className="text-heading-3 text-gray-100 font-mont font-bold">Colloseum, Roma</p>

				<p className="text-heading-4 text-gray-70 mb-4">Italia</p>

				<p className="text-heading-3 text-gray-100 font-bold mb-4">Rp. 25.000.000</p>

				<p className="text-heading-5 font-bold mb-4">Untuk 1 orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi travel</p>

				<div className="flex justify-between gap-3">
					<Button fullWidth outlined>
						Lihat Detail
					</Button>
					<Button fullWidth>Pesan</Button>
				</div>
			</div>
		</article>
	);
};

export default PackageCard;
