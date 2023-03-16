const cartReducer = (
    state = {
        currentCart: [],
        error: false,
        loading: false,
        updateLoading: false,
    },
    action
) => {
    switch (action.type) {
        case "CART_START":
            return {
                ...state, error: false, loading: true
            };
        case "CART_SUCCESS":
            return {
                ...state, currentCart: [...state.currentCart, action.data], loading: false, error: false
            };
        case "CART_DELETE":
            state.currentCart = state.currentCart.filter((item) => item.id !== action.id);
            return {
                ...state, loading: false, error: true
            };
        case "CART_FAIL":
            return {
                ...state, loading: false, error: true
            };
        default:
            return state;
    }
};

export default cartReducer;