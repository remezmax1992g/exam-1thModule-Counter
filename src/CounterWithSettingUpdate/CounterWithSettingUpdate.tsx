import React from 'react';
import SettingUpdate from "./Elements/SettingUpdate/SettingUpdate";
import CounterUpdate from "./Elements/CounterUpdate/CounterUpdate";
import {Navigate, Route, Routes} from "react-router-dom";
import styles from "./CounterWithSettingUpdate.module.css"


type CounterWithSettingTypeUpdate = {
    number: number
    maxNumber: number
    minNumber: number
    error: boolean
    status: boolean
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
                   element={<div className={styles.settingUpdate}><SettingUpdate maxNumber={props.maxNumber}
                                                                                 minNumber={props.minNumber}
                                                                                 error={props.error}
                                                                                 status={props.status}
                                                                                 onChangeMaxCallBack={props.onChangeMaxCallBack}
                                                                                 onChangeMinCallBack={props.onChangeMinCallBack}
                                                                                 onClickCallBack={props.onClickCallBack}/>
                   </div>}/>
            <Route path={"Counter"} element={<div className={styles.counterUpdate}><CounterUpdate number={props.number}
                                                                                                  maxNumber={props.maxNumber}
                                                                                                  minNumber={props.minNumber}
                                                                                                  status={props.status}
                                                                                                  error={props.error}
                                                                                                  onClickInc={props.onClickInc}
                                                                                                  onClickReset={props.onClickReset}/>
            </div>}/>
        </Routes>
    );
};

export default CounterWithSetting;