import cn from 'classnames';

import styles from '../Button/Button.module.css';

const Button = ({ children, className = '', fullWidth, outlined }: { children: React.ReactNode; className?: string; fullWidth?: boolean; outlined?: boolean }) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.fullWidth]: fullWidth,
				[styles.outlined]: outlined,
			})}
		>
			{children}
		</button>
	);
};

export default Button;
