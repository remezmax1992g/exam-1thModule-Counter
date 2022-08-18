import React, {useEffect, useState} from 'react';
import './App.css';
import CounterWithSetting from "./CounterWithSetting/CounterWithSetting";
import CounterWithSettingUpdate from "./CounterWithSettingUpdate/CounterWithSettingUpdate";
import {BrowserRouter} from "react-router-dom";

function App() {
    //data
    const minValue = 0;
    const maxValue = 5;
    //state
    let [minNumber, setMinNumber] = useState<number>(minValue);
    let [maxNumber, setMaxNumber] = useState<number>(maxValue);
    let [number, setNumber] = useState<number>(minNumber)
    let [error, setError] = useState<boolean>(false)
    let [status, setStatus] = useState<boolean>(false)

    //minLocalStorage
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
    //function
    const onClickInc = () => {
        if (number < maxNumber) {
            setNumber(number + 1)
        }
    }
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
    }, [number])

    const onClickReset = () => {
        setNumber(minNumber)
    }
    const onChangeMaxNumber = (value: number) => {
        setStatus(true)
        setMaxNumber(value)
        if (value > minNumber) {
            error && setError(false)

        } else {
            setError(true)
        }
    }
    const onChangeMinNumber = (value: number) => {
        setStatus(true)
        setMinNumber(value)
        if (value >= 0 && value < maxNumber) {
            error && setError(false)
        } else {
            setError(true)
        }
    }
    const onClickSet = () => {
        setStatus(false)
        setNumber(minNumber)

    }
    //UI
    return (
        <BrowserRouter>
            <span className="App">
            <CounterWithSetting number={number}
                                maxNumber={maxNumber}
                                minNumber={minNumber}
                                error={error}
                                status={status}
                                onClickInc={onClickInc}
                                onClickReset={onClickReset}
                                onChangeMaxCallBack={onChangeMaxNumber}
                                onChangeMinCallBack={onChangeMinNumber}
                                onClickCallBack={onClickSet}/>
                {/*<CounterWithSettingUpdate number={number}
                                          maxNumber={maxNumber}
                                          minNumber={minNumber}
                                          error={error}
                                          status={status}
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


