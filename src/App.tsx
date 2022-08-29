import React, {useCallback, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppCounterStateType} from "./Redux";
import {
    changeMaxValue,
    changeMinValue,
    incrementValue,
    resetValue, setValue,
    StoreForCounterType
} from "./state/reducers/counter-reducer";
import CounterWithSettingUpdate from "./CounterWithSettingUpdate/CounterWithSettingUpdate";
import CounterWithSetting from "./CounterWithSetting/CounterWithSetting";
import {Button} from "@mui/material";

function App() {
    const[isMode, setMode] = useState<boolean>(true)
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
    //React-Redux
    const dispatch = useDispatch()
    const stateCounter = useSelector<AppCounterStateType, StoreForCounterType>(state => state.stateForCounter)
    //Function
    const onClickIncHandler = useCallback(() => {
        dispatch(incrementValue())
    }, [dispatch])
    const onClickResetHandler = useCallback(() => {
        dispatch(resetValue())
    }, [dispatch])
    const onChangeMaxNumberHandler = useCallback((maxValue: number) => {
        dispatch(changeMaxValue(maxValue))
    }, [dispatch])
    const onChangeMinNumberHandler = useCallback((minValue: number) => {
        dispatch(changeMinValue(minValue))
    }, [dispatch])
    const onClickSetHandler = useCallback(() => {
        dispatch(setValue())
    }, [dispatch])
    const setModeForCounter = () => {
        setMode(!isMode)
    }
    return (
        <div className="App">
            <div className="change-mode"><Button variant="contained" color="success" onClick={setModeForCounter}>ChangeMode</Button></div>
            {isMode
                ? <CounterWithSetting store={stateCounter}
                                      onClickIncCallback={onClickIncHandler}
                                      onClickResetCallback={onClickResetHandler}
                                      onChangeMaxCallBack={onChangeMaxNumberHandler}
                                      onChangeMinCallBack={onChangeMinNumberHandler}
                                      onClickSetCallBack={onClickSetHandler}/>
                : <CounterWithSettingUpdate store={stateCounter}
                                            onClickIncCallback={onClickIncHandler}
                                            onClickResetCallback={onClickResetHandler}
                                            onChangeMaxCallBack={onChangeMaxNumberHandler}
                                            onChangeMinCallBack={onChangeMinNumberHandler}
                                            onClickSetCallBack={onClickSetHandler}/>}


        </div>
    );
}

export default App;


