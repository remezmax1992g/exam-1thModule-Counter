import React from 'react';
import Input from "../../../components/Input";
import {NavLink} from "react-router-dom";
import styles from"./SettingUpdate.module.css"
import UniversalButton from "../../../components/UniversalButton";


type SettingUpdateType = {
    maxValue: number
    minValue: number
    error: boolean
    status: boolean
    onChangeMaxCallBack: (setPoint: number) => void
    onChangeMinCallBack: (setPoint: number) => void
    onClickCallBack: () => void
}

const SettingUpdate = (props: SettingUpdateType) => {
    return (
        <div>
            <div className={styles.screenSettingUpdate}>
                <div className={styles.screenInput}>
                    <span>Max value:</span>
                    <Input onChangeCallBack={props.onChangeMaxCallBack}
                           startValue={props.maxValue}
                           error={props.error}/>
                </div>
                <div className={styles.screenInput}>
                    <span>Start Value:</span>
                    <Input onChangeCallBack={props.onChangeMinCallBack}
                           startValue={props.minValue}
                           error={props.error}/>
                </div>
            </div>
            <div className={styles.screenSettingButton}>
                <NavLink to={"/Counter"}><UniversalButton nameButton={"set"}
                           onClickCallBack={props.onClickCallBack}
                           disabled={props.error || !props.status}/></NavLink>
            </div>
        </div>
    );
};

export default SettingUpdate;
