import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as action from "../../action/index";
import { connect } from "react-redux";

class productActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkStatus: ''
        }
    }

    onHandleChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        var { match } = this.props
        if (match) { // phải có if
            var id = match.params.id
            this.props.EdittingProduct(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            var { itemsEditting } = nextProps
            this.setState({
                id: itemsEditting.id,
                txtName: itemsEditting.name,
                txtPrice: itemsEditting.price,
                chkStatus: itemsEditting.status
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkStatus } = this.state
        var { history } = this.props
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkStatus
        }
        if (id) {
            this.props.updateProduct(product)
        } else {
            this.props.addProduct(product);
        }
        history.goBack();
    }
    render() {
        var { txtName, txtPrice, chkStatus } = this.state
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                value={txtName}
                                onChange={this.onHandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                name="txtPrice"
                                value={txtPrice}
                                onChange={this.onHandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="chkStatus"
                                        onChange={this.onHandleChange}
                                        checked={chkStatus}
                                    />
                                    Active
                                </label>
                            </div>
                        </div>
                        <Link to="/product-list" className="btn btn-danger">Back</Link>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        itemsEditting: state.edittingProduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(action.addProductsRequest(product))
        },
        EdittingProduct: (id) => {
            dispatch(action.edittingProductRequest(id));
        },
        updateProduct: (product) => {
            dispatch(action.updateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(productActionPage);
