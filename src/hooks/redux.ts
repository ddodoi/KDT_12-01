import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";


export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();
// const logger = useSelector((state: RootState) => state.logger);

// interface Obj<T>{
//     name: T;
// }

// interface State {
//     state:{
//         data: string,
//         loading: boolean
//     }
// }

// const obj : Obj<state> = {
//     name : {
//         state:{
//             data: 'abcd',
//             loading: false
//         }
//     }
// }