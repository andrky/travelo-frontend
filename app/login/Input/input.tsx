'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import type { InputProps } from './interface';
import styles from './input.module.css';

const Input = ({ name, type, label, placeholder, className, register, errors, required, pattern }: InputProps) => {
	// Use state untuk merubah kondisi hide password
	const [hidePassword, setHidePassword] = useState(false);

	// Use state untuk merubah type
	const [inputType, setInputType] = useState(type);

	const isInputError = errors && errors[name];

	const inputErrorHint = `${name}-input-error-hint`;

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

			<input
				{...register(name, {
					required,
					pattern,
				})}
				formNoValidate
				type={inputType}
				id={name}
				placeholder={placeholder}
				className={styles.input}
				aria-describedby={inputErrorHint}
			/>

			{type === 'password' ? (
				<button type="button" className={clsx(styles.eye, isInputError && styles.eyeError)} onClick={handleEyeClick}>
					{hidePassword ? <FaEyeSlash className="h-6 w-6 text-gray-100" /> : <FaEye className="h-6 w-6 text-gray-100" />}
				</button>
			) : null}

			{isInputError ? <span className="text-xs text-red-100 mt-1 ml-3">{errors[name].message}</span> : null}
		</label>
	);
};

export default Input;
