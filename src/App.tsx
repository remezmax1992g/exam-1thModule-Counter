import React, {useCallback,useState} from 'react';
import './App.css';
import {
    changeMaxValue,
    changeMinValue,
    incrementValue,
    resetValue, setValue,
} from "./redux/reducer/counter-reducer";
import CounterWithSettingUpdate from "./CounterWithSettingUpdate/CounterWithSettingUpdate";
import CounterWithSetting from "./CounterWithSetting/CounterWithSetting";
import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "./redux/hook/hook";

function App() {
    const[isMode, setMode] = useState<boolean>(true)
    //React-Redux
    const dispatch = useAppDispatch()
    const stateCounter = useAppSelector(state => state.stateForCounter)
   /* useEffect(() => {
        dispatch(getValuesFromLocalStorageTC())
    },[])
    useEffect(() => {
        dispatch(setValuesToLocalStorageTC())
    }, [stateCounter.currentValue, stateCounter.minStartedValue, stateCounter.maxStartedValue])*/
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


