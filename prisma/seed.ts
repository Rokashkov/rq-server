import { PrismaClient } from '@prisma/client'

async function seed () {
	const prisma = new PrismaClient()

	try {
		prisma.user.create({ data: { email: 'example@gmail.com', password: 'qwerty123456' } })
	} catch (err) {
		console.error(err)
	} finally {
		await prisma.$disconnect()
	}
}

seed()