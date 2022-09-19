import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {CommonActionForCounterType, counterReducer} from "./reducer/counter-reducer";
import thunkMiddleWare, {ThunkAction, ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
    stateForCounter: counterReducer
})

export type AppCounterStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppCounterStateType, unknown, CommonActionForCounterType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppCounterStateType, unknown, CommonActionForCounterType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store

// @ts-ignore
window.store = store