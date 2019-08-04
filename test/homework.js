class A {
    constructor() {
        this.nameA = 'a'
    }
    validateA() {
        console.log('A')
    }
}

class B extends A {
    constructor() {
        super()
        this.nameB = 'b'
    }
    validateB() {
        console.log('B')
    }
}

class C extends B {
    constructor() {
        super()
        this.nameC = 'c'
    }
    validateC() {
        console.log('C')
    }
}

var c = new C()

function findMembers(obj, ...params) {
    const keys = Object.getOwnPropertyNames(obj)
    let members = keys.filter(item => {
        for (let i = 0; i < params.length; i++) {
            if (item.indexOf(params[i]) > -1) {
                return true
            }
        }
    })
    if (obj.__proto__) {
        return members.concat(findMembers(obj.__proto__, ...params))
    } else {
        return members
    }
}

const members = findMembers(c, 'name', 'validate')

console.log(members)