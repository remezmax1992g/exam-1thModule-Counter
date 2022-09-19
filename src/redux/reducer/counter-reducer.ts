//Constants
const INCREMENT_VALUE = "INCREMENT-VALUE"
const RESET_VALUE = "RESET-VALUE"
const SET_VALUE = "SET-VALUE"
const CHANGE_MIN_VALUE = "CHANGE-MIN-VALUE"
const CHANGE_MAX_VALUE = "CHANGE-MAX-VALUE"
const SET_VALUES_FROM_LOCAL_STORAGE = "SET-VALUES-FROM-LOCAL-STORAGE"
//ActionType
type IncrementValueActionCreatorType = ReturnType<typeof incrementValue>
type ResetValueActionCreatorType = ReturnType<typeof resetValue>
type SetValueActionCreatorType = ReturnType<typeof setValue>
type ChangeMinValueActionCreatorType = ReturnType<typeof changeMinValue>
type ChangeMaxValueActionCreatorType = ReturnType<typeof changeMaxValue>
type SetValuesFromLocalStorageActionCreatorType = ReturnType<typeof setValuesFromLocalStorage>
export type CommonActionForCounterType =
    IncrementValueActionCreatorType
    | ResetValueActionCreatorType
    | SetValueActionCreatorType
    | ChangeMinValueActionCreatorType
    | ChangeMaxValueActionCreatorType
    | SetValuesFromLocalStorageActionCreatorType
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

export const counterReducer = (state: StoreForCounterType = initialStoreForCounter, action: CommonActionForCounterType): StoreForCounterType => {
    switch (action.type) {
        case INCREMENT_VALUE:
            if (state.currentValue < state.maxStartedValue) {
                return {...state, currentValue: state.currentValue + 1, error: false}
            } else {
                return {...state, error: true}
            }
        case RESET_VALUE:
            return {...state, currentValue: state.minStartedValue}
        case CHANGE_MIN_VALUE:
            if (action.payload.minValue >= 0 && action.payload.minValue < state.maxStartedValue) {
                return {...state, minStartedValue: action.payload.minValue, status: true, error: false}
            } else {
                return {...state, minStartedValue: action.payload.minValue, status: true, error: true}
            }
        case CHANGE_MAX_VALUE:
            if (action.payload.maxValue > state.minStartedValue) {
                return {...state, maxStartedValue: action.payload.maxValue, error: false, status: true}
            } else {
                return {...state, maxStartedValue: action.payload.maxValue, error: true, status: true}
            }
        case SET_VALUE:
            return {...state, currentValue: state.minStartedValue, status: false}
        case SET_VALUES_FROM_LOCAL_STORAGE:
            return {
                ...state,
                currentValue: action.payload.currentValue,
                minStartedValue: action.payload.minValue,
                maxStartedValue: action.payload.maxValue
            }
        default:
            return state
    }
}

//actionCreators
export const incrementValue = () => {
    return {
        type: INCREMENT_VALUE
    } as const
}
export const resetValue = () => {
    return {
        type: RESET_VALUE
    } as const
}
export const setValue = () => {
    return {
        type: SET_VALUE,
    } as const
}
export const changeMinValue = (minValue: number) => {
    return {
        type: CHANGE_MIN_VALUE,
        payload: {minValue}
    } as const
}
export const changeMaxValue = (maxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {maxValue}
    } as const
}
export const setValuesFromLocalStorage = (currentValue: number, maxValue: number, minValue: number) => {
    return {
        type: SET_VALUES_FROM_LOCAL_STORAGE,
        payload: {currentValue, maxValue, minValue}
    }
}
//thunks
/*
export const setValuesToLocalStorageTC = (): AppThunk => (dispatch: Dispatch, getState: () => AppCounterStateType) => {
    const currentValueLC = getState().stateForCounter.currentValue
    const maxValueLC = getState().stateForCounter.maxStartedValue
    const minValueLC = getState().stateForCounter.minStartedValue
    localStorage.setItem("currentValue", JSON.stringify(currentValueLC))
    localStorage.setItem("maxValue", JSON.stringify(maxValueLC))
    localStorage.setItem("mintValue", JSON.stringify(minValueLC))
}
export const getValuesFromLocalStorageTC = (): AppThunk => (dispatch: Dispatch) => {
    let currentValueAsString = localStorage.getItem("currentValue")
    let maxValueAsString = localStorage.getItem("maxValue")
    let minValueAsString = localStorage.getItem("mintValue")
    if (currentValueAsString && maxValueAsString && minValueAsString) {
        let newCurrentValue = JSON.parse(currentValueAsString)
        let newMaxValue = JSON.parse(maxValueAsString)
        let newMinValue = JSON.parse(currentValueAsString)
        dispatch(setValuesFromLocalStorage(newCurrentValue, newMaxValue, newMinValue))
    }

}*/
