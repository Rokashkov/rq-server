declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'
		PORT: number
		JWT_ACCESS_SECRET: string
		JWT_REFRESH_SECRET: string
	}
}