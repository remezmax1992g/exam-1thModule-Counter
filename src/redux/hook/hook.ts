import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppCounterStateType, AppDispatch} from "../redux";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppCounterStateType> = useSelector