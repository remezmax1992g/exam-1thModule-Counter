import React from 'react';
import Input from "./Input";
import Button from "./Button";

type SettingType = {
    maxNumber: number
    minNumber: number
    errorForMax: boolean
    errorForMin: boolean
    status: boolean
    onChangeMaxCallBack: (setPoint: number) => void
    onChangeMinCallBack: (setPoint: number) => void
    onClickCallBack: () => void
}

const Setting = (props: SettingType) => {
    return (
        <div>
            <div className={"screen"}>
                <div className={"screen-input"}>
                    <span>Max value:</span>
                    <Input onChangeCallBack={props.onChangeMaxCallBack}
                           startValue={props.maxNumber}
                           error={props.errorForMax}/>
                </div>
                <div className={"screen-input"}>
                    <span>Start Value:</span>
                    <Input onChangeCallBack={props.onChangeMinCallBack}
                           startValue={props.minNumber}
                           error={props.errorForMin}/>
                </div>
            </div>
            <div className={"button"}>
                <Button nameButton={"set"}
                        onClickCallBack={props.onClickCallBack}
                        disabled={props.errorForMin || props.errorForMax || !props.status}/>
            </div>
        </div>
    );
};

export default Setting;
