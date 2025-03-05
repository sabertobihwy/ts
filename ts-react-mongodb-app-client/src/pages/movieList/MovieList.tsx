import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieDisplay, { EventState } from '../../component/MovieDisplay'
import { Dispatch } from 'redux'
import { ActionType, createAction } from '../../redux/action/CreateAction'
import { IMovie } from '../../interface/IMovie'
import { IRootState } from '../../redux/reducer/IRootReducer'
import { MovieService } from '../../service/MovieService'
import { SwtichTypes } from '../../interface/CommonTypes'

function mapStateToProps(state: IRootState) {
    return state.movie
}

function mapDispatchToProps(dispatch: Dispatch<ActionType>): EventState {
    return {
        onLoading: () => {
            dispatch(createAction.fetchMovies({ page: 1 }) as any)
        },
        onSwitchChange: (checked: boolean, type: SwtichTypes, id: string) => {
            dispatch(createAction.switchMovieTypeAsync({
                id: id,
                field: type,
                checked
            }) as any)
        },
        onPageChange: (page, pageSize) => {
            dispatch(createAction.fetchMovies({
                page,
                limit: pageSize
            }) as any)
        },
        onDelete: async (id: string) => {
            await dispatch(createAction.deleteMovie(id) as any)
        },
        onKeyChange: (key: string) => {
            dispatch(createAction.createSetCondAction({ key }))
        },
        onSearch: () => {
            dispatch(createAction.fetchMovies({
                page: 1
            }) as any)
        },
        onReset: () => {
            dispatch(createAction.createSetCondAction({ key: "" }))
            dispatch(createAction.fetchMovies({
                page: 1
            }) as any)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisplay)


