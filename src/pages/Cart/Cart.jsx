import React, { useContext } from "react";
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
    const { cartItems, food_list, removeFormCart } = useContext(StoreContext)
    return (
        <div className="cart">
            <div className="cart-items-title">
                <p>Item</p>
                <p>title</p>
                <p> price</p>
                <p> Quantity</p>
                <p>Total</p>
                <p> Remove</p>
            </div>

        </div>
    )
}
export default Cart;