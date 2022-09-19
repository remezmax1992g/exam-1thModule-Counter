import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {CommonActionForCounterType, counterReducer} from "./reducer/counter-reducer";
import thunkMiddleWare, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";

let rootReducer = combineReducers({
    stateForCounter: counterReducer
})

export type AppCounterStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppCounterStateType, unknown, CommonActionForCounterType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppCounterStateType, unknown, CommonActionForCounterType>

let store = createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleWare))
store.subscribe(() => {
    saveState({
        stateForCounter: store.getState().stateForCounter
    })
})

export default store

// @ts-ignore
window.store = store