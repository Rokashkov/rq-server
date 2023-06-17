import { ApiProperty } from '@nestjs/swagger'

export class Item {
	@ApiProperty()
	id: number
  
	@ApiProperty()
	name: string

	@ApiProperty()
	description: string
  
	@ApiProperty()
	updatedAt: string
  
	@ApiProperty()
	createdAt: string
}