import { ThunkAction } from "@reduxjs/toolkit";
import { IMovie } from "../../interface/IMovie";
import { ISearchCond } from "../../interface/ISearchCond";
import { IRootState } from "../reducer/IRootReducer";
import { MovieService } from "../../service/MovieService";

export interface IAction<T extends string, P> {
    type: T,
    payload: P
}

export type ActionType = AddMovieAction | DelMovieAction | SetLoadAction | SetCondAction

export type AddMovieAction = IAction<'add_movie', {
    movies: IMovie[],
    total: number
}>
function createAddMovieAction(movies: IMovie[], total: number): AddMovieAction {
    return {
        type: 'add_movie',
        payload: {
            movies,
            total
        }
    }
}
export type DelMovieAction = IAction<'del_movie', string>
function createDelMovieAction(id: string): DelMovieAction {
    return {
        type: 'del_movie',
        payload: id
    }
}
export type SetLoadAction = IAction<'set_loading', boolean>
function createLoadingAction(flag: boolean): SetLoadAction {
    return {
        type: 'set_loading',
        payload: flag
    }
}
export type SetCondAction = IAction<'set_cond', ISearchCond>
function createSetCondAction(cond: ISearchCond): SetCondAction {
    return {
        type: 'set_cond',
        payload: cond
    }
}

function fetchMovies(conditions: ISearchCond): ThunkAction<Promise<void>, IRootState, any, ActionType> {
    return async (dispatch, getState) => {
        dispatch(createLoadingAction(true))
        dispatch(createSetCondAction(conditions))
        const cond = getState().movie.searchCondition
        const result = await MovieService.findMovieByCond(cond)
        dispatch(createAddMovieAction(result.data, result.total))
        dispatch(createLoadingAction(false))
    }
}

function deleteMovie(id: string): ThunkAction<Promise<void>, IRootState, any, ActionType> {
    return async (dispatch) => {
        dispatch(createLoadingAction(true))
        const result = await MovieService.delMovie(id)
        if (result.error === '') {
            dispatch(createDelMovieAction(id))
        }
        dispatch(createLoadingAction(false))
    }
}

export const createAction = {
    createAddMovieAction,
    createDelMovieAction,
    createLoadingAction,
    createSetCondAction,
    fetchMovies,
    deleteMovie

}
