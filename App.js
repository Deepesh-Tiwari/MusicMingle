import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React element
// React.createElement creates an object


const root = ReactDOM.createRoot(document.getElementById("root"));

// React functional component
// use arrow function for creating components

var number = 1000;

const data = 1000;

var str = "js inside html in react component"

var ele = <span>this is span tag</span>;

const Heading1 = () => (
    <div>
    <h1>this is a functional component </h1>
    <h2>{number}</h2>
    <h2>{str}</h2>
    <h2>This is data{data}</h2>
    </div>
)


// componet composition
const Heading = () => (
    <div id = "container">
        {ele}
        <h1 className="heading" tabIndex="5">
        woking fine with jsx
        </h1>
        <Heading1/>
        {Heading1()}
    </div>
);

root.render(<Heading/>); 
