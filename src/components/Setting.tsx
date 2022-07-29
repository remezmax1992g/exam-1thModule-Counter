import React from 'react';
import Input from "./Input";
import Button from "./Button";

type SettingType = {
    errorForMax: boolean,
    errorForMin: boolean,
    onChangeMaxCallBack: (setPoint: number) => void,
    onChangeMinCallBack:(setPoint: number) => void,
    onClickCallBack: () => void
}

const Setting = (props: SettingType) => {
    return (
        <div>
            <div className={"screen"}>
                <div className={"screen-input"}><span>Max value:</span> <Input onChangeCallBack={props.onChangeMaxCallBack} error={props.errorForMax}/></div>
                <div className={"screen-input"}>Start Value: <Input onChangeCallBack={props.onChangeMinCallBack} error={props.errorForMin}/></div>
            </div>
            <div className={"button"}>
                <Button nameButton={"set"} className={"button-common"} onClickCallBack={props.onClickCallBack} disabled={props.errorForMin || props.errorForMax}/>
            </div>
        </div>
    );
};

export default Setting;
