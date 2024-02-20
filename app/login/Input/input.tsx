'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import type { InputProps } from './interface';
import styles from './input.module.css';

const Input = ({ name, type, label, placeholder, className }: InputProps) => {
	// Use state untuk merubah kondisi hide password
	const [hidePassword, setHidePassword] = useState(false);

	// Use state untuk merubah type
	const [inputType, setInputType] = useState(type);

	const handleEyeClick = () => {
		// Merubah kondisi dari false menjadi true
		setHidePassword((prevState) => !prevState);

		// Jika type === password dan hidePassword bernilai true
		if (type === 'password' && !hidePassword) {
			// Ubah type menjadi text
			setInputType('text');
		} else {
			// Jika tidak memenuhi type menjadi password
			setInputType('password');
		}
	};

	return (
		<label htmlFor={name} className={clsx(styles.label, className)}>
			<div className="mb-3">{label}</div>

			<input type={inputType} name={name} id={name} placeholder={placeholder} className={styles.input} />

			{type === 'password' ? (
				<button type="button" className={styles.eye} onClick={handleEyeClick}>
					{hidePassword ? <FaEyeSlash className="h-6 w-6 text-gray-100" /> : <FaEye className="h-6 w-6 text-gray-100" />}
				</button>
			) : null}
		</label>
	);
};

export default Input;
