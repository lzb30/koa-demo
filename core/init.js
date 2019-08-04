const Router = require('koa-router')
const requireDirectory = require('require-directory')


class InitManager {
    static InitCore(app) {
        InitManager.app = app
        InitManager.InitLoadRouters()
        InitManager.InitLoadHttpException()
    }

    static InitLoadRouters() {
        const apiPath = `${process.cwd()}/app/api`
        requireDirectory(module, apiPath, {
            visit: whenLoadModule
        })

        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }

    static InitLoadHttpException() {
        const errors = require('./http-exception')
        global.errors = errors
    }
}

module.exports = InitManager