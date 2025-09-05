export const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'API Node Express + TS',
		version: '0.0.1',
		description: 'A sample API built with Node.js, Express, and TypeScript.',
	},
	servers: [
		{
			url: 'http://localhost:3000/api/v1',
			description: 'Development server',
		},
	],
};