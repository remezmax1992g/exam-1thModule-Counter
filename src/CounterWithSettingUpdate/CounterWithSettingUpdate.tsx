import React from 'react';
import SettingUpdate from "./Elements/SettingUpdate/SettingUpdate";
import CounterUpdate from "./Elements/CounterUpdate/CounterUpdate";
import {Navigate, Route, Routes} from "react-router-dom";
import styles from "./CounterWithSettingUpdate.module.css"
import {StoreForCounterType} from "../state/reducers/counter-reducer";


type CounterWithSettingUpdateType = {
    store: StoreForCounterType
    onClickIncCallback: () => void
    onClickResetCallback: () => void
    onChangeMaxCallBack: (value: number) => void
    onChangeMinCallBack: (value: number) => void
    onClickSetCallBack: () => void

}

const CounterWithSettingUpdate = (props: CounterWithSettingUpdateType) => {
    return (
        <Routes>
            <Route path={"*"} element={<Navigate to={"Counter"}/>}/>
            <Route path={"/Setting"}
                   element={<div className={styles.settingUpdate}><SettingUpdate maxValue={props.store.maxStartedValue}
                                                                                 minValue={props.store.minStartedValue}
                                                                                 error={props.store.error}
                                                                                 status={props.store.status}
                                                                                 onChangeMaxCallBack={props.onChangeMaxCallBack}
                                                                                 onChangeMinCallBack={props.onChangeMinCallBack}
                                                                                 onClickCallBack={props.onClickSetCallBack}/>
                   </div>}/>
            <Route path={"/Counter"} element={<div className={styles.counterUpdate}><CounterUpdate currentValue={props.store.currentValue}
                                                                                                  maxValue={props.store.maxStartedValue}
                                                                                                  minValue={props.store.minStartedValue}
                                                                                                  status={props.store.status}
                                                                                                  error={props.store.error}
                                                                                                  onClickIncCallback={props.onClickIncCallback}
                                                                                                  onClickResetCallback={props.onClickResetCallback}/>
            </div>}/>
        </Routes>
    );
};

export default CounterWithSettingUpdate;