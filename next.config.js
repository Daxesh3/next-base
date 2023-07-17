/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'node_modules', 'scss'), path.join(__dirname, 'src/assets/styles')]
	},
	/**
	 * export path map for any new page is required to remove
	 * need .html extensions on page.
	 */
	exportPathMap: async function (defaultPathMap) {
		return {
			'/': { page: '/login' },
			'/sign-up': {
				page: '/sign-up'
			},
			'/forgot-password': {
				page: '/forgot-password'
			},
			'/reset-password/[token]': {
				page: '/reset-password/[token]'
			},
			'/dashboard': {
				page: '/dashboard'
			}
		};
	},
	images: {
		unoptimized: true
	}
};

// const withPWA = require('next-pwa')({
// 	dest: 'public',
// 	register: true,
// 	disable: process.env.NEXT_PUBLIC_APP_ENV !== 'PROD',
// 	skipWaiting: true
// });

// module.exports = withPWA(nextConfig);

module.exports = nextConfig;
