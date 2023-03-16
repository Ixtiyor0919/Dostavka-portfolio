import {
    combineReducers
} from "redux";

import menuReducer from "./MenuReducer";
import cartReducer from "./CartReducers";
import searchReducer from "./SearchReducer";
import singleReducer from "./SingleReducer";
import categoryReducer from "./CategoryReducer";

export const reducers = combineReducers({
    menuReducer,
    cartReducer,
    searchReducer,
    singleReducer,
    categoryReducer,
})
