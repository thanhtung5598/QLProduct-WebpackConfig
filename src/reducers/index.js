import { combineReducers } from "redux";
import products from "./products";
import edittingProduct from "./EdittingProduct";
const appReducer = combineReducers({
    products:products,
    edittingProduct:edittingProduct
});

export default appReducer;