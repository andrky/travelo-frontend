import Button from '../../components/Button/layout';
import Input from '../Input/input';

import Link from 'next/link';
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
					<Input label="E-mail" type="email" name="email" placeholder="Masukkan alamat e-mail" className="mb-6" />

					<Input label="Kata sandi" type="password" name="password" placeholder="Masukkan kata sandi" />

					<Link href="#" className="text-heading-5 text-blue-100 font-semibold mt-8 mb-4 hover:underline">
						Lupa kata sandi ?
					</Link>

					<Button type="submit" fullWidth>
						Masuk
					</Button>
				</form>

				<p className="text-heading-5 text-gray-70 my-8">Atau masuk dengan</p>
				<Button className="mb-4" variant="google">
					Masuk dengan Google
				</Button>
				<Button variant="facebook">Masuk dengan Facebook</Button>
			</div>
		</section>
	);
};

export default Login;
