import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ItemModule } from './item/item.module'

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: `.env.${ process.env.NODE_ENV }` }),
		ItemModule
	]
})

export class AppModule {}
