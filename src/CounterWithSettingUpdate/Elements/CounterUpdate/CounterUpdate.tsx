import {NavLink} from "react-router-dom";
import styles from "./CounterUpdate.module.css"
import UniversalButton from "../../../components/UniversalButton";

type CounterUpdatePropsType = {
    //value
    currentValue: number
    maxValue: number
    minValue: number
    error: boolean
    status: boolean
    //function
    onClickIncCallback: () => void
    onClickResetCallback: () => void
}

const CounterUpdate = (props: CounterUpdatePropsType) => {
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
        <div className={"counter-main"}>
            <div className={styles.screenCounterUpdate}>
                {!props.error
                    ? !props.status
                        ? <span
                            className={props.currentValue === props.maxValue ? styles.counterRed : styles.counter}>{props.currentValue}</span>
                        : <span className={styles.textAlarm}>{textAlarm}</span>
                    : <span className={"error-text"}>Incorrect value</span>}
            </div>
            <div className={styles.screenCounterButton}>
                <UniversalButton nameButton={"increment"}
                        onClickCallBack={OnClickInc}
                        disabled={props.currentValue === props.maxValue || props.error || props.status}/>
                <NavLink to={"/Setting"}><UniversalButton nameButton={"set"}/></NavLink>
                <UniversalButton nameButton={"reset"}
                        onClickCallBack={OnClickReset}
                        disabled={props.currentValue === props.minValue || props.error || props.status}/>
            </div>
        </div>
    );
};

export default CounterUpdate;

