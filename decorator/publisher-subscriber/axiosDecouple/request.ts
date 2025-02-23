import axios, { AxiosError, AxiosResponse } from "axios";
import EventEmitter from './event'
const ins = axios.create({
    baseURL: 'http://localhost:3000'
})

const successHandler = (res: AxiosResponse): any => {

}

const errorHandler = (err: AxiosError): any => {
    if (err.response?.status === 401) { // Unauthorized 
        EventEmitter.emit('API_UNAUTH')
    } else if (err.response?.status === 403) { // Forbidden 
        EventEmitter.emit('API_FORBIDDEN')
    }
}

ins.interceptors.response.use(successHandler, errorHandler)