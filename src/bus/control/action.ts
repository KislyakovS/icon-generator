import {
    CONTROL_COLOR,
    CONTROL_INC_SIZE,
    CONTROL_DIM_SIZE,
    CONTROL_INC_BORDER,
    CONTROL_DIM_BORDER,
    TControlColorAction,
    TControlAction,
} from "./types";

export const sizeIncAction = (): TControlAction => ({
    type: CONTROL_INC_SIZE,
}) 

export const sizeDimAction = (): TControlAction => ({
    type: CONTROL_DIM_SIZE,
})

export const borderIncAction = (): TControlAction => ({
    type: CONTROL_INC_BORDER
})

export const borderDimAction = (): TControlAction => ({
    type: CONTROL_DIM_BORDER
})

export const colorAction = (payload: string): TControlColorAction => ({
    type: CONTROL_COLOR,
    payload
})