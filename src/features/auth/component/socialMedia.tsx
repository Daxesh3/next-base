import React, { FC } from 'react';
import Link from 'next/link';
import { SOCIAL_ICONS } from '../constants/loginConstant';

interface ISocialProps {
	suggestionTitle: string;
	signUpTitle: string;
	signUpTitleHref: string;
	isError?: boolean;
}

const SocialMedia: FC<ISocialProps> = ({ suggestionTitle, signUpTitle, signUpTitleHref, isError }) => {
	return (
		<div className='mt--30 social-media-wrapper'>
			<div className='line-wrapper flex justify-content--between align-items--center'>
				<p className='before-line' />
				<p className='social-media-title font-size--xxs line-height--sm font--medium '>or sign in with</p>
				<p className='before-line after-line' />
			</div>
			<div className='social-icon-wrapper flex justify-content--center mt--25'>
				{SOCIAL_ICONS.map(({ SvgIcon }, index) => {
					return (
						<div className='icon-bg border-radius--half justify-align--center cursor--pointer' key={index}>
							<SvgIcon />
						</div>
					);
				})}
			</div>
			<div className='link-wrapper flex justify-content--center mt--25'>
				<Link
					href={signUpTitleHref}
					className='account-info font-size--sm font--medium text-decoration--underline'
				>
					{suggestionTitle}
				</Link>
				{/* <Link href={signUpTitleHref} className='signUp-title font-size--sm font--semi-bold ml--10'> */}
				<p className='signUp-title font-size--sm font--semi-bold ml--10'>{signUpTitle}</p>
				{/* </Link> */}
			</div>
		</div>
	);
};

export default SocialMedia;
