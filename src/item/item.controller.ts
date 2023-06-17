import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common'
import { ItemService } from './item.service'
import { CreateItemDto } from './dtos/CreateItemDto'
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger'
import { Item } from './dtos/Item'
import { UpdateItemDto } from './dtos/UpdateItemDto'
import { IdParam } from './dtos/IdParam'

@ApiTags('item')
@Controller('item')
export class ItemController {
	constructor(private readonly itemService: ItemService) {}


	@Get('/')
	@ApiOkResponse({ type: Item, isArray: true })
	@ApiOperation({ summary: 'Получить все предметы' })
	async getAll () {
		const items = await this.itemService.getAll()

		return items
	}

	@Get('/:id')
	@ApiOkResponse({ type: Item, isArray: true })
	@ApiOperation({ summary: 'Получить предмет по id' })
	async getById (@Param() { id }: IdParam) {
		const item = await this.itemService.getById(id)

		return item
	}

	@Post('/')
	@ApiOkResponse({ type: Item })
	@ApiOperation({ summary: 'Создать предмет' })
	async create (@Body() dto: CreateItemDto) {
		const item = await this.itemService.create(dto)

		return item
	}

	@Patch('/:id')
	@ApiOkResponse({ type: Item })
	@ApiOperation({ summary: 'Обновить предмет по id' })
	async updateById (@Param() { id }: IdParam, @Body() dto: UpdateItemDto) {
		const item = await this.itemService.updateById(id, dto)

		return item
	}

	@Delete('/:id')
	@ApiOkResponse({ type: Item })
	@ApiOperation({ summary: 'Удалить предмет по id' })
	async deleteById (@Param() { id }: IdParam) {
		const item = await this.itemService.deleteById(id)

		return item
	}
}
