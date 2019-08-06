"use strict";

const {
  LinValidator,
  Rule
} = require("lin-mizar");
const validator = require("validator");

class EventsValidator extends LinValidator {
  constructor() {
    super();
    this.group_id = new Rule("isInt", "分组id必须为正整数");
    this.events = new Rule("isNotEmpty", "请输入events字段");
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super();
    this.email = [new Rule("isEmail", "不符合email规范")];
    this.password1 = [
      new Rule("isLength", "密码至少6个字符，最多32个字符", {
        min: 6,
        max: 32
      }),
      new Rule("matches", "密码不符合规范", "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]")
    ];
    this.password2 = this.password1;
    this.nickname = [
      new Rule("isLength", "长度不符合规范", {
        min: 4,
        max: 32
      })
    ];
  }

  validatePassword(vals) {
    const pwd1 = vals.body.password1;
    const pwd2 = vals.body.password2;
    if (pwd1 !== pwd2) {
      throw new Error("两个密码必须相同");
    }
  }
}

class IdsValidator extends LinValidator {
  constructor() {
    super();
    this.ids = new Rule("isNotEmpty", "每个id值必须为正整数");
  }

  validateIds(data) {
    const ids = data.body.ids;
    if (!Array.isArray(ids)) {
      return [false, "每个id值必须为正整数"];
    }
    for (let id of ids) {
      if (typeof id === "number") {
        id = String(id);
      }
      if (
        !validator.isInt(id, {
          min: 1
        })
      ) {
        return [false, "每个id值必须为正整数"];
      }
    }
    return true;
  }
}

module.exports = {
  IdsValidator,
  EventsValidator,
  RegisterValidator
};