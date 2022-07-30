import Button from "./Button";
import '../App.css';

type CounterPropsType = {
    //value
    number: number
    maxNumber: number
    minNumber: number
    errorForMax: boolean
    errorForMin: boolean
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
        <div className={"counter-main"}>
            <div className={"screen"}>
                {!props.errorForMin && !props.errorForMax
                    ? !props.status
                        ? <span
                            className={props.number === props.maxNumber ? "counterRed" : "counter"}>{props.number}</span>
                        : <span className="text-alarm">{textAlarm}</span>
                    : <span className={"error-text"}>Incorrect value</span>}
            </div>
            <div className={"button"}>
                <Button nameButton={"increment"}
                        onClickCallBack={OnClickInc}
                        disabled={props.number === props.maxNumber || props.errorForMin || props.errorForMax || props.status}/>
                <Button nameButton={"reset"}
                        onClickCallBack={OnClickReset}
                        disabled={props.number === props.minNumber || props.errorForMin || props.errorForMax || props.status}/>
            </div>
        </div>
    );
};

export default Counter;

