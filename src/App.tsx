import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Setting from "./components/Setting";

function App() {
    //data
    let [minNumber, setMinNumber] = useState<number>(0);
    let [maxNumber, setMaxNumber] = useState<number>(5);
    let [number, setNumber] = useState<number>(minNumber)
    let [errorForMin, setErrorForMin] = useState<boolean>(false)
    let [errorForMax, setErrorForMax] = useState<boolean>(false)

    //
    /*useEffect(() => {let numberAsString = localStorage.getItem("minNumber")
        if (numberAsString) {
            let newMinNumber = JSON.parse(numberAsString)
            setMinNumber(newMinNumber)}}, [])
    useEffect(() => {localStorage.setItem("minNumber", JSON.stringify(minNumber))}, [minNumber])
*/
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
        if (value > minNumber) {
            maxNumber = value
            errorForMax && setErrorForMax(false)
        } else {
            setErrorForMax(true)
        }
    }
    const onChangeMinNumber = (value: number) => {
        if (value >= 0) {
            minNumber = value
            errorForMin && setErrorForMin(false)
        } else {
            setErrorForMin(true)
        }
    }

    const onClickSet = () => {
        setMaxNumber(maxNumber)
        setMinNumber(minNumber)
        setNumber(minNumber)

    }
    //UI
    return (
        <div className="App">
            <span className={"Setting"}>
                <Setting errorForMax={errorForMax}
                         errorForMin={errorForMin}
                         onChangeMaxCallBack={onChangeMaxNumber}
                         onChangeMinCallBack={onChangeMinNumber}
                         onClickCallBack={onClickSet}/>
            </span>
            <span className={"Counter"}>
                <Counter number={number}
                         maxNumber={maxNumber}
                         minNumber={minNumber}
                         errorForMax={errorForMax}
                         errorForMin={errorForMin}
                         onClickInc={onClickInc}
                         onClickReset={onClickReset}/>
            </span>
        </div>
    );
}

export default App;


