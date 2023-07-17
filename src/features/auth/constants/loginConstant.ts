import { AppleIcon, GoogleIcon } from 'shared/icons/icons';

const LOGIN_FIELDS = [
	{ placeHolder: 'Username  or email', name: 'email' },
	{ placeHolder: 'Password', name: 'password' }
];

const SIGN_UP_FIELDS = [
	{ placeHolder: 'Full Name', name: 'name' },
	{ placeHolder: 'Username', name: 'user_name' },
	{ placeHolder: 'Enter Your Email', name: 'email' },
	{ placeHolder: 'Enter Your Password', name: 'password' }
];

const PASSWORD_FIELDS = [
	{ label: 'New password', name: 'new_password' },
	{ label: 'Confirm new password', name: 'confirm_new_password' }
];

const LOGIN_INITIAL_VALUE = {
	email: '',
	password: ''
};

const FORGOT_PASSWORD_INITIAL_VALUE = {
	email: ''
};

const RESET_PASSWORD_INITIAL_VALUE = {
	new_password: '',
	confirm_new_password: ''
};

const SIGN_UP_INITIAL_VALUE = {
	name: '',
	user_name: '',
	email: '',
	password: ''
};

const SOCIAL_ICONS = [
	{
		SvgIcon: GoogleIcon
	},
	{
		SvgIcon: AppleIcon
	}
];

const HIDE_CONNECT_OPT = ['forgot-password', 'reset-password'];

export {
	LOGIN_FIELDS,
	SOCIAL_ICONS,
	LOGIN_INITIAL_VALUE,
	PASSWORD_FIELDS,
	SIGN_UP_FIELDS,
	SIGN_UP_INITIAL_VALUE,
	FORGOT_PASSWORD_INITIAL_VALUE,
	RESET_PASSWORD_INITIAL_VALUE,
	HIDE_CONNECT_OPT
};
