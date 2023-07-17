import { FC } from 'react';
import Head from 'next/head';
import ResetPassword from 'features/auth/component/resetPassword';

const ResetPasswordPage: FC = () => (
	<>
		<Head>
			<title>ResetPasswordPage</title>
		</Head>
		<ResetPassword />
	</>
);

export default ResetPasswordPage;
