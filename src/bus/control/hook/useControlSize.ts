import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sizeIncAction, sizeDimAction } from "../action";

import { AppState } from "../../../redux/reducer";

type TReturnHook = {
    value: number,
    inc: () => void,
    dim: () => void
}

export const useControlSize = (): TReturnHook => {
    const dispatch = useDispatch();
    const { size: value } = useSelector((state: AppState) => state.control);

    const inc = useCallback(() => {
        dispatch(sizeIncAction())
    }, [dispatch])

    const dim = useCallback(() => {
        dispatch(sizeDimAction())
    }, [dispatch])

    return {
        value,
        inc,
        dim
    }
}