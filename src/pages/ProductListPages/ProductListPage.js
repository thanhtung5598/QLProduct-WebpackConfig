import React, { Component } from 'react';
import ProductList from "../../component/ProductList/ProductList";
import ProductItem from "../../component/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../action/index";

class ProductListPage extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }
    onDelete = (id) => {
        this.props.deleteProducts(id);
    }
    findIndex(products, id) {
        var result = -1;
        products.forEach((e, index) => {
            if (e.id === id) {
                result = index;
            }
        });
        return result;
    }
    render() {
        var { products } = this.props;
        return (
            <div className="row">
                <Link to="/products/add" className="btn btn-primary mb-10">
                    Add New Product
                </Link>
                <ProductList>
                    {this.showProductItem(products)}
                </ProductList>
            </div>
        );
    }
    showProductItem = (products) => {
        var result = null;
        result = products.map((product, index) => {
            return <ProductItem
                key={index}
                product={product}
                index={index}
                onDelete={this.onDelete}
            />
        });
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchProducts : ()=>{
            dispatch(action.fetchProductsRequest())
        },
        deleteProducts:(id)=>{
            dispatch(action.deleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
