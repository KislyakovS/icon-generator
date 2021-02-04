import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../../redux/reducer";

import { colorAction } from "../action";

type TColor = string

type TReturnHook = {
    value: TColor,
    setColor: (color: TColor) => void;
}

export const useControlColor = (): TReturnHook => {
    const dispatch = useDispatch();
    const color = useSelector((state: AppState) => state.control.color);

    const setColor = useCallback((color) => {
        dispatch(colorAction(color));
    }, [dispatch])

    return {
        value: color,
        setColor
    }
}