import {
    changeMaxValue,
    changeMinValue,
    counterReducer,
    incrementValue,
    resetValue, setValue,
    StoreForCounterType
} from "./counter-reducer";
test("value should be incremented", () => {
    let storeForCounter: StoreForCounterType = {
        minStartedValue: 0,
        maxStartedValue: 5,
        currentValue: 0,
        error: false,
        status: false
    }
    let newStoreForCounter = counterReducer(storeForCounter, incrementValue())
    expect(newStoreForCounter.currentValue).toBe(1)
})
test("value should be reset", () => {
    let storeForCounter: StoreForCounterType = {
        minStartedValue: 0,
        maxStartedValue: 5,
        currentValue: 0,
        error: false,
        status: false
    }
    let newStoreForCounter = counterReducer(storeForCounter, resetValue())
    expect(newStoreForCounter.currentValue).toBe(newStoreForCounter.minStartedValue)
})
test("minValue should be changed", () => {
    let storeForCounter: StoreForCounterType = {
        minStartedValue: 0,
        maxStartedValue: 5,
        currentValue: 0,
        error: false,
        status: false
    }

    let newValue = 5

    let newStoreForCounter = counterReducer(storeForCounter, changeMinValue(5))
    expect(newStoreForCounter.minStartedValue).toBe(newValue)
    expect(newStoreForCounter.status).toBeTruthy()
})
test("maxValue should be changed", () => {
    let storeForCounter: StoreForCounterType = {
        minStartedValue: 0,
        maxStartedValue: 5,
        currentValue: 0,
        error: false,
        status: false
    }

    let newValue = 12

    let newStoreForCounter = counterReducer(storeForCounter, changeMaxValue(12))
    expect(newStoreForCounter.maxStartedValue).toBe(newValue)
    expect(newStoreForCounter.status).toBeTruthy()
})
test("value should be set", () => {
    let storeForCounter: StoreForCounterType = {
        minStartedValue: 0,
        maxStartedValue: 5,
        currentValue: 0,
        error: false,
        status: false
    }

    let newStoreForCounter = counterReducer(storeForCounter, setValue())
    expect(newStoreForCounter.currentValue).toBe(newStoreForCounter.minStartedValue)
    expect(newStoreForCounter.status).toBeFalsy()
})