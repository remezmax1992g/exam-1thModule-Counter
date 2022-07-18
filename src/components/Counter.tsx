import React, {useState} from 'react';
import Button from "./Button";
import '../App.css';

type CounterPropsType = {
    //value
    number: number
    maxNumber: number
    minNumber: number
    //function
    onClickInc: () => void
    onClickReset: () => void
}

const Counter = (props: CounterPropsType) => {
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
            <div>
                <span className={props.number===props.maxNumber ? "counterRed" : "counter"}>{props.number}</span>
            </div>
            <div className={"button"}>
                <Button nameButton={"increment"} className={"buttonInc"} callBAckOnClick={OnClickInc} disabled={props.number===props.maxNumber}/>
                <Button nameButton={"reset"} className={"buttonReset"} callBAckOnClick={OnClickReset} disabled={props.number===props.minNumber}/>
            </div>
        </div>
    );
};

export default Counter;

