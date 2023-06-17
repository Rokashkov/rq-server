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

	async getById (id: number) {
		const item = await this.prisma.item.findUnique({ where: { id } })

		return item
	}

	async create (dto: CreateItemDto) {
		const item = await this.prisma.item.create({ data: dto })

		return item
	}

	async updateById (id: number, dto: CreateItemDto) {
		const item = await this.prisma.item.update({ where: { id }, data: dto })

		return item
	}

	async deleteById (id: number) {
		const item = await this.prisma.item.delete({ where: { id } })

		return item
	}
}