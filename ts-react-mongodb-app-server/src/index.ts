import { movieModeldb } from './db/dbConnection'
import { Movie } from './entity/Movie'
import { MovieService } from './service/MovieService'
import Express from 'express'
import { router } from './router/MovieRoute'
import { uploadRouter } from './router/uploadRoute'
import path from 'path'


const app = Express()


app.use(Express.json())

app.use('/static/upload', Express.static(path.resolve(__dirname, './public/uploads')))

app.use('/api/movies', router)
app.use('/upload', uploadRouter)

app.listen(3000)

// const a = {
//     name: "123",
//     timeLong: 11,
//     types: ["12311", "12311", '12311'],
//     isHot: true,
//     isClassic: true,
//     areas: ["123"]
// }
// const b = {
//     name: "newnewnewnew"
// }

function getRandom(min: number, max: number): number {
    const diff = max - min
    return Math.floor(min + Math.random() * diff)
}

// for (let i = 0; i < 10; i++) {
//     const a = {
//         name: "哪吒" + i,
//         timeLong: getRandom(10, 50),
//         types: ["科幻", "亲子"],
//         isHot: true,
//         isClassic: true,
//         areas: ["USA", "CA"]
//     }
//     MovieService.addMovie(a).then(resp => console.log(resp))
// }

//MovieService.findByCond({ limit: 10.1 }).then(console.log)

// const b = new Movie()
// b.name = 'b'
// a.validateMovie().then(resp => console.log(resp))
//MovieService.addMovie(a).then(resp => console.log(resp))
// MovieService.editMovie('67a17ae028e03f977199ae63', b).then(resp => console.log(resp))
//MovieService.findById('123').then(resp => console.log(resp))
