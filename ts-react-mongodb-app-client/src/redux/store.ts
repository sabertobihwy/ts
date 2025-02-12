//import '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducer/MovieReducer'
import 'redux-logger'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
