import React from 'react';
import Setting from "./Elements/Setting";
import Counter from "./Elements/Counter";

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
        <div>
            <div className={"Setting"}>
            <Setting maxNumber={props.maxNumber}
                     minNumber={props.minNumber}
                     error={props.error}
                     status={props.status}
                     onChangeMaxCallBack={props.onChangeMaxCallBack}
                     onChangeMinCallBack={props.onChangeMinCallBack}
                     onClickCallBack={props.onClickCallBack}/>
            </div>
            <div className={"Counter"}>
                <Counter number={props.number}
                         maxNumber={props.maxNumber}
                         minNumber={props.minNumber}
                         status={props.status}
                         error={props.error}
                         onClickInc={props.onClickInc}
                         onClickReset={props.onClickReset}/>
            </div>
        </div>
    );
};

export default CounterWithSetting;