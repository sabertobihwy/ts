import axios from 'axios'
import { IResponseData, IResponseError } from '../interface/CommonTypes'
import { IMovie } from '../interface/IMovie'

export class MovieService {
    public static async addMovie(movie: IMovie): Promise<IResponseError | IResponseData<IMovie>> {
        const { data } = await axios.post('/api/movies', movie)
        return data
    }
}