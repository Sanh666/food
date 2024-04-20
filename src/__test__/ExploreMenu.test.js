import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExploreMenu from "../components/Exploremenu/ExploreMenu.jsx";

const mockMenuList = [
    { menu_name: "Cold Brew", menu_image: "cold_brew_image.jpg" },
    { menu_name: "Vietnamese Coffee", menu_image: "vietnamese_coffee_image.jpg" },
    { menu_name: "Deserts", menu_image: "deserts_image.jpg" }
];
//Rendering the Component: Ensure that the component renders without crashing.
test('renders Explore Menu component', () => {
    render(<ExploreMenu category="All" setCategory={() => { }} />);
    const exploreMenuElement = screen.getByText(/Explore Our Menu/i);
    expect(exploreMenuElement).toBeInTheDocument();
});

