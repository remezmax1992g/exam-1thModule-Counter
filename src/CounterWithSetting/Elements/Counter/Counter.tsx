import React from "react"
import '../../../App.css';
import styles from"./Counter.module.css"
import UniversalButton from "../../../components/UniversalButton";

type CounterPropsType = {
    //value
    currentValue: number
    maxStartedValue: number
    minStartedValue: number
    error: boolean
    status: boolean
    //function
    onClickIncCallback: () => void
    onClickResetCallback: () => void
}

const Counter = (props: CounterPropsType) => {
    //data
    let textAlarm = "enter values and press 'set'"
    //function
    const OnClickInc = () => {
        props.onClickIncCallback()
    }
    const OnClickReset = () => {
        props.onClickResetCallback()
    }
    //interface
    return (
        <span className={"counter-main"}>
            <div className={styles.screenCounter}>
                {!props.error
                    ? !props.status
                        ? <span
                            className={props.currentValue === props.maxStartedValue ? styles.counterRed : styles.counterDefault}>{props.currentValue}</span>
                        : <span className={styles.textAlarm}>{textAlarm}</span>
                    : <span className={styles.errorTextAlarm}>Incorrect value</span>}
            </div>
            <div className={styles.screenCounterButton}>
                <UniversalButton nameButton={"increment"}
                        onClickCallBack={OnClickInc}
                        disabled={props.currentValue === props.maxStartedValue || props.error || props.status}/>
                <UniversalButton nameButton={"reset"}
                        onClickCallBack={OnClickReset}
                        disabled={props.currentValue === props.minStartedValue || props.error ||  props.status}/>
            </div>
        </span>
    );
};

export default Counter;

