import React from 'react';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "./Setting.module.css"

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
        <span>
            <div className={styles.screenSetting}>
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
                <Button nameButton={"set"}
                        onClickCallBack={props.onClickCallBack}
                        disabled={props.error || !props.status}/>
            </div>
        </span>
    );
};

export default Setting;
