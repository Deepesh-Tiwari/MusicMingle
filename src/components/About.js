import User from "./User";
import UserClass from "./UserClass";
import React from "react";


// Life cycle of react component 

// 1) render phase
// a) constructor
// b) render
// 2) commit phase
// a) react updates dom
// b) component did mount

// react merges the render phase of components and updates the dom once
// to make the process fast 
// then it calls components did mount for other 

class About extends React.Component{

    constructor(props){
        super(props);
        //console.log("PARENT CONSTRUCTOR")

        this.state = {
            userInfo : {
                name : "Loading ...",
                location : "Loading ...",
                avatar_url: null,
            }
        }
    }

    // COMPONENT DID MOUNT IS USED TO MAKE API CALL IS CLASS BASED COMPONENTS
    // JUST AS WE USE USE EFFECT HOOK IN FUNCTIONAL COMPONENT
    // WE MAKE API CALL IN THIS AS WE FIRST WANT TO RENDER OUR SITE AND THEN
    // FILL DATA IN IT  (same as useEffect in functional components)

    // Making api call in class components
    async componentDidMount(){
        //console.log("PARENT COMPONENT DID MOUNT")
        const data = await fetch("https://api.github.com/users/Deepesh-Tiwari");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        });

    }

    
    render(){
        //console.log("PARENT RENDER")
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div>
                <h1>This is about page</h1>
                <h2>About</h2>
                <img src={avatar_url}></img>
                <h2>{name}</h2>
                <h2>{location}</h2>
                {/* <User name = {"Deepesh Tiwari (function)"}/> */}
                <UserClass name = {"Deepesh Tiwari (classes)"} />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>This is about page</h1>
//             <h2>ABOUT</h2>
//             {/* <User name = {"Deepesh Tiwari (function)"}/> */}
//             <UserClass name = {"Deepesh Tiwari (classes)"} />
//         </div>
//     )
// }

export default About;