const searchReducer = (
    state = {
        search: false,
        error: false,
        loading: false,
        updateLoading: false,
    },
    action
) => {
    switch (action.type) {
        case "SEARCH_START":
            return { ...state, error: false, loading: true };
        case "SEARCH_SUCCESS":
            return { ...state, search: action?.search, loading : false, error: false };
        case "SEARCH_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default searchReducer;