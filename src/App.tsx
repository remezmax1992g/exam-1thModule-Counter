import React, {useEffect, useReducer} from 'react';
import './App.css';
import CounterWithSetting from "./CounterWithSetting/CounterWithSetting";
import CounterWithSettingUpdate from "./CounterWithSettingUpdate/CounterWithSettingUpdate";
import {BrowserRouter} from "react-router-dom";
import {
    changeMaxValueActionCreator, changeMinValueActionCreator,
    counterReducer,
    incrementValueActionCreator,
    resetValueActionCreator, setValueActionCreator,
    StoreForCounterType
} from "./state/reducers/counter-reducer";

function App() {
    //data
    let storeForCounter: StoreForCounterType = {
        minStartedValue: 0,
        maxStartedValue: 5,
        currentValue: 0,
        error: false,
        status: false
    }
    //state
    let [storeCounter, storeCounterDispatch] = useReducer(counterReducer, storeForCounter)
    /*//minLocalStorage
    useEffect(() => {
        let numberAsString = localStorage.getItem("minNumber")
        if (numberAsString) {
            let newMinNumber = JSON.parse(numberAsString)
            setMinNumber(newMinNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("minNumber", JSON.stringify(minNumber))
    }, [minNumber])
    //maxLocalStorage
    useEffect(() => {
        let numberAsString = localStorage.getItem("maxNumber")
        if (numberAsString) {
            let newMaxNumber = JSON.parse(numberAsString)
            setMaxNumber(newMaxNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("maxNumber", JSON.stringify(maxNumber))
    }, [maxNumber])
    //numberLocalStorage
    useEffect(() => {
        let numberAsString = localStorage.getItem("number")
        if (numberAsString) {
            let newNumber = JSON.parse(numberAsString)
            setNumber(newNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("number", JSON.stringify(number))
    }, [number])*/
    //function
    const onClickInc = () => {
        storeCounterDispatch(incrementValueActionCreator())
    }
    const onClickReset = () => {
        storeCounterDispatch(resetValueActionCreator())
    }
    const onChangeMaxNumber = (value: number) => {
        storeCounterDispatch(changeMaxValueActionCreator(value))
    }
    const onChangeMinNumber = (value: number) => {
        storeCounterDispatch(changeMinValueActionCreator(value))
    }
    const onClickSet = () => {
        storeCounterDispatch(setValueActionCreator())

    }
    //UI
    return (
        <BrowserRouter>
            <span className="App">
            <CounterWithSetting store={storeCounter}
                                onClickInc={onClickInc}
                                onClickReset={onClickReset}
                                onChangeMaxCallBack={onChangeMaxNumber}
                                onChangeMinCallBack={onChangeMinNumber}
                                onClickCallBack={onClickSet}/>
                {/*<CounterWithSettingUpdate store={storeCounter}
                                          onClickInc={onClickInc}
                                          onClickReset={onClickReset}
                                          onChangeMaxCallBack={onChangeMaxNumber}
                                          onChangeMinCallBack={onChangeMinNumber}
                                          onClickCallBack={onClickSet}/>*/}
            </span>
        </BrowserRouter>
    );
}

export default App;


