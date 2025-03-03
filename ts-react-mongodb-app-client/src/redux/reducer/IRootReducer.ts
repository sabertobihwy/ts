import { combineReducers } from "redux"
import { IMovieState, movieReducer } from "./MovieReducer"


export interface IRootState {
    movie: IMovieState
}

export const rootReducer = combineReducers({
    movie: movieReducer
})