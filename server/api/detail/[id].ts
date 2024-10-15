export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return { retule: '结果id：' + id }
})