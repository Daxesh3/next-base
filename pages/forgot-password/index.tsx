import { FC } from 'react';
import Head from 'next/head';
import ForgotPassWord from 'features/auth/component/forgotPassword';

const ForgotPasswordPage: FC = () => (
	<>
		<Head>
			<title>ForgotPasswordPage</title>
			<meta name='description' content='ForgotPasswordPage' />
		</Head>
		<ForgotPassWord />
	</>
);

export default ForgotPasswordPage;
