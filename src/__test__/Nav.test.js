import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { BrowserRouter } from "react-router-dom";

test('renders search icon image', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>); // Render Navbar within BrowserRouter
    const imgElement = screen.getByAltText(/incredibles.*? poster/i)
    expect(imgElement).toBeInTheDocument();
});
