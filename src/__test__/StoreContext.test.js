// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import FoodItem from '../FoodItem/FoodItem.jsx'; // Assuming FoodItem.js is in the same directory
// import { StoreProvider } from '../context/StoreContext'; // Assuming StoreContext is in '../context'

// const mockContext = {
//     cartItems: { 1: 2 }, // Example cart state with one item (id: 1, quantity: 2)
//     addToCart: jest.fn(),
//     removeFromCart: jest.fn(),
//     url: 'http://your-api-url', // Replace with your API URL
// };

// test('renders food item with correct information', () => {
//     render(<FoodItem id={1} name="Pizza" price="10.99" description="Delicious pizza" image="pizza.jpg" {...mockContext} />);

//     const foodItemName = screen.getByText('Pizza');
//     const foodItemPrice = screen.getByText('$10.99');
//     const foodItemDescription = screen.getByText('Delicious pizza');
//     const foodItemImage = screen.getByAltText('Pizza');

//     expect(foodItemName).toBeInTheDocument();
//     expect(foodItemPrice).toBeInTheDocument();
//     expect(foodItemDescription).toBeInTheDocument();
//     expect(foodItemImage.src).toContain('http://your-api-url/images/pizza.jpg'); // Verify image URL construction
// });
