import {connect} from "react-redux";
import Setting from "./Setting";
import {Dispatch} from "redux";
import {AppCounterStateType} from "../../../Redux";
import {
    changeMaxValueActionCreator,
    changeMinValueActionCreator, setValueActionCreator,
    StoreForCounterType
} from "../../../state/reducers/counter-reducer";

type MapStateToPropsForSettingType = {
    state: StoreForCounterType
}
type MapDispatchToPropsForSettingType = {
    onChangeMaxCallback:(setPoint: number) => void,
    onChangeMinCallback:(setPoint: number) => void,
    onClickCallback:() => void,
}

export type SettingType = MapStateToPropsForSettingType & MapDispatchToPropsForSettingType

let mapStateToProps = (state: AppCounterStateType): MapStateToPropsForSettingType =>{
    return{
        state: state.stateForCounter
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForSettingType =>{
    return{
        onChangeMaxCallback:(setPoint: number) => dispatch(changeMaxValueActionCreator(setPoint)),
        onChangeMinCallback:(setPoint: number) => dispatch(changeMinValueActionCreator(setPoint)),
        onClickCallback:() => dispatch(setValueActionCreator()),
    }
}


export const SettingContainer = connect(mapStateToProps, mapDispatchToProps)(Setting)