import React from 'react';
import './App.css';
import CounterWithSetting from "./CounterWithSetting/CounterWithSetting";
import {BrowserRouter} from "react-router-dom";

function App() {
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
    //UI
    return (
        <BrowserRouter>
            <div className="App">
            <CounterWithSetting/>
                {/*<CounterWithSettingUpdate store={storeCounter}
                                          onClickInc={onClickInc}
                                          onClickReset={onClickReset}
                                          onChangeMaxCallBack={onChangeMaxNumber}
                                          onChangeMinCallBack={onChangeMinNumber}
                                          onClickCallBack={onClickSet}/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;


