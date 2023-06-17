import { Controller, Post, Body, Get } from '@nestjs/common'
import { ItemService } from './item.service'
import { CreateItemDto } from './dtos/CreateItemDto'
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger'
import { Item } from './dtos/Item'

@ApiTags('item')
@Controller('item')
export class ItemController {
	constructor(private readonly itemService: ItemService) {}
	
	@Post('/')
	@ApiOkResponse({ type: Item })
	@ApiOperation({ summary: 'Создать предмет' })
	async create (@Body() dto: CreateItemDto) {
		const item = await this.itemService.create(dto)

		return item
	}

	@Get('/')
	@ApiOkResponse({ type: Item, isArray: true })
	@ApiOperation({ summary: 'Получить все предметы' })
	async getAll () {
		const items = await this.itemService.getAll()

		return items
	}
}
