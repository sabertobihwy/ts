import { IsNotEmpty, Min, Max, validate } from 'class-validator'

export class User {
    @IsNotEmpty({ message: "no empty" })
    loginId: string
    @IsNotEmpty({ message: "no empty" })
    pwd: string = '123'
    @Min(0, { message: "should > 0" })
    @Max(10, { message: "should < 10" })
    age: number
}

const u = new User()
u.age = 13

validate(u).then(e => console.log(e))