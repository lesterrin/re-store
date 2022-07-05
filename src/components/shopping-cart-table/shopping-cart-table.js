import React from "react";
import {connect} from 'react-redux';
import './shopping-cart-table.css';
import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from '../../actions';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {
            const {id, title, count, total} = item;
            return (
                <tr key={id}>
                    <td>{idx + 1}</td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>${total}</td>
                    <td>
                        <button
                            onClick={() => onIncrease(id)}
                            className='btn btn-success'>+</button>
                        <button
                            onClick={() => onDecrease(id)}
                            className='btn btn-warning'>-</button>
                        <button
                            onClick={() => onDelete(id)}
                            className='btn btn-danger'>trash</button>
                    </td>
                </tr>
            );
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>

            <div className="total">
                total: ${total}
            </div>
        </div>
    );
}

const mapStateToProps = ({cartItems,orderTotal}) => {
    return{
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
        onIncrease: bookAddedToCart,
        onDecrease: bookRemovedFromCart,
        onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);
