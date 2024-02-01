import Container from '../Containers/layout';
import FooterInfo from './FooterInfo/footerInfo';

import Image from 'next/image';
import styles from '../Footer/Footer.module.css';

import traveloLogo from '../../../public/assets/travelo-logo-footer.png';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container size="lg">
				<div className="flex bg-white p-16">
					<figure>
						<Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="98" width="136" />
					</figure>
					<div className="flex flex-1 justify-between ml-[150px]">
						<FooterInfo
							title="Info"
							content={[
								{
									label: 'Tentang Kami',
									href: '/',
								},
								{
									label: 'Testimonial',
									href: '/',
								},
								{
									label: 'Kontak',
									href: '/',
								},
							]}
						/>
						<FooterInfo
							title="Perusahaan"
							content={[
								{
									label: 'Syarat & Ketentuan',
									href: '/',
								},
								{
									label: 'Kebijakan Privasi',
									href: '/',
								},
								{
									label: 'Blog',
									href: '/',
								},
								{
									label: 'Bantuan Pelayanan',
									href: '/',
								},
							]}
						/>
						<FooterInfo title="Kontak" content={['Jl. Kelinci 3 RT 6 RW 15', 'Kaliabang Tengah, Jawa Barat', 'Indonesia', '(021)122222', 'kiw@gmail.com']} />
					</div>
				</div>
			</Container>
			<div className="bg-blue-100 p-3">
				<p className="text-heading-5 text-white text-bold text-center">Copyright 2024 Ananda Rizky. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
