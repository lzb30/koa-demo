const Router = require('koa-router')
const requireDirectory = require('require-directory')


class InitManager {
    static InitCore(app) {
        InitManager.app = app
        InitManager.InitLoadRouters()
        InitManager.LoadHttpException()
        InitManager.LoadConfig()
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

    static LoadConfig() {
        const config = require('../config/config')
        global.config = config
    }



    static LoadHttpException() {
        const errors = require('./http-exception')
        global.errors = errors
    }
}

module.exports = InitManager