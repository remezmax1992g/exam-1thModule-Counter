import React from 'react';
import styles from "./CounterWithSetting.module.css"
import {CounterContainer} from "./Elements/Counter/CounterContainer";
import {SettingContainer} from "./Elements/Setting/SettingContainer";

const CounterWithSetting = () => {
    return (
        <div className={styles.device}>
            <span className={styles.setting}>
            <SettingContainer/>
            </span>
            <span className={styles.counter}>
                <CounterContainer/>
            </span>
        </div>
    );
};

export default CounterWithSetting;