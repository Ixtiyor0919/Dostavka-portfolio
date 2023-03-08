const singleReducer = (
    state = {
        currentSingle: null,
        error: false,
        loading: false,
        updateLoading: false,
    },
    action
) => {
    switch (action.type) {
        case "SINGLE_START":
            return { ...state, error: false, loading: true };
        case "SINGLE_SUCCESS":
            return { ...state, currentSingle: action?.currentSingle, loading : false, error: false };
        case "SINGLE_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default singleReducer;