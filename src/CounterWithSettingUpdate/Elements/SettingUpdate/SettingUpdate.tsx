import React from 'react';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {NavLink} from "react-router-dom";
import styles from"./SettingUpdate.module.css"


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
            <div className={styles.screenSettingUpdate}>
                <div className={styles.screenInput}>
                    <span>Max value:</span>
                    <Input onChangeCallBack={props.onChangeMaxCallBack}
                           startValue={props.maxNumber}
                           error={props.error}/>
                </div>
                <div className={styles.screenInput}>
                    <span>Start Value:</span>
                    <Input onChangeCallBack={props.onChangeMinCallBack}
                           startValue={props.minNumber}
                           error={props.error}/>
                </div>
            </div>
            <div className={styles.screenSettingButton}>
                <NavLink to={"/Counter"}><Button nameButton={"set"}
                           onClickCallBack={props.onClickCallBack}
                           disabled={props.error || !props.status}/></NavLink>
            </div>
        </div>
    );
};

export default SettingUpdate;
