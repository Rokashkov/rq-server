import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
	const PORT = process.env.PORT

	const app = await NestFactory.create(AppModule, { cors: { credentials: true, origin: 'http://localhost:3000' } })
	
	app.use(cookieParser())
	app.setGlobalPrefix('/api')

	const config = new DocumentBuilder()
		.setTitle('React Query')
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	await app.listen(PORT, () => {
		console.log(`Server has been started on PORT: ${ PORT } in ${ process.env.NODE_ENV } mode...`)
	})
}

bootstrap()
