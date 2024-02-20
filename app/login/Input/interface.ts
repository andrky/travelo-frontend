import type { InputHTMLAttributes } from 'react';
import type { UseFormRegister, FieldError, ValidationRule } from 'react-hook-form';

export type InputProps = {
	name: InputHTMLAttributes<HTMLInputElement>['name'] | string;
	type: InputHTMLAttributes<HTMLInputElement>['type'];
	label: string;
	placeholder: string;
	className?: string;
  register: UseFormRegister<any>
  errors?: FieldError
  required?: string | ValidationRule<boolean>
  pattern?: ValidationRule<RegExp>
};
