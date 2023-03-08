import {
    combineReducers
} from "redux";

import menuReducer from "./MenuReducer";
import searchReducer from "./SearchReducer";
import singleReducer from "./SingleReducer";

export const reducers = combineReducers({
    searchReducer,
    menuReducer,
    singleReducer
})
