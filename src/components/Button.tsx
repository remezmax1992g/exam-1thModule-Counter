import React from 'react';
import "./../App.css";

type ButtonPropsType = {
    //data
    nameButton: string,
    className: string
    disabled?: boolean
    //function
    callBAckOnClick: () => void
}
const Button: React.FC<ButtonPropsType> = (props) => {
    //function
    const onClickHandler = () => {
        props.callBAckOnClick()
    }
    //interface
    return (
        <span>
            <button className={props.className} onClick={onClickHandler} disabled={props.disabled}>{props.nameButton}</button>
        </span>
    );
};

export default Button;