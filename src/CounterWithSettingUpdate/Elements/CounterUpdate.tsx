import Button from "../../components/Button";
import {NavLink} from "react-router-dom";

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

const CounterUpdate = (props: CounterPropsType) => {
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
                {!props.error
                    ? !props.status
                        ? <span
                            className={props.number === props.maxNumber ? "counterRed" : "counter"}>{props.number}</span>
                        : <span className="text-alarm">{textAlarm}</span>
                    : <span className={"error-text"}>Incorrect value</span>}
            </div>
            <div className={"button"}>
                <Button nameButton={"increment"}
                        onClickCallBack={OnClickInc}
                        disabled={props.number === props.maxNumber || props.error || props.status}/>
                <Button nameButton={"reset"}
                        onClickCallBack={OnClickReset}
                        disabled={props.number === props.minNumber || props.error || props.status}/>
                <NavLink to={"/Setting"}><Button nameButton={"set"}/></NavLink>
            </div>
        </div>
    );
};

export default CounterUpdate;

