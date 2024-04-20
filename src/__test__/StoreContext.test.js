import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StoreContextProvider, { StoreContext } from "../context/StoreContext";

// Test addToCart function
test('addToCart adds item to cart correctly', () => {
    const TestComponent = () => {
        const { addToCart, cartItems } = React.useContext(StoreContext);

        return (
            <div>
                <button onClick={() => addToCart("1")}>Add Item 1</button>
            </div>
        );
    };

    render(
        <StoreContextProvider>
            <TestComponent />
        </StoreContextProvider>
    );

    const addItemButton = screen.getByText('Add Item 1');
    fireEvent.click(addItemButton);

    // You can add more assertions here to test if the item is added to the cart correctly
});

// Test removeFromCart function
test('removeFromCart removes item from cart correctly', () => {
    const TestComponent = () => {
        const { addToCart, removeFromCart, cartItems } = React.useContext(StoreContext);

        return (
            <div>
                <button onClick={() => addToCart("1")}>Add Item 1</button>
                <button onClick={() => removeFromCart("1")}>Remove Item 1</button>
            </div>
        );
    };

    render(
        <StoreContextProvider>
            <TestComponent />
        </StoreContextProvider>
    );

    const addItemButton = screen.getByText('Add Item 1');
    const removeItemButton = screen.getByText('Remove Item 1');

    fireEvent.click(addItemButton);
    fireEvent.click(removeItemButton);

    // You can add more assertions here to test if the item is removed from the cart correctly
});

