import * as types from "../constant/actionType";

const initialState = [];

const edittingProduct = (state = initialState, action) => {
    switch (action.type) {
        case types.EDITTING_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default edittingProduct;