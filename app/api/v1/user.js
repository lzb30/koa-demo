const Router = require("koa-router");
const router = new Router({
  prefix: "/v1/user"
});

const { RegisterValidator } = require("../../../validators/validator");

router.post("/register", (ctx, next) => {
  const v = new RegisterValidator().validate(ctx);
});

module.exports = router;
