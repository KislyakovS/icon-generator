import { TControlAction, CONTROL_INC_SIZE, CONTROL_DIM_SIZE, CONTROL_INC_BORDER, CONTROL_DIM_BORDER, CONTROL_COLOR } from "./types";

export type TControlState = {
    size: number,
    border: number,
    color: string
}

const initialState: TControlState = {
    size: 48,
    border: 2,
    color: "#2329D6"
}

export const reducer = (
    state = initialState,
    action: TControlAction
): TControlState => {
    switch (action.type) {
        case CONTROL_INC_SIZE:
            return { ...state, size: ++state.size }
        case CONTROL_DIM_SIZE:
            return { ...state, size: --state.size }
        case CONTROL_INC_BORDER:
            return { ...state, border: ++state.border }
        case CONTROL_DIM_BORDER:
            return { ...state, border: --state.border }
        case CONTROL_COLOR:
            return { ...state, color: action.payload }
        default:
            const x: never = action
    }
  
    return state

}