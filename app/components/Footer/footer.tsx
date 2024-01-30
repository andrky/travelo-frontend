
import Container from '../Container/layout';

import Image from 'next/image';
import styles from '../Footer/Footer.module.css';

import traveloLogo from '../../../public/assets/travelo-logo-footer.png';

const Footer = () => {
	return <footer className={styles.footer}>
    <Container size='lg'>
      <div className='flex bg-white p-16'>
        <figure>
          <Image 
            src={traveloLogo}
            alt='Travelo Logo'
            placeholder='blur'
            height='98'
            width='136'
          />
        </figure>
      </div>
    </Container>
  </footer>;
};

export default Footer;
