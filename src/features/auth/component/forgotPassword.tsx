import React, { FC } from 'react';
import Link from 'next/link';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { forgotPasswordValidationSchema } from 'shared/constants/validation-schema';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/api';
import { notify } from 'shared/components/notification/notification';
import FormButton from 'shared/components/formButton/formButton';
import { LeftArrow, LeftArrowIcon } from 'shared/icons/icons';
import { FORGOT_PASSWORD_INITIAL_VALUE } from '../constants/loginConstant';

const ForgotPassWord: FC = () => {
	const onSubmit = (values: FormikValues) => {
		HttpService.post(API_CONFIG.path.forgotPassword, values)
			.then(() => {
				notify('Please Check your email', 'success');
			})
			.catch((err) => {
				console.log('Error : ', err);
			});
	};

	return (
		<div className='pwa-sm-container justify-align--center'>
			<div className='forgot-password-wrapper'>
				<Link href={'/login'}>
					<div className='arrow-wrapper show--md position--absolute cursor--pointer'>
						<LeftArrowIcon className='' />
					</div>
				</Link>
				<div className='flex'>
					<Link href={'/login'}>
						<LeftArrow className='mr--15 hide--md' />
					</Link>
					<h3 className='forgot-title font-size--24 font--bold'>Forgot Password</h3>
				</div>
				<p className='desc-title font-size--lg font--semi-bold'>
					Enter your email address to reset your password.
				</p>
				<div className='input-wrapper text--center'>
					<Formik
						initialValues={FORGOT_PASSWORD_INITIAL_VALUE}
						onSubmit={onSubmit}
						validationSchema={forgotPasswordValidationSchema}
						validateOnChange
						validateOnBlur
						validateOnMount
					>
						{({ errors, touched }) => {
							return (
								<Form>
									<div className='mb--15 flex flex--column'>
										<label className='text--left font-size--browser-default font--semi-bold'>
											Email
										</label>
										<Field className={`text--white no--bg input-field`} type='text' name='email' />

										<ErrorMessage
											name='email'
											component='p'
											className='error-message text--left font-size--xs font--medium mb--5'
										/>
									</div>

									<FormButton buttonTitle={'continue'} className='continue-btn' />
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassWord;
