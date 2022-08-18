import React from 'react';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "./Setting.module.css"
import {SettingType} from "./SettingContainer";

const Setting = (props: SettingType) => {
    return (
        <span>
            <div className={styles.screenSetting}>
                <div className={styles.screenInput}>
                    <span>Max value:</span>
                    <Input onChangeCallBack={props.onChangeMaxCallback}
                           startValue={props.state.maxStartedValue}
                           error={props.state.error}/>
                </div>
                <div className={styles.screenInput}>
                    <span>Start Value:</span>
                    <Input onChangeCallBack={props.onChangeMinCallback}
                           startValue={props.state.minStartedValue}
                           error={props.state.error}/>
                </div>
            </div>
            <div className={styles.screenSettingButton}>
                <Button nameButton={"set"}
                        onClickCallBack={props.onClickCallback}
                        disabled={props.state.error || !props.state.status}/>
            </div>
        </span>
    );
};

export default Setting;
