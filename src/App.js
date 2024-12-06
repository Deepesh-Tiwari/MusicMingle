import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/error";
import Profileinfo from "./components/Profileinfo";
import Shimmer from "./components/Shimmer";

const PremiumUsers = lazy(() => import("./components/PremiumUsers"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const approuter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path:"/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/profile/:profid",
                element : <Profileinfo/>
            },
            {
                path : "/premiumusers",
                element : <Suspense fallback={<Shimmer />}>
                    <PremiumUsers/>
                    </Suspense> 
            }
        ],
        errorElement : <Error />
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={approuter} />); 
