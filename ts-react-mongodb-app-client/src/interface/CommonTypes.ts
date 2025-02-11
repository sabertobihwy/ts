export interface IResponseError {
    error: string,
    data: null
}

export interface IResponseData<T> {
    data: T,
    error: string

}

export interface IResponsePage<T> {
    data: T,
    error: string,
    total: number
}