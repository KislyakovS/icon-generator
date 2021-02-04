export const SET_SEARCH = "SET_SEARCH"
export type TSetSearchAction = {
    type: typeof SET_SEARCH,
    payload: string
}

export type TSearchAction = TSetSearchAction