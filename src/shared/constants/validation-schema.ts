import * as Yup from 'yup';
import { PASSWORD_VALIDATOR_REGEX } from './constants';

const loginFormValidationSchema = Yup.object().shape({
	email: Yup.string().email('Please Enter Valid Email.').required('Please enter valid email !').strict(true),
	password: Yup.string()
		.required('Please enter password.')
		.matches(
			PASSWORD_VALIDATOR_REGEX,
			'Must Contain 8 Characters, One Number,One Uppercase Character and One Special Case Character.'
		)
		.strict(true)
});

const signUpFormValidationSchema = Yup.object().shape({
	name: Yup.string().required('Please enter full name').strict(true),
	user_name: Yup.string().required('Please enter username').strict(true),
	email: Yup.string().email('Please Enter Valid Email.').required('Please enter valid email !').strict(true),
	password: Yup.string()
		.required('Please enter password.')
		.matches(
			PASSWORD_VALIDATOR_REGEX,
			'Must Contain 8 Characters, One Number,One Uppercase Character and One Special Case Character.'
		)
		.strict(true)
});

const forgotPasswordValidationSchema = Yup.object().shape({
	email: Yup.string().email('Please Enter Valid Email.').required('Please enter valid email !').strict(true)
});

const resetPasswordFormValidationSchema = Yup.object().shape({
	new_password: Yup.string()
		.required('Please enter new password')
		.matches(
			PASSWORD_VALIDATOR_REGEX,
			'Must Contain 8 Characters, One Number,One Uppercase Character and One Special Case Character.'
		)
		.strict(true),
	confirm_new_password: Yup.string()
		.required('Please enter the confirm new password')
		.oneOf([Yup.ref('new_password')], 'Passwords must match')
		.strict(true)
});

export {
	loginFormValidationSchema,
	signUpFormValidationSchema,
	forgotPasswordValidationSchema,
	resetPasswordFormValidationSchema
};
