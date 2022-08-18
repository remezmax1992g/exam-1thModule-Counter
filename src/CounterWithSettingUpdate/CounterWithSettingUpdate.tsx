import React from 'react';
import SettingUpdate from "./Elements/SettingUpdate/SettingUpdate";
import CounterUpdate from "./Elements/CounterUpdate/CounterUpdate";
import {Navigate, Route, Routes} from "react-router-dom";
import styles from "./CounterWithSettingUpdate.module.css"
import {StoreForCounterType} from "../state/reducers/counter-reducer";


type CounterWithSettingTypeUpdate = {
    store: StoreForCounterType
    onClickInc: () => void
    onClickReset: () => void
    onChangeMaxCallBack: (value: number) => void
    onChangeMinCallBack: (value: number) => void
    onClickCallBack: () => void

}

const CounterWithSetting = (props: CounterWithSettingTypeUpdate) => {
    return (
        <Routes>
            <Route path={"/"} element={<Navigate to={"Counter"}/>}/>
            <Route path={"Setting"}
                   element={<div className={styles.settingUpdate}><SettingUpdate maxNumber={props.store.maxStartedValue}
                                                                                 minNumber={props.store.minStartedValue}
                                                                                 error={props.store.error}
                                                                                 status={props.store.status}
                                                                                 onChangeMaxCallBack={props.onChangeMaxCallBack}
                                                                                 onChangeMinCallBack={props.onChangeMinCallBack}
                                                                                 onClickCallBack={props.onClickCallBack}/>
                   </div>}/>
            <Route path={"Counter"} element={<div className={styles.counterUpdate}><CounterUpdate number={props.store.currentValue}
                                                                                                  maxNumber={props.store.maxStartedValue}
                                                                                                  minNumber={props.store.minStartedValue}
                                                                                                  status={props.store.status}
                                                                                                  error={props.store.error}
                                                                                                  onClickInc={props.onClickInc}
                                                                                                  onClickReset={props.onClickReset}/>
            </div>}/>
        </Routes>
    );
};

export default CounterWithSetting;