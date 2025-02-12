import { IMovie } from "../../interface/IMovie";
import { ISearchCond } from "../../interface/ISearchCond";

export interface IAction<T extends string, P> {
    type: T,
    payload: P
}

export type ActionType = AddMovieAction | DelMovieAction | SetLoadAction | SetCondAction

export type AddMovieAction = IAction<'add_movie', {
    movies: IMovie[],
    total: number
}>
export function createAddMovieAction(movies: IMovie[], total: number): AddMovieAction {
    return {
        type: 'add_movie',
        payload: {
            movies,
            total
        }
    }
}
export type DelMovieAction = IAction<'del_movie', string>
export function createDelMovieAction(id: string): DelMovieAction {
    return {
        type: 'del_movie',
        payload: id
    }
}
export type SetLoadAction = IAction<'set_loading', boolean>
export function createLoadingAction(flag: boolean): SetLoadAction {
    return {
        type: 'set_loading',
        payload: flag
    }
}
export type SetCondAction = IAction<'set_cond', ISearchCond>
export function createSetCondAction(cond: ISearchCond): SetCondAction {
    return {
        type: 'set_cond',
        payload: cond
    }
}
