import React from "react";
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Some Book</td>
                        <td>1</td>
                        <td>$40</td>
                        <td>
                            <button className='btn btn-success'>+</button>
                            <button className='btn btn-warning'>-</button>
                            <button className='btn btn-danger'>trash</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                total: $40
            </div>
        </div>
    );
}

export default ShoppingCartTable;
