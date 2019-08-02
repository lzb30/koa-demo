const Router = require('koa-router')
const router = new Router()
const {
    HttpException
} = require('../../../core/http-exception')

router.get('/v1/classic/latest', (ctx, next) => {
    const params = ctx.params
    const query = ctx.query
    const headers = ctx.request.header
    const body = ctx.request.body

    if (true) {
        const error = new HttpException()
        throw error
    }
    ctx.body = {
        key: 'classic'
    }
})

module.exports = router