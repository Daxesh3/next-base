import 'assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'hoc/header/header';
import Notification from 'shared/components/notification/notification';

import 'assets/styles/app.scss';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Notification />
		</>
	);
};

export default App;
