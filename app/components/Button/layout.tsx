import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import styles from '../Button/Button.module.css';

const Button = ({
	children,
	className = '',
	fullWidth,
	outlined,
	type,
	variant = 'primary',
}: {
	children: React.ReactNode | string;
	className?: string;
	fullWidth?: boolean;
	outlined?: boolean;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	variant?: 'primary' | 'google' | 'facebook';
}) => {
	return (
		<button className={clsx(styles.button, className, fullWidth && styles.fullWidth, outlined && styles.outlined, variant === 'primary' && 'bg-blue-100', variant === 'google' && 'bg-red-100', variant === 'facebook' && 'bg-facebook')}>
			{variant === 'facebook' && <FaFacebook className="text-white h-6 w-6 mr-2" />}

			{variant === 'google' && <FaGoogle className="text-white h-6 w-6 mr-2" />}

			{children}
		</button>
	);
};

export default Button;
