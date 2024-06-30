import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 插入用户
  // await prisma.user.create({
  //   data: {
  //     name: '用户1',
  //     email: '123456@qq.com',
  //     posts: {
  //       create: {
  //         title: 'nuxt is good!',
  //       },
  //     },
  //   },
  // })
  // 更新用户
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)

  // 查询所有用户
  const allUsers = await prisma.user.findMany({
    include: {
      // 关联查询
      posts:  true
    }
  })
  // eslint-disable-next-line no-console
  console.dir(allUsers, {depth: null})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
