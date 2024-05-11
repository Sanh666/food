import React, { useContext, useState } from "react";

import "./PlaceOder.css"
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
const PlaceOrder = () => {
    const { getTotalCartAmount, token, cartItems, url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    };
    const PlaceOder = async (event) => {
        event.preventDefault();
        let orderItems = []
        food_list.map((item) => {
            if (cartItems[cartItems._id]) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id]
                orderItems.push(itemInfo)
            }
        })
        console.log(orderItems)

    }

    return (
        <form onSubmit={PlaceOder} className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First name" name="firstName" value={data.firstName} onChange={onChangeHandler} />
                    <input type="text" placeholder="Last name" name="lastName" value={data.lastName} onChange={onChangeHandler} />
                </div>
                <input type="email" placeholder="Email" name="email" value={data.email} onChange={onChangeHandler} />
                <input type="text" placeholder="Street" name="street" value={data.street} onChange={onChangeHandler} />
                <div className="multi-fields">
                    <input type="text" placeholder="City" name="city" value={data.city} onChange={onChangeHandler} />
                    <input type="text" placeholder="State" name="state" value={data.state} onChange={onChangeHandler} />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" name="zipcode" value={data.zipcode} onChange={onChangeHandler} />
                    <input type="text" placeholder="Country" name="country" value={data.country} onChange={onChangeHandler} />
                </div>
                <input type="text" placeholder="Phone" name="phone" value={data.phone} onChange={onChangeHandler} />
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery</p>
                        <p>{2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>{getTotalCartAmount() + 2}</b>
                    </div>
                    <button type="submit">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
