import React, { FC, useState } from 'react';
import Link from 'next/link';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';

import { LoginLogo } from 'shared/icons/icons';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/api';
import { loginFormValidationSchema } from 'shared/constants/validation-schema';
import FormButton from 'shared/components/formButton/formButton';
import { LOGIN_FIELDS, LOGIN_INITIAL_VALUE } from '../constants/loginConstant';
import { IFieldValues } from '../interface/auth';
import SocialMedia from '../component/socialMedia';

const Login: FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleLogin = (values: FormikValues) => {
		setIsLoading(true);
		HttpService.post(API_CONFIG.path.login, values, {
			headerData: {
				'accept-device-type': 1,
				'accept-version': `1.0.0`,
				'device-token': 123456789
			}
		})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				console.log('Error : ', err);
				setIsLoading(false);
			});
	};

	return (
		<div className='pwa-sm-container login-wrapper justify-align--center flex--column'>
			<div className='text--center logo-wrapper'>
				<LoginLogo />
			</div>
			<div className='login-form width--full'>
				<h1 className='font-size--24 line-height--30 font--semi-bold login--title'>Login</h1>
				<div className='input-wrapper text--center'>
					<Formik
						initialValues={LOGIN_INITIAL_VALUE}
						onSubmit={handleLogin}
						validationSchema={loginFormValidationSchema}
						validateOnChange
						validateOnBlur
						validateOnMount
					>
						{({ errors, touched }) => {
							return (
								<Form>
									{LOGIN_FIELDS.map(({ placeHolder, name }, index) => {
										touched[name as keyof IFieldValues] && setIsError(true);
										return (
											<div key={index} className='mb--7'>
												<Field
													className={`${
														touched[name as keyof IFieldValues] &&
														errors[name as keyof IFieldValues]
															? 'red-border'
															: ''
													} text--white no--bg border-radius--5 input-field`}
													type='text'
													name={name}
													placeholder={placeHolder}
												/>

												<ErrorMessage
													name={name}
													component='p'
													className='error-message text--left font-size--xs font--medium mb--5'
												/>
											</div>
										);
									})}
									<div className='flex justify-content--end'>
										<Link
											className='text--white font-size--browser-default font--medium line-height--20 width--full text--right d--block forgot-link'
											href='forgot-password'
										>
											Forgot Password ?
										</Link>
									</div>

									<FormButton
										buttonTitle={'Login'}
										className={`${
											touched.email === true && touched.password === true
												? 'mt--20 error-login-btn'
												: 'login-btn'
										}`}
										loading={isLoading}
									/>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
			<SocialMedia
				suggestionTitle={'Don’t have an account? '}
				signUpTitle={'Sign up'}
				signUpTitleHref={'/sign-up'}
				isError={isError}
			/>
		</div>
	);
};

export default Login;
