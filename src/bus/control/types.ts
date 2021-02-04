export const CONTROL_INC_SIZE = "CONTROL_INC_SIZE";
type TControlIncSizeAction = {
    type: typeof CONTROL_INC_SIZE
}

export const CONTROL_DIM_SIZE = "CONTROL_DIM_SIZE";
type TControlDimSizeAction = {
    type: typeof CONTROL_DIM_SIZE
}

export const CONTROL_INC_BORDER = "CONTROL_INC_BORDER";
type TControlIncBorderAction = {
    type: typeof CONTROL_INC_BORDER
}

export const CONTROL_DIM_BORDER = "CONTROL_DIM_BORDER";
type TControlDimBorderAction = {
    type: typeof CONTROL_DIM_BORDER
} 

export const CONTROL_COLOR = "CONTROL_COLOR";
export type TControlColorAction = {
    type: typeof CONTROL_COLOR,
    payload: string
}

export type TControlAction = 
    | TControlColorAction
    | TControlIncSizeAction
    | TControlDimSizeAction
    | TControlIncBorderAction
    | TControlDimBorderAction