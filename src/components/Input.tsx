import React, {ChangeEvent} from 'react';

type InputType = {
    error?: boolean,
    onChangeCallBack: (setPoint: number) => void
    startValue: number
}

const Input = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCallBack(e.currentTarget.valueAsNumber)
    }

    return (
        <span>
            <input className={!props.error ? "input-default" : "error-input"}
                   type={"number"} value={props.startValue}
                   onChange={onChangeHandler}/>
        </span>
    );
};

export default Input;