import Button from "../../../components/Button";
import '../../../App.css';
import styles from"./Counter.module.css"

type CounterPropsType = {
    //value
    number: number
    maxNumber: number
    minNumber: number
    error: boolean
    status: boolean
    //function
    onClickInc: () => void
    onClickReset: () => void
}

const Counter = (props: CounterPropsType) => {
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
                {!props.error
                    ? !props.status
                        ? <span
                            className={props.number === props.maxNumber ? styles.counterRed : styles.counterDefault}>{props.number}</span>
                        : <span className={styles.textAlarm}>{textAlarm}</span>
                    : <span className={styles.errorTextAlarm}>Incorrect value</span>}
            </div>
            <div className={styles.screenCounterButton}>
                <Button nameButton={"increment"}
                        onClickCallBack={OnClickInc}
                        disabled={props.number === props.maxNumber || props.error || props.status}/>
                <Button nameButton={"reset"}
                        onClickCallBack={OnClickReset}
                        disabled={props.number === props.minNumber || props.error ||  props.status}/>
            </div>
        </span>
    );
};

export default Counter;

