import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Setting from "./components/Setting";

function App() {
    //data
    let minValue = 0;
    let maxValue = 5;
    //state
    let [minNumber, setMinNumber] = useState<number>(minValue);
    let [maxNumber, setMaxNumber] = useState<number>(maxValue);
    let [number, setNumber] = useState<number>(minNumber)
    let [errorForMin, setErrorForMin] = useState<boolean>(false)
    let [errorForMax, setErrorForMax] = useState<boolean>(false)
    let [status, setStatus] = useState<boolean>(false)

    //minLocalStorage
    useEffect(() => {
        localStorage.setItem("minNumber", JSON.stringify(minNumber))
    }, [minNumber])
    useEffect(() => {
        let numberAsString = localStorage.getItem("minNumber")
        if (numberAsString) {
            let newMinNumber = JSON.parse(numberAsString)
            setMinNumber(newMinNumber)
        }
    }, [])
    //maxLocalStorage
    useEffect(() => {
        localStorage.setItem("maxNumber", JSON.stringify(maxNumber))
    }, [maxNumber])
    useEffect(() => {
        let numberAsString = localStorage.getItem("maxNumber")
        if (numberAsString) {
            let newMaxNumber = JSON.parse(numberAsString)
            setMaxNumber(newMaxNumber)
        }
    }, [])
    //function
    const onClickInc = () => {
        if (number < maxNumber) {
            setNumber(++number)
        }
    }
    const onClickReset = () => {
        setNumber(minNumber)
    }
    const onChangeMaxNumber = (value: number) => {
        setStatus(true)
        setMaxNumber(value)
        if (value > minNumber) {
            errorForMax && setErrorForMax(false)
            errorForMin && setErrorForMin(false)
        } else {
            setErrorForMax(true)
            setErrorForMin(true)
        }
    }
    const onChangeMinNumber = (value: number) => {
        setStatus(true)
        setMinNumber(value)
        if (value >= 0 && value < maxNumber) {
            errorForMin && setErrorForMin(false)
            errorForMax && setErrorForMax(false)
        } else {
            setErrorForMin(true)
            setErrorForMax(true)
        }
    }
    const onClickSet = () => {
        setStatus(false)
        setNumber(minNumber)

    }
    //UI
    return (
        <div className="App">
            <span className={"Setting"}>
                <Setting maxNumber={maxNumber}
                         minNumber={minNumber}
                         errorForMax={errorForMax}
                         errorForMin={errorForMin}
                         status={status}
                         onChangeMaxCallBack={onChangeMaxNumber}
                         onChangeMinCallBack={onChangeMinNumber}
                         onClickCallBack={onClickSet}/>
            </span>
            <span className={"Counter"}>
                <Counter number={number}
                         maxNumber={maxNumber}
                         minNumber={minNumber}
                         status={status}
                         errorForMax={errorForMax}
                         errorForMin={errorForMin}
                         onClickInc={onClickInc}
                         onClickReset={onClickReset}/>
            </span>
        </div>
    );
}

export default App;


