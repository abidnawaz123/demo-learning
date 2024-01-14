import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "./Home/HomeComponent";
import MainComponent from "./Todos/MainComponent";
import AddToCart from "./AddToCart/AddToCart";

export const router = createBrowserRouter([
    {
        path: "/", element: <HomeComponent />
    },
    {
        path: "/todo", element: <MainComponent />
    },
    {
        path: "/cart", element: <AddToCart />
    }
])