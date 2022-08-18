import {combineReducers, createStore} from "redux";
import {counterReducer} from "./state/reducers/counter-reducer";

let rootReducer = combineReducers({
    stateForCounter: counterReducer
})

export type AppCounterStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store