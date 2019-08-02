const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')


const app = new Koa()

app.use(catchError)
app.use(parser())
InitManager.InitCore(app)



app.listen(3000)
console.log('app listening 3000')