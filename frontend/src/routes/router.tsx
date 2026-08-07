import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/page/Login";
import Register from "../features/auth/page/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])