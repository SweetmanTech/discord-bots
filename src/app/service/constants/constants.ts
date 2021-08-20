export default Object.freeze({
	DISCORD_ROLE_GUEST_PASS: 'Guest Pass',

	DB_NAME_DEGEN: 'degen',
	DB_NAME_BOUNTY_BOARD: 'bountyboard',
	DB_COLLECTION_GUEST_USERS: 'guestUsers',
	DB_COLLECTION_BOUNTIES: 'bounties',

	// MONGODB_URI_PARTIAL: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}/`,
	MONGODB_URI_PARTIAL: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}${process.env.MONGODB_URL_ENDPOINT}`,
	MONGODB_OPTIONS: '?retryWrites=true&w=majority',
	BOUNTY_BOARD_URL: 'https://bankless.community/',

	BOUNTY_BOARD_WEBSITE_WEBHOOK_NAME: 'bounty-board-website',
	BOUNTY_BOARD_END_OF_SEASON_DATE: process.env.DAO_CURRENT_SEASON_END_DATE,

	SCOAP_HTTP_SERVER_CORS_WHITELIST: ['http://localhost:3000'],
	SCOAP_HTTP_SERVER_PORT: 5000,
	SCOAP_SQUAD_CHANNEL_ID: '854401837566001192',

	BOT_CONVERSATION_TIMEOUT_MS: 1000 * 60 * 60,

	EMOJIS: {
		'1': '\u0031\uFE0F\u20E3',
		'2': '\u0032\uFE0F\u20E3',
		'3': '\u0033\uFE0F\u20E3',
		'4': '\u0034\ufe0f\u20e3',
		'5': '\u0035\ufe0f\u20e3',
		'6': '\u0036\ufe0f\u20e3',
		'7': '\u0037\ufe0f\u20e3',
		'8': '\u0038\ufe0f\u20e3',
		'9': '\u0039\ufe0f\u20e3',
		plus: '\u2795\u2B1C',
		memo: String.fromCodePoint(0x1F4DD),
		cross_mark: '\u274C',
	},
});