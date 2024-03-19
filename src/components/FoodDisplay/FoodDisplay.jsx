import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../../FoodItem/FoodItem";

const FoodDisplay = (props) => { // Thêm props ở đây
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (props.category === 'All' || props.category === item.category) { // Sử dụng props.category thay vì chỉ category
                        return <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    }
                    return null; // Bổ sung return null trong trường hợp không trả về FoodItem
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
