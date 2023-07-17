import { FC } from 'react';
import Head from 'next/head';
import Dashboard from 'features/dashboard/container/dashboard';

const DashboardPage: FC = () => (
	<>
		<Head>
			<title>daxesh</title>
			<meta name='description' content='Hellooooo 123456789' />
		</Head>
		<Dashboard />
	</>
);

export default DashboardPage;
