import React from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";

type SettingType = {
    maxNumber: number
    minNumber: number
    error: boolean
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
                           error={props.error}/>
                </div>
                <div className={"screen-input"}>
                    <span>Start Value:</span>
                    <Input onChangeCallBack={props.onChangeMinCallBack}
                           startValue={props.minNumber}
                           error={props.error}/>
                </div>
            </div>
            <div className={"button"}>
                <Button nameButton={"set"}
                        onClickCallBack={props.onClickCallBack}
                        disabled={props.error || !props.status}/>
            </div>
        </div>
    );
};

export default Setting;
