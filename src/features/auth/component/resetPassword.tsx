import React, { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { resetPasswordFormValidationSchema } from 'shared/constants/validation-schema';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/api';
import FormButton from 'shared/components/formButton/formButton';
import CustomButton from 'shared/components/customButton/customButton';
import {
	HidePasswordIcon,
	LeftArrow,
	LeftArrowIcon,
	PasswordChangeAlertIcon,
	ShowPasswordIcon
} from 'shared/icons/icons';
import { IFieldPassValues } from '../interface/auth';
import { PASSWORD_FIELDS, RESET_PASSWORD_INITIAL_VALUE } from '../constants/loginConstant';

const ResetPassword: FC = () => {
	const pathname = usePathname();

	const [showPassword, setShowPassword] = useState(false);
	const [isPassChanged, setIsPassChanged] = useState(false);
	const [isError, setIsError] = useState(false);

	const onSubmit = (values: FormikValues) => {
		const params = {
			reset_password_token: pathname?.split('/reset-password/')[1],
			new_password: values.new_password
		};
		HttpService.post(API_CONFIG.path.resetPassword, params)
			.then(() => {
				setIsPassChanged(true);
			})
			.catch((err) => {
				console.log('Error : ', err);
			});
	};

	return (
		<div className='pwa-sm-container justify-align--center'>
			{!isPassChanged && (
				<div className='reset-password-wrapper'>
					<Link href={'/login'}>
						<div className='arrow-wrapper show--md position--absolute cursor--pointer'>
							<LeftArrowIcon />
						</div>
					</Link>
					<div className='flex'>
						<Link href={'/login'}>
							<LeftArrow className='mr--15 hide--md' />
						</Link>
						<h3 className='reset-title font-size--24 font--bold'>Create New Password</h3>
					</div>
					<p className='desc-title font-size--lg font--semi-bold'>
						Save the new password in a safe place, if you forget it then you have to do a forgot password
						again.
					</p>
					<div className='input-wrapper text--center'>
						<Formik
							initialValues={RESET_PASSWORD_INITIAL_VALUE}
							onSubmit={onSubmit}
							validationSchema={resetPasswordFormValidationSchema}
							validateOnChange
							validateOnBlur
							validateOnMount
						>
							{({ errors, touched }) => {
								return (
									<Form>
										{PASSWORD_FIELDS.map(({ label, name }, index) => {
											touched[name as keyof IFieldPassValues] && setIsError(true);
											return (
												<div
													key={index}
													className='mb--15 flex flex--column position--relative'
												>
													<label className='text--left font-size--browser-default font--semi-bold'>
														{label}
													</label>
													<Field
														className={`text--white no--bg input-field `}
														type={showPassword ? 'text' : 'password'}
														name={name}
													/>
													{name === 'confirm_new_password' && (
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
														className='error-message text--left font-size--xs font--medium mb--5'
													/>
												</div>
											);
										})}

										<div className='button-wrapper'>
											<FormButton
												buttonTitle={'Reset Password'}
												btnClassName={`${isError ? 'continue-btn' : ''}`}
											/>
										</div>
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>
			)}

			{isPassChanged && (
				<div className='password-changed-wrapper text--center'>
					<PasswordChangeAlertIcon className='pass-alert-icon' />
					<h3 className='font-size--24 font--semi-bold line-height--28'>Password Changed!</h3>
					<p className='font-size--sm font--regular line-height--20 mt--30 '>
						Your password has been changed successfully.
					</p>

					<div className='btn-wrapper'>
						<CustomButton buttonTitle={'back to login'} href={'/login'} />
					</div>
				</div>
			)}
		</div>
	);
};

export default ResetPassword;
