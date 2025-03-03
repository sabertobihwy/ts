//import '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import 'redux-logger'
import logger from 'redux-logger'
import { rootReducer } from './reducer/IRootReducer'
import { thunk } from 'redux-thunk'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger)
})

