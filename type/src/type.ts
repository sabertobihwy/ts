class User {
    loginId: string = ""
}

type twoParamsConst = new (arg1: any, arg2: any) => User

const A: twoParamsConst = class Test {
    loginId: string = ""
    pwd: string = ""
}