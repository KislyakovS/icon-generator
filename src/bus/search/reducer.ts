import { SET_SEARCH, TSearchAction } from "./types";

export type TSearchState = {
    value: string
}

const initialState: TSearchState = {
    value: ""
}

export const reducer = (
    state = initialState,
    action: TSearchAction
): TSearchState => {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, value: action.payload }
        default:
            //const x: never = action
    }

    return state
}