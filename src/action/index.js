import * as types from "../constant/actionType";
import callApi from "../utils/callApi";

export const fetchProductsRequest = () => {
    return (dispatch) => {
        return callApi("products", "get", null).then((res) => {
            dispatch(fetchProducts(res.data))
        })
    }
}

export const fetchProducts = (products) => {
    return {
        type: types.FETCH_PRODDUCT,
        products: products
    }
}

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then((res) => { // dispatch action này trước xóa trên server
            dispatch(deleteProduct(id)) // dispatch action này để nó thực thi cái mảng trong store
        })
    }
}

export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODDUCT,
        id: id
    }
}

export const addProductsRequest = (products) => {
    return (dispatch) => {
        return callApi("products", "POST", products).then((res) => { // data phải có product để đưa lên server
            dispatch(addProducts(res.data))
        })
    }
}

export const addProducts = (products) => {
    return {
        type: types.ADD_PRODDUCT,
        products: products
    }
};

export const edittingProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, "GET", null).then((res) => {
            dispatch(edittingProduct(res.data))
        })
    }
}

export const edittingProduct = (product) => {
    return {
        type: types.EDITTING_PRODUCT,
        product: product
    }
}

export const updateProductRequest = (product) => {
    return (dispatch) =>{
        return callApi(`products/${product.id}`,"PUT",product).then((res)=>{
            dispatch(updateProduct(res.data))
        });
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODDUCT,
        product: product
    }
}