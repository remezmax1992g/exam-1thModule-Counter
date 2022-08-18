//Constants
const INCREMENT_VALUE = "INCREMENT-VALUE"
const RESET_VALUE = "RESET-VALUE"
const SET_VALUE = "SET-VALUE"
const CHANGE_MIN_VALUE = "CHANGE-MIN-VALUE"
const CHANGE_MAX_VALUE = "CHANGE-MAX-VALUE"
//ActionType
type IncrementValueActionCreatorType = ReturnType<typeof incrementValueActionCreator>
type ResetValueActionCreatorType = ReturnType<typeof resetValueActionCreator>
type SetValueActionCreatorType = ReturnType<typeof setValueActionCreator>
type ChangeMinValueActionCreatorType = ReturnType<typeof changeMinValueActionCreator>
type ChangeMaxValueActionCreatorType = ReturnType<typeof changeMaxValueActionCreator>
type CommonActionForCounterType =
    IncrementValueActionCreatorType
    | ResetValueActionCreatorType
    | SetValueActionCreatorType
    | ChangeMinValueActionCreatorType
    | ChangeMaxValueActionCreatorType
//StoreType
export type StoreForCounterType = {
    minStartedValue: number
    maxStartedValue: number
    currentValue: number
    error: boolean
    status: boolean
}

let initialStoreForCounter: StoreForCounterType = {
    minStartedValue: 0,
    maxStartedValue: 5,
    currentValue: 0,
    error: false,
    status: false
}

export const counterReducer = (state: StoreForCounterType = initialStoreForCounter , action: CommonActionForCounterType): StoreForCounterType => {
    switch (action.type) {
        case INCREMENT_VALUE:
            if(state.currentValue < state.maxStartedValue){
            return {...state, currentValue: state.currentValue + 1, error: false}}
            else{
                return {...state, error: true}
            }
        case RESET_VALUE:
            return {...state, currentValue: state.minStartedValue}
        case CHANGE_MIN_VALUE:
            if (action.payload.minValue >= 0 && action.payload.minValue < state.maxStartedValue) {
                return {...state, minStartedValue: action.payload.minValue, status: true, error: false}
            }
            else{
                return {...state, minStartedValue: action.payload.minValue, status: true, error: true}
            }
        case CHANGE_MAX_VALUE:
            if(action.payload.maxValue > state.minStartedValue) {
                return {...state, maxStartedValue: action.payload.maxValue, error: false, status: true}
            }
            else {
                return {...state, maxStartedValue: action.payload.maxValue, error: true, status: true}
            }
        case SET_VALUE:
            return {...state, currentValue: state.minStartedValue, status: false}
        default:
            throw new Error("Action type is undefined")
    }
}

//actionCreators
export const incrementValueActionCreator = () => {
    return {
        type: INCREMENT_VALUE
    } as const
}
export const resetValueActionCreator = () => {
    return {
        type: RESET_VALUE
    } as const
}
export const setValueActionCreator = () => {
    return {
        type: SET_VALUE,
    } as const
}
export const changeMinValueActionCreator = (minValue: number) => {
    return {
        type: CHANGE_MIN_VALUE,
        payload: {minValue}
    } as const
}
export const changeMaxValueActionCreator = (maxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {maxValue}
    } as const
}