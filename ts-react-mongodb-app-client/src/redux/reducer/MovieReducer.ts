import { IMovie } from "../../interface/IMovie"
import { ISearchCond } from "../../interface/ISearchCond"
import { Action, Reducer } from "redux"
import { ActionType } from "../action/CreateAction"


export type ISearchCondRequired = Required<ISearchCond>

export interface IMovieState {
    data: IMovie[]
    searchCondition: ISearchCondRequired,
    total: number
    isLoading: boolean
    totalPage: number
}

const initState: IMovieState = {
    data: [],
    searchCondition: {
        page: 1,
        limit: 10,
        key: ""
    },
    total: 0,
    isLoading: false,
    totalPage: 0
}

export type MovieReducer<A extends Action> = Reducer<IMovieState, A>

export const movieReducer: MovieReducer<ActionType> = function (prevS: IMovieState = initState, action: ActionType) {
    switch (action.type) {
        case 'add_movie':
            return {
                ...prevS,
                data: action.payload.movies,
                total: action.payload.total,
                totalPage: Math.ceil(action.payload.total / prevS.searchCondition.limit)
            }

        case 'del_movie':
            return {
                ...prevS,
                data: prevS.data.filter(d => d._id! !== action.payload),
                total: prevS.total - 1,
                totalPage: Math.ceil((prevS.total - 1) / prevS.searchCondition.limit)
            }
        case 'set_loading':
            return {
                ...prevS,
                isLoading: action.payload
            }
        case 'set_cond':
            return {
                ...prevS,
                searchCondition: {
                    ...prevS.searchCondition,
                    ...action.payload
                }


            }
        default:
            return prevS
    }
}
