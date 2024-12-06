// functional component
import { useState } from "react";

const User = (props) => {
   
    const [count, setcount] = useState(0);
    return(
        <div>
            <h2>COUNT : {count}</h2>    
            <h2>This is a REACT PRACTICE SESSION</h2>
            <h2>NAME : {props.name}</h2>
            <h2>CITY : Alwar</h2>
        </div>
    )
}

export default User;