import { FC } from 'react';
import { IconsProps } from 'shared/icons/icons';

export interface IAuthState {
	isLogin: boolean;
	userData: IUserData;
}

export interface ILoginResponse {
	data: IUserData;
	refresh_token: string;
	access_token: string;
}

export interface IUserData {
	id: string;
	email: string;
	role: string;
	status: string;
	avatar: string | null;
	name: string;
	refresh_token: string;
	access_token: string;
}

export interface ITimerData {
	callResendOTP: () => void;
	timerReset: boolean;
}

export interface IOtpData {
	id: string;
	otp: string;
}

export interface ISidenavData {
	title: string;
	href: string;
	SvgIcons: FC<IconsProps>;
}

export interface IFieldValues {
	email: string;
	password: string;
}

export interface IFieldPassValues {
	new_password: string;
	confirm_new_password: string;
}
