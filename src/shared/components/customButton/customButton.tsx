import React, { FC } from 'react';
import Link from 'next/link';

interface IButtonProps {
	buttonTitle: string;
	href: string;
	className?: string;
}
const CustomButton: FC<IButtonProps> = ({ buttonTitle, href, className }) => {
	return (
		<div className='btn-wrapper flex '>
			<Link href={href} className={`${className} button flex justify-content--center align-items--center`}>
				{buttonTitle}
			</Link>
		</div>
	);
};

export default CustomButton;
