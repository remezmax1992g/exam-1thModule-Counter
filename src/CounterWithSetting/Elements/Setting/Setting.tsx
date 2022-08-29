import React from 'react';
import Input from "../../../components/Input";
import styles from "./Setting.module.css"
import UniversalButton from "../../../components/UniversalButton";

type SettingType = {
    maxStartedValue: number
    minStartedValue: number
    error: boolean
    status: boolean
    onChangeMaxCallBack: (setPoint: number) => void
    onChangeMinCallBack: (setPoint: number) => void
    onClickSetCallBack: () => void
}

const Setting = (props: SettingType) => {
    return (
        <span>
            <div className={styles.screenSetting}>
                <div className={styles.screenInput}>
                    <span>Max value:</span>
                    <Input onChangeCallBack={props.onChangeMaxCallBack}
                           startValue={props.maxStartedValue}
                           error={props.error}/>
                </div>
                <div className={styles.screenInput}>
                    <span>Start Value:</span>
                    <Input onChangeCallBack={props.onChangeMinCallBack}
                           startValue={props.minStartedValue}
                           error={props.error}/>
                </div>
            </div>
            <div className={styles.screenSettingButton}>
                <UniversalButton nameButton={"set"}
                        onClickCallBack={props.onClickSetCallBack}
                        disabled={props.error || !props.status}/>
            </div>
        </span>
    );
};

export default Setting;
