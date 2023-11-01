import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        let posts = await prisma.posts.findMany({
            orderBy: { id: 'desc' },
            include: { likes: true }
        })
        return posts;
    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error)
        throw error
    }
})