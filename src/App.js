import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/error";
import Profileinfo from "./components/Profileinfo";
import Shimmer from "./components/Shimmer";
import { useState, useContext } from "react";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const PremiumUsers = lazy(() => import("./components/PremiumUsers"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Deepesh Tiwari",
    email: "deepeshtiwari2911@gmail.com",
  });
  return (
    <div className="app">
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile/:profid",
        element: <Profileinfo />,
      },
      {
        path: "/premiumusers",
        element: (
          <Suspense fallback={<Shimmer />}>
            <PremiumUsers />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Cart />
        ),
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
