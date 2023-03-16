const categoryReducer = (
    state = {
        category: "All",
        error: false,
        loading: false,
        updateLoading: false,
    },
    action
) => {
    switch (action.type) {
        case "CATEGORY_START":
            return { ...state, error: false, loading: true };
        case "CATEGORY_SUCCESS":
            return { ...state, category: action?.category, loading : false, error: false };
        case "CATEGORY_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default categoryReducer;