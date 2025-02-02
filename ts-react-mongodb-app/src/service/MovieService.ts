import { movieModeldb } from "../db/dbConnection";
import { Movie } from "../entity/Movie";
import { IMovie } from "../interface/IMovie";

export class MovieService {
    public static async addMovie(movie: Object): Promise<string[] | IMovie> {
        const m: Movie = Movie.transformToMovie(movie)
        const result = await m.validateMovie()
        if (result instanceof Movie) {
            return await movieModeldb.create(result)
        }
        return result
    }



}