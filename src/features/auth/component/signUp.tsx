import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';

import { signUpFormValidationSchema } from 'shared/constants/validation-schema';
import { HidePasswordIcon, ShowPasswordIcon } from 'shared/icons/icons';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/api';
import FormButton from 'shared/components/formButton/formButton';
import { SIGN_UP_FIELDS, SIGN_UP_INITIAL_VALUE } from '../constants/loginConstant';
import { IFieldValues } from '../interface/auth';
import SocialMedia from './socialMedia';

const SignUp: FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const onSubmit = (values: FormikValues) => {
		setIsLoading(true);
		HttpService.post(API_CONFIG.path.register, values)
			.then(() => {
				setIsLoading(false);
				router.push('/launch-screen');
			})
			.catch((err) => {
				console.log('Error : ', err);
				setIsLoading(false);
			});
	};
	return (
		<div className='sign-up-wrapper pwa-sm-container justify-align--center flex--column'>
			<div className='sign-up-form width--full'>
				<h1 className='font-size--24 line-height--30 font--semi-bold login--title'>Create Account</h1>
				<div className='input-wrapper text--center'>
					<Formik
						initialValues={SIGN_UP_INITIAL_VALUE}
						onSubmit={onSubmit}
						validationSchema={signUpFormValidationSchema}
						validateOnChange
						validateOnBlur
						validateOnMount
					>
						{({ touched, errors }) => {
							return (
								<Form>
									{SIGN_UP_FIELDS.map(({ placeHolder, name }, index) => {
										touched[name as keyof IFieldValues] && setIsError(true);
										return (
											<div
												key={index}
												className={`${
													touched[name as keyof IFieldValues]
														? 'mb--20 touched-error'
														: 'mb--28 form-wrapper '
												} position--relative `}
											>
												<Field
													className={`${
														touched[name as keyof IFieldValues] &&
														errors[name as keyof IFieldValues]
															? 'red-border'
															: ''
													} text--white no--bg border-radius--5 input-field`}
													type={showPassword ? 'text' : 'password'}
													name={name}
													placeholder={placeHolder}
												/>
												{name === 'password' && (
													<div
														className='password-icon position--absolute  flex cursor--pointer align-items--center'
														onClick={() => setShowPassword(!showPassword)}
													>
														{showPassword ? (
															<ShowPasswordIcon className='show-password' />
														) : (
															<HidePasswordIcon className='hide-password' />
														)}
													</div>
												)}

												<ErrorMessage
													name={name}
													component='p'
													className='error-message text--left font-size--xs font--medium '
												/>
											</div>
										);
									})}

									<FormButton loading={isLoading} buttonTitle={'Sign up'} className='sign-up-btn' />
								</Form>
							);
						}}
					</Formik>
					<FormButton buttonTitle={'Skip'} className='skip-btn' />
				</div>
			</div>
			<SocialMedia
				suggestionTitle={'Already have an account? '}
				signUpTitle={'Login'}
				signUpTitleHref={'/login'}
				isError={isError}
			/>
		</div>
	);
};

export default SignUp;
