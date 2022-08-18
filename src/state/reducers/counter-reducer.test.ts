import {
    changeMaxValueActionCreator,
    changeMinValueActionCreator,
    counterReducer,
    incrementValueActionCreator,
    resetValueActionCreator, setValueActionCreator,
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
    let newStoreForCounter = counterReducer(storeForCounter, incrementValueActionCreator())
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
    let newStoreForCounter = counterReducer(storeForCounter, resetValueActionCreator())
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

    let newStoreForCounter = counterReducer(storeForCounter, changeMinValueActionCreator(5))
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

    let newStoreForCounter = counterReducer(storeForCounter, changeMaxValueActionCreator(12))
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

    let newStoreForCounter = counterReducer(storeForCounter, setValueActionCreator())
    expect(newStoreForCounter.currentValue).toBe(newStoreForCounter.minStartedValue)
    expect(newStoreForCounter.status).toBeFalsy()
})