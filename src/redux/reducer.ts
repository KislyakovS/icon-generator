import { combineReducers } from "redux";

import { reducer as control } from "../bus/control/reducer";
import { reducer as search } from "../bus/search/reducer";

export const reducer = combineReducers({
    control,
    search
})

export type AppState = ReturnType<typeof reducer>