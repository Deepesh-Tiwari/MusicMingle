import profobj from "../utils/mockdata";
import { PROF_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

export const ProfileCard = (props) => {

    console.log(props);
    const {profdata} = props;

    const {name, pid, email, picture, age, location} = profdata;
    return (
        <div className="prof-card">
            <img className="prof-logo" alt="prof-logo" src= {picture}/>
            <h4>NAME OF USER : {name}</h4>
            {/* <h4>{pid}</h4> */}
            <h4>AGE OF USER : {age}</h4>
            <h4>EMAIL OF USER : {email}</h4>
            <h4>ADDRESS OF USER : {location}</h4>
            {/* <h4>favourite aritists</h4> */}
        </div>
    )
}