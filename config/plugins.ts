import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
	'users-permissions': {
		config: {
			jwtSecret: env('JWT_SECRET'),
		},
	},
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				baseUrl: env('R2_PUBLIC_URL'),
				s3Options: {
					credentials: {
						accessKeyId: env('R2_ACCESS_KEY_ID'),
						secretAccessKey: env('R2_ACCESS_SECRET'),
					},
					region: 'auto',
					endpoint: env('R2_ENDPOINT'),
					params: {
						Bucket: env('R2_BUCKET'),
					},
				},
			},
		},
	},
});

export default config;
