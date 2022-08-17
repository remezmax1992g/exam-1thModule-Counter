import React from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import {NavLink} from "react-router-dom";


type SettingType = {
    maxNumber: number
    minNumber: number
    error: boolean
    status: boolean
    onChangeMaxCallBack: (setPoint: number) => void
    onChangeMinCallBack: (setPoint: number) => void
    onClickCallBack: () => void
}

const SettingUpdate = (props: SettingType) => {
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
                <NavLink to={"/Counter"}><Button nameButton={"set"}
                           onClickCallBack={props.onClickCallBack}
                           disabled={props.error || !props.status}/></NavLink>
            </div>
        </div>
    );
};

export default SettingUpdate;
