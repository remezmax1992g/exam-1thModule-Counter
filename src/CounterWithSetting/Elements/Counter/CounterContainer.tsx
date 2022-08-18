import {connect} from "react-redux";
import Counter from "./Counter";
import {AppCounterStateType} from "../../../Redux";
import {
    incrementValueActionCreator,
    resetValueActionCreator,
    StoreForCounterType
} from "../../../state/reducers/counter-reducer";
import {Dispatch} from "redux";

type MapStateToPropsForCounterType = {
    state: StoreForCounterType
}
type MapDispatchToPropsForCounterType = {
    onClickInc: () => void,
    onClickReset: () => void
}

export type CounterType = MapStateToPropsForCounterType & MapDispatchToPropsForCounterType

let mapStateToProps = (state: AppCounterStateType): MapStateToPropsForCounterType => {
    return {
        state: state.stateForCounter
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForCounterType => {
    return {
        onClickInc: () => dispatch(incrementValueActionCreator()),
        onClickReset: () => dispatch(resetValueActionCreator())
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)