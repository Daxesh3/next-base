import React, { FC, Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

import CustomModal from 'shared/components/modal/modal';
import { CoinIcon, DotIcon, FlameIcon, NotificationIcon, SearchIcon } from 'shared/icons/icons';
import { HEADER_MENU, NOTIFICATION_DETAILS, WALLET_DETAILS } from 'features/dashboard/constants/dashboardConstant';
import LogoImage from 'assets/images/crptoLogo.png';
import { HIDE_CONNECT_OPT } from 'features/auth/constants/loginConstant';

const Header: FC = () => {
	const router = useRouter();
	const [isNotification, setIsNotification] = useState(false);
	const [searchPopup, setSearchPopup] = useState(false);
	const [isWallet, setIsWallet] = useState(false);

	const activeLink = router.pathname.split('/')[1];

	return (
		<>
			<div
				style={{
					background: 'transparent'
				}}
				className='header-wrapper show--md width--full-viewport position--absolute flex align-items--center justify-content--between flex--wrap z-index--1 '
			>
				<div className='flex'>
					<div
						onClick={() => router.push('/')}
						className='logo-wrapper cursor--pointer flex align-items--center justify-align--center'
					>
						<div className='img-wrapper flex'>
							<Image src={LogoImage} alt='Logo' className={`${'login-logo'} logo`} />
						</div>
					</div>

					<div className='navbar-list flex justify-content--start align-items--center'>
						<div className='header-link-wrapper show--md flex align-items--center'>
							{HEADER_MENU.map(({ title, url, navClass }, index) => (
								<Fragment key={index}>
									<Link
										className={`link text--white font--medium font-size--browser-default line-height--20 ${
											activeLink && activeLink === url.split('/')[1] ? 'link--active' : ''
										}
								 ${navClass}`}
										href={url}
										target={'_self'}
									>
										{title}
									</Link>
								</Fragment>
							))}
						</div>
					</div>
				</div>
				<div
					className='
					 justify-content--end connect-wrapper flex align-items--center'
				>
					<div className='coin-wrapper flex align-items--center justify-content--center mr--25'>
						<CoinIcon className='mr--10 coin-icon' />
						<p className='coin-amount font--regular font-size--sm'>50</p>
					</div>
					<div className='coin-wrapper flex justify-content--center align-items--center mr--25'>
						<FlameIcon className='mr--10 flame-icon' />
						<p className='coin-amount font--regular font-size--sm'>3</p>
					</div>
					<button
						className='connect-btn font--semi-bold flex justify-content--center align-items--center font--semi-bold font-size--browser-default line-height--20'
						onClick={() => setIsWallet(!isWallet)}
					>
						Connect
					</button>

					<div className='icon-wrapper flex ml--25'>
						<div className='cursor--pointer' onClick={() => setSearchPopup(!searchPopup)}>
							<SearchIcon className='mr--25 search-icon' />
						</div>
						<div className='cursor--pointer' onClick={() => setIsNotification(!isNotification)}>
							<NotificationIcon className='notification-icon' />
						</div>
					</div>
				</div>
			</div>
			{!HIDE_CONNECT_OPT.includes(activeLink) && (
				<div className='hide--md'>
					<div className='flex justify-content--end connect-btn-wrapper'>
						<Link
							className='mobile-connect-btn font--bold font-size--xxs flex justify-content--center align-items--center text--white text--uppercase'
							href={'/'}
						>
							Connect
						</Link>
					</div>
				</div>
			)}

			{isNotification && (
				<CustomModal
					className='notification-modal show--md'
					show={true}
					handleClose={() => setIsNotification(false)}
				>
					<div className='pb--20'>
						{NOTIFICATION_DETAILS.map(({ description, timing }, index) => {
							return (
								<div
									className='content-wrapper flex align-items--center justify-content--center'
									key={index}
								>
									<div className='circle' />
									<div className='notification-title-wrapper ml--10'>
										<p className='font--regular font-size--xxs'>{description}</p>
										<p className='font-size--xxs text--dark-turquoise font--semi-bold'>{timing}</p>
									</div>
									<div className='dot-wrapper'>
										<DotIcon className='dot-icon' />
									</div>
								</div>
							);
						})}
						<Button className='show-btn justify-align--center m--0-auto no--bg font-size--xxs font--bold border-radius--5 text--uppercase '>
							Show More
						</Button>
					</div>
				</CustomModal>
			)}
			{searchPopup && (
				<CustomModal className='search-modal show--md' show={true} handleClose={() => setSearchPopup(false)}>
					<div>
						<input
							type='text'
							className='search-input no--bg width--full'
							onChange={(e) => console.log(null)}
							placeholder='Search'
						/>
					</div>
				</CustomModal>
			)}
			{isWallet && (
				<CustomModal className='wallet-modal show--md' show={true} handleClose={() => setIsWallet(false)}>
					<div className='wallet-wrapper'>
						<h3 className='wallet-title font-size--24 font--semi-bold text--center'>Connect a wallet</h3>

						{WALLET_DETAILS.map(({ title, SvgIcon }, index) => {
							return (
								<div
									className='wallet-list-wrapper flex align-items--center cursor--pointer'
									key={index}
								>
									<SvgIcon className='icon-wrapper' />
									<p className='wallet-list-title font-size--browser-default font--semi-bold line-height--24'>
										{title}
									</p>
								</div>
							);
						})}
					</div>
				</CustomModal>
			)}
		</>
	);
};

export default Header;
