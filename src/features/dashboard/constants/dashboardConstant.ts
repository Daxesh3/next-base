import { CoinbaseIcon, MetaMaskIcon, PhantomIcon, SolflareIcon, WalletConnectIcon } from 'shared/icons/icons';

const HEADER_MENU = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		navClass: ''
	},
	{
		title: 'Academy',
		url: '/academy',
		navClass: ''
	},
	{
		title: 'Arena',
		url: '/arena',
		navClass: ''
	},
	{
		title: 'Glossary',
		url: '/glossary',
		navClass: ''
	},
	{
		title: 'Account',
		url: '/account',
		navClass: ''
	}
];

const NOTIFICATION_DETAILS = [
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
		timing: '1m ago'
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
		timing: '1m ago'
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
		timing: '1m ago'
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
		timing: '1m ago'
	},
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
		timing: '1m ago'
	}
];

const WALLET_DETAILS = [
	{
		title: 'Metamask',
		SvgIcon: MetaMaskIcon
	},
	{
		title: 'Phantom',
		SvgIcon: PhantomIcon
	},
	{
		title: 'Coinbase',
		SvgIcon: CoinbaseIcon
	},
	{
		title: 'Walletconnect',
		SvgIcon: WalletConnectIcon
	},
	{
		title: 'Solflare',
		SvgIcon: SolflareIcon
	}
];
export { HEADER_MENU, NOTIFICATION_DETAILS, WALLET_DETAILS };
