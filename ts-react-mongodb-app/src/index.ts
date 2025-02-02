import { movieModeldb } from './db/dbConnection'
import { Movie } from './entity/Movie'
import { MovieService } from './service/MovieService'

const a = new Movie()
a.name = "123"
a.timeLong = 11
a.types = ["ASSSSSSS"]
a.isHot = true
a.areas = "dddd"
// a.validateMovie().then(resp => console.log(resp))
MovieService.addMovie(a).then(resp => console.log(resp))
