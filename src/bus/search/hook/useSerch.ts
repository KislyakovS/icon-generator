import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSearchAction } from "../action";

import { AppState } from "../../../redux/reducer";

type TReturnHook = {
    value: string,
    setSearch: (search: string) => void
}

export const useSearch = (): TReturnHook => {
    const dispatch = useDispatch();
    const search = useSelector((state: AppState) => state.search.value);

    const setSearch = useCallback((search) => {
        dispatch(setSearchAction(search));
    }, [dispatch])

    return {
        value: search,
        setSearch
    }
}