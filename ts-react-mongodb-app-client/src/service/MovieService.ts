import axios from 'axios'
import { IResponseData, IResponseError } from '../interface/CommonTypes'
import { IMovie } from '../interface/IMovie'
import { ISearchCond } from '../interface/ISearchCond'

export class MovieService {
    public static async addMovie(movie: IMovie): Promise<IResponseError | IResponseData<IMovie>> {
        const { data } = await axios.post('/api/movies', movie)
        return data
    }
    public static async editMovie(movie: IMovie): Promise<IResponseError | IResponseData<null>> {
        const { data } = await axios.put(`/api/movies/${movie._id}`, movie)
        return data
    }
    public static async findMovieById(_id: string): Promise<IResponseError | IResponseData<IMovie>> {
        const { data } = await axios.get(`/api/movies/${_id}`)
        return data
    }
    public static async findMovieByCond(cond: ISearchCond): Promise<IResponseError | IResponseData<IMovie>> {
        const { data } = await axios.get('/api/movies', { params: cond })
        return data
    }
    public static async delMovie(_id: string): Promise<IResponseError | IResponseData<null>> {
        const { data } = await axios.delete(`/api/movies/${_id}`)
        return data
    }
}