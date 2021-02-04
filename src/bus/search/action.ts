import {SET_SEARCH, TSetSearchAction} from "./types"

export const setSearchAction = (payload: string): TSetSearchAction => ({
    type: SET_SEARCH,
    payload
}) 