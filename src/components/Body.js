import {ProfileCard} from "./ProfileCard"
import { profobj } from "../utils/mockdata";
import {useState , useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { PROF_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useListOfProfiles from "../utils/useListOfProfiles";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";


const Body = () => {


    const listofProfiles = useListOfProfiles();

    const [searchtext, setsearchtext] = useState("");

    const isOnline = useOnline();

    const {user, setUser} = useContext(UserContext);

    if(!isOnline){
        return(
            <h1>Please Check your internet connection</h1>
        )
    }
    // conditional rendering 
    return listofProfiles.length === 0 ? <Shimmer /> : (
        <div className= "body">
            <div className="filter">
            <div className="search-box p-2 bg-blue-50 m-2">
                <input type="text" className="search" value={searchtext} 
                onChange={(e) => {
                    setsearchtext(e.target.value);
                }}
                />
                <button className="p-1  bg-pink-200 hover:bg-pink-300 m-1 rounded-lg" onClick={() => {
                    console.log(searchtext);
                    const filterdprofiles = listofProfiles.filter(
                        (profile) => profile.name.toLowerCase().includes(searchtext)
                    );
                    setlistofProfiles(filterdprofiles);
                }}>Search</button>

                <input type="text" className="p-2 m-2" 
                onChange={(e) => {
                    setUser({
                        ...user,
                        name : e.target.value
                    });
                }}
                />

                <input type="text" className="p-2 m-2"  
                onChange={(e) => {
                    setUser({
                        ...user,
                        email : e.target.value
                    });
                }}
                />
            </div>
            {/* <div className="my-prof">MY PROFILE</div> */}
                <button className="p-3 bg-pink-200 hover:bg-pink-300 m-2 rounded-lg" onClick={() => {
                    const filterdprofiles = listofProfiles.filter(
                        (profile) => profile.age > 30
                    );
                    setlistofProfiles(filterdprofiles);
                    console.log("Button clicked")
                }}>best matches</button>
            </div>
            <div className="flex flex-wrap">
                {
                    listofProfiles.map(profile => (<Link to={"/profile/:123"}>
                    <ProfileCard key = {profile.pid} profdata={profile}/></Link>
                    )
                )}
            </div>
        </div>
    )
}



export default Body;