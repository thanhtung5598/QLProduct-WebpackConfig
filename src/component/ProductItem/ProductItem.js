import React, { Component } from 'react';
import { Link } from "react-router-dom";
class ProductItem extends Component {
    onDelete=(id)=>(e)=>{
        if(confirm("Bạn có chắc chắn muốn xóa")) //eslint-disable-line
        this.props.onDelete(id);
    }
    render() {
        var {index,product} = this.props
        var statusName = product.status===true ? "Còn hàng" : "Hết hàng" 
        var statusClass = product.status===true ? "success" : "primary" 
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`products/${product.id}/edit`} className="btn btn-warning">Sửa</Link>
                    <button type="button" onClick={this.onDelete(product.id)} className="btn btn-danger ml-10">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
