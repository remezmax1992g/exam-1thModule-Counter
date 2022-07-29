import React, {ChangeEvent} from 'react';

type InputType = {
    error?: boolean,
    onChangeCallBack: (setPoint: number) => void
}

const Input = (props: InputType) => {

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
            let setPoint = Number(e.currentTarget.value)
            props.onChangeCallBack(setPoint)
        }

    return (
        <span className={"Input"}>
            <input className={!props.error ? "Input-default" : "error-input"} type={"number"} onChange={onChangeHandler}/>
        </span>
    );
};

export default Input;