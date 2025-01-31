import axios from "axios";
import 'reflect-metadata'
import { Type, plainToInstance } from 'class-transformer'

const url = "https://api.jsonbin.io/v3/b/679be06dad19ca34f8f72246";
const apiKey = " $2a$10$3uPfCVJbuz0xLI/OlOzme.KKPgNL7GLkGOiGk2L32.VJRxlVA18M2";

class User {
    id: string
    firstName: string
    lastName: string

    @Type(() => Number)
    age: number
}


axios.get(url, {
    headers: {
        "X-Master-Key": apiKey
    }
}).then(resp => {
    console.log(resp.data)
    const u: User[] = plainToInstance(User, resp.data.record as User[])
    console.log(typeof u[0].age)
})