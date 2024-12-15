import profobj from "../utils/mockdata";
import { PROF_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/userContext";


export const ProfileCard = (props) => {

    console.log(props);
    const {profdata} = props;
    const {user} = useContext(UserContext);
    const {name, pid, email, picture, age, location} = profdata;
    return (
        <div className="w-[230px] p-2 m-2 shadow-md bg-blue-50 ml-3">
            <img className="w-48" alt="prof-logo" src= {picture}/>
            <h4 className="font-semibold">NAME OF USER : {name}</h4>
            {/* <h4>{pid}</h4> */}
            <h4>AGE OF USER : {age}</h4>
            <h4>EMAIL OF USER : {email}</h4>
            <h4>ADDRESS OF USER : {location}</h4>
            <h4 className="font-bold">{user.name}</h4>
            <h4 className="font-bold">{user.email}</h4>
            <h4>favourite aritists</h4>
        </div>
    )
}