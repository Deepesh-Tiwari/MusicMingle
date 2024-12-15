import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    let btnname = "Login";

    const {user} = useContext(UserContext);

    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);

    const [btnnamereact, setbtnnamereact] = useState("Login");
    return (
        <div className="flex justify-between bg-blue-50 shadow-lg">
            <div className="w-24 p-1">
                <img src = {APP_LOGO}/>
            </div>
            <div className="w-4/5"> 
                <ul className="flex py-8 px-1 justify-between">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Connect</li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/premiumusers">Premium User</Link>
                    </li>
                    <li>
                        <div className="font-medium">
                            {user.name}
                        </div>
                    </li>
                    <li>
                        <Link to="/cart">Friends - {cartItem.length}</Link>
                    </li>
                    <li><button className="login-button" onClick={ () => {
                        btnnamereact === "Login" ? setbtnnamereact("Logout") :
                        setbtnnamereact("Login");
                        console.log(btnname);
                    }}
                    >{btnnamereact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;