import React from 'react';
import styles from "./CounterWithSetting.module.css"
import {StoreForCounterType} from "../state/reducers/counter-reducer";
import Counter from "./Elements/Counter/Counter";
import Setting from "./Elements/Setting/Setting";

type CounterWithSettingType = {
    store: StoreForCounterType
    onClickIncCallback: () => void
    onClickResetCallback: () => void
    onChangeMaxCallBack: (value: number) => void
    onChangeMinCallBack: (value: number) => void
    onClickSetCallBack: () => void

}

const CounterWithSetting = (props: CounterWithSettingType) => {
    return (
        <div className={styles.device}>
            <span className={styles.setting}>
               <Setting maxStartedValue={props.store.maxStartedValue}
                        minStartedValue={props.store.minStartedValue}
                        error={props.store.error}
                        status={props.store.status}
                        onChangeMaxCallBack={props.onChangeMaxCallBack}
                        onChangeMinCallBack={props.onChangeMinCallBack}
                        onClickSetCallBack={props.onClickSetCallBack}/>
            </span>
            <span className={styles.counter}>
                <Counter currentValue={props.store.currentValue}
                         maxStartedValue={props.store.maxStartedValue}
                         minStartedValue={props.store.minStartedValue}
                         status={props.store.status}
                         error={props.store.error}
                         onClickIncCallback={props.onClickIncCallback}
                         onClickResetCallback={props.onClickResetCallback}/>
            </span>
        </div>
    );
};

export default CounterWithSetting;