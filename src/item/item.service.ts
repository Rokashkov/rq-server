import { Injectable } from '@nestjs/common'
import { CreateItemDto } from './dtos/CreateItemDto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ItemService {
	constructor (private prisma: PrismaService) {}

	async getAll () {
		const item = await this.prisma.item.findMany()

		return item
	}

	async create (dto: CreateItemDto) {
		const item = await this.prisma.item.create({ data: dto })

		return item
	}

	async update (dto: CreateItemDto) {
		const item = await this.prisma.item.create({ data: dto })

		return item
	}

	async delete (dto: CreateItemDto) {
		const item = await this.prisma.item.create({ data: dto })

		return item
	}
}