import { FC } from 'react';
import Login from 'features/auth/container/login';
import Seo from 'shared/components/seo/listingSEO';
import { ISEO } from 'shared/interface';
import Head from 'next/head';

const LoginPage: FC<{ seoData: ISEO }> = (props) => {
	return (
		<>
			{/* <Seo {...props.seoData} /> */}
			<Head>
				<title>LoginPage</title>
				<meta name='description' content='LoginPage' />
			</Head>
			<Login />
		</>
	);
};

export function getInitialProps() {
	return {
		props: {
			seoData: {
				title: 'LoginPage',
				description: 'LoginPage'
			}
		}
	};
}

export default LoginPage;
