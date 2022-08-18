import React from 'react';
import Setting from "./Elements/Setting/Setting";
import Counter from "./Elements/Counter/Counter";
import styles from "./CounterWithSetting.module.css"

type CounterWithSettingType = {
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

const CounterWithSetting = (props: CounterWithSettingType) => {
    return (
        <div className={styles.device}>
            <span className={styles.setting}>
            <Setting maxNumber={props.maxNumber}
                     minNumber={props.minNumber}
                     error={props.error}
                     status={props.status}
                     onChangeMaxCallBack={props.onChangeMaxCallBack}
                     onChangeMinCallBack={props.onChangeMinCallBack}
                     onClickCallBack={props.onClickCallBack}/>
            </span>
            <span className={styles.counter}>
                <Counter number={props.number}
                         maxNumber={props.maxNumber}
                         minNumber={props.minNumber}
                         status={props.status}
                         error={props.error}
                         onClickInc={props.onClickInc}
                         onClickReset={props.onClickReset}/>
            </span>
        </div>
    );
};

export default CounterWithSetting;