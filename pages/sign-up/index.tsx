import SignUp from 'features/auth/component/signUp';
import Head from 'next/head';
import { FC } from 'react';

const SignUpPage: FC = () => (
	<>
		<Head>
			<title>SignUpPage</title>
			<meta name='description' content='SignUpPage' />
		</Head>
		<SignUp />
	</>
);

export default SignUpPage;
