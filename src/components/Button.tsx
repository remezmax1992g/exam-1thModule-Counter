import React from 'react';
import "./../App.css";

type ButtonPropsType = {
    //data
    nameButton: string,
    disabled?: boolean
    //function
    onClickCallBack: () => void
}
const Button: React.FC<ButtonPropsType> = (props) => {
    //function
    const onClickHandler = () => {
        props.onClickCallBack()
    }
    //interface
    return (
        <span>
            <button className="button-common"
                    onClick={onClickHandler}
                    disabled={props.disabled}>{props.nameButton}</button>
        </span>
    );
};

export default Button;