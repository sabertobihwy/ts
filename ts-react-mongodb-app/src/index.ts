import { movieModeldb } from './db/dbConnection'
import { Movie } from './entity/Movie'
import { MovieService } from './service/MovieService'

// const a = {
//     name: "123",
//     timeLong: 11,
//     types: ["12311", "12311", '12311'],
//     isHot: true,
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
//         name: "电影" + i,
//         timeLong: getRandom(10, 50),
//         types: ["喜剧", "action"],
//         isHot: true,
//         areas: ["china", "NA"]
//     }
//     // MovieService.addMovie(a).then(resp => console.log(resp))
// }

MovieService.findByCond({ limit: 10.1 }).then(console.log)

// const b = new Movie()
// b.name = 'b'
// a.validateMovie().then(resp => console.log(resp))
//MovieService.addMovie(a).then(resp => console.log(resp))
// MovieService.editMovie('67a17ae028e03f977199ae63', b).then(resp => console.log(resp))
// MovieService.findById('67a17ae028e03f977199ae63').then(resp => console.log(resp))
