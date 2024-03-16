import React, { useState } from "react";
import "./Home.css"
import Header from "../../Header/Header";
import ExploreMenu from "../../components/Exploremenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
    const [category, setCategory] = useState('All')
    return (
        <div>

            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
        </div>
    )
}
export default Home;