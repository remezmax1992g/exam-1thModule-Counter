import React from 'react';
import Setting from "./Elements/Setting/Setting";
import Counter from "./Elements/Counter/Counter";
import styles from "./CounterWithSetting.module.css"
import {StoreForCounterType} from "../state/reducers/counter-reducer";

type CounterWithSettingType = {
    store: StoreForCounterType
    onClickInc: () => void
    onClickReset: () => void
    onChangeMaxCallBack: (value: number) => void
    onChangeMinCallBack: (value: number) => void
    onClickCallBack: () => void

}

const CounterWithSetting = (props: CounterWithSettingType) => {
    return (
        <div className={styles.device}>
            <span className={styles.setting}>
            <Setting maxNumber={props.store.maxStartedValue}
                     minNumber={props.store.minStartedValue}
                     error={props.store.error}
                     status={props.store.status}
                     onChangeMaxCallBack={props.onChangeMaxCallBack}
                     onChangeMinCallBack={props.onChangeMinCallBack}
                     onClickCallBack={props.onClickCallBack}/>
            </span>
            <span className={styles.counter}>
                <Counter number={props.store.currentValue}
                         maxNumber={props.store.maxStartedValue}
                         minNumber={props.store.minStartedValue}
                         status={props.store.status}
                         error={props.store.error}
                         onClickInc={props.onClickInc}
                         onClickReset={props.onClickReset}/>
            </span>
        </div>
    );
};

export default CounterWithSetting;