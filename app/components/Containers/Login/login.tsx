import Link from 'next/link';
import Button from '../../Button/layout';
import styles from './login.module.css';

const Login = () => {
	return (
		<section className={styles.section}>
			<div className={styles.formWrapper}>
				<p className="text-heading-3 font-mont font-extrabold">Masuk</p>

				<div className="flex mt-3">
					<p className="text-heading-5 text-gray-50 font-semibold">Belum punya akun ?</p>
					<Link href="#" className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline">
						Daftar di sini
					</Link>
				</div>

				<form className="flex flex-col mt-8">
					<input type="email" />
					<input type="password" />

					<Button>Masuk</Button>
				</form>
			</div>
		</section>
	);
};

export default Login;
