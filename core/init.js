const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
    static InitCore(app) {
        InitManager.app = app
        InitManager.InitLoadRouters()
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
}

module.exports = InitManager