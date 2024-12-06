import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    let btnname = "Login";

    const [btnnamereact, setbtnnamereact] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src = {APP_LOGO}/>
            </div>
            <div className="navitems">
                <ul>
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