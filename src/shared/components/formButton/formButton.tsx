import React, { FC } from 'react';

interface IButtonProps {
	buttonTitle: string;
	className?: string;
	loading?: boolean;
	btnClassName?: string;
}
const FormButton: FC<IButtonProps> = ({ buttonTitle, className, loading, btnClassName }) => {
	return (
		<div className={`${btnClassName} btn-wrapper flex`}>
			<button
				className={`${className} button flex justify-content--center align-items--center ${
					loading ? 'disabled' : ''
				}`}
				disabled={loading}
			>
				{buttonTitle}
			</button>
		</div>
	);
};

export default FormButton;
