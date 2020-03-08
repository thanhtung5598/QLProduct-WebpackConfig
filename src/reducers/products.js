import * as types from "../constant/actionType";
var initialState = []

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((e, index) => {
        if (e.id === id) {
            result = index;
        }
    });
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action
    switch (action.type) {
        case types.FETCH_PRODDUCT:
            state = action.products;
            return [...state];
        case types.DELETE_PRODDUCT:
            index = findIndex(state, id);
            if (index !== -1) {
                state.splice(index, 1)
            }
            return [...state];
        case types.ADD_PRODDUCT:
            state.push(action.products);
            return [...state];
        case types.UPDATE_PRODDUCT:
            index = findIndex(state, product.id);
            state[index] = product
            return [...state];
        default:
            return [...state];
    }

}

export default products;