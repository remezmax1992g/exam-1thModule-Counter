import Button from "../../../components/Button";
import '../../../App.css';
import styles from"./Counter.module.css"
import {CounterType} from "./CounterContainer";


const Counter = (props: CounterType) => {
    //data
    let textAlarm = "enter values and press 'set'"
    //function
    const OnClickInc = () => {
        props.onClickInc()
    }
    const OnClickReset = () => {
        props.onClickReset()
    }
    //interface
    return (
        <span className={"counter-main"}>
            <div className={styles.screenCounter}>
                {!props.state.error
                    ? !props.state.status
                        ? <span
                            className={props.state.currentValue === props.state.maxStartedValue ? styles.counterRed : styles.counterDefault}>{props.state.currentValue}</span>
                        : <span className={styles.textAlarm}>{textAlarm}</span>
                    : <span className={styles.errorTextAlarm}>Incorrect value</span>}
            </div>
            <div className={styles.screenCounterButton}>
                <Button nameButton={"increment"}
                        onClickCallBack={OnClickInc}
                        disabled={props.state.currentValue === props.state.maxStartedValue || props.state.error || props.state.status}/>
                <Button nameButton={"reset"}
                        onClickCallBack={OnClickReset}
                        disabled={props.state.currentValue === props.state.minStartedValue || props.state.error ||  props.state.status}/>
            </div>
        </span>
    );
};

export default Counter;

