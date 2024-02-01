import styles from '../TopSection/TopSection.module.css';

import Container from '../../layout';
import Button from '@/app/components/Button/layout';
import InfoItem from './InfoItem/infoItem';

const TopSection = () => {
	return (
		<section className={styles.section}>
			<Container>
				<div className="flex flex-col pt-[112px] pb-[58px]">
					<div className="flex flex-col mb-[174px]">
						<h1 className="text-heading-2 font-bold font-mont text-gray-100 w-[500px] mb-8">Jelajahi Dunia Yang Indah Dengan Satu Sentuhan</h1>

						<p className="text-heading-3 text-gray-70 w-[526px] mb-7">Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di Travelo kamu akan mendapatkan pelayanan terbaik untuk wisata liburanmu kemana saja dan kapan saja</p>

						<Button>Lihat Paket</Button>
					</div>

					<div className="flex gap-40 mx-auto">
						<InfoItem label="+30" sublabel="Negara" />
						<InfoItem label="+1500" sublabel="Penginapan" />
						<InfoItem label="+100" sublabel="Tempat Wisata" />
						<InfoItem label="+500.000" sublabel="Pelanggan" />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default TopSection;
