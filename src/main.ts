import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const PORT = process.env.PORT

	const app = await NestFactory.create(AppModule, { cors: { credentials: true, origin: 'http://localhost:3000' } })
	
	app.use(cookieParser())
	app.setGlobalPrefix('/api')
	app.useGlobalPipes(new ValidationPipe({
		stopAtFirstError: true,
		transform: true,
		whitelist: true
	}))

	await app.listen(PORT, () => {
		console.log(`Server has been started on PORT: ${ PORT } in ${ process.env.NODE_ENV } mode...`)
	})
}

bootstrap()
