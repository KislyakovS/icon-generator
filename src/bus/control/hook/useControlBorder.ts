import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { borderIncAction, borderDimAction } from "../action";

import { AppState } from "../../../redux/reducer";

type TReturnHook = {
    value: number,
    inc: () => void,
    dim: () => void
}

export const useControlBorder = (): TReturnHook => {
    const dispatch = useDispatch();
    const { border: value } = useSelector((state: AppState) => state.control);

    const inc = useCallback(() => {
        dispatch(borderIncAction())
    }, [dispatch])

    const dim = useCallback(() => {
        dispatch(borderDimAction())
    }, [dispatch])

    return {
        value,
        inc,
        dim
    }
}