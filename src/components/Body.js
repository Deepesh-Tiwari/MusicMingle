import {ProfileCard} from "./ProfileCard"
import { profobj } from "../utils/mockdata";
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { PROF_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useListOfProfiles from "../utils/useListOfProfiles";
import useOnline from "../utils/useOnline";


const Body = () => {


    const listofProfiles = useListOfProfiles();

    const [searchtext, setsearchtext] = useState("");

    const isOnline = useOnline();

    if(!isOnline){
        return(
            <h1>Please Check your internet connection</h1>
        )
    }
    // conditional rendering 
    return listofProfiles.length === 0 ? <Shimmer /> : (
        <div className= "body">
            <div className="filter">
            <div className="search-box">
                <input type="text" className="search" value={searchtext} 
                onChange={(e) => {
                    setsearchtext(e.target.value);
                }}
                />
                <button onClick={() => {
                    console.log(searchtext);
                    const filterdprofiles = listofProfiles.filter(
                        (profile) => profile.name.toLowerCase().includes(searchtext)
                    );
                    setlistofProfiles(filterdprofiles);
                }}>Search</button>
            </div>
            <div className="my-prof">MY PROFILE</div>
                <button className="filter-btn" onClick={() => {
                    const filterdprofiles = listofProfiles.filter(
                        (profile) => profile.age > 30
                    );
                    setlistofProfiles(filterdprofiles);
                    console.log("Button clicked")
                }}>best matches</button>
            </div>
            <div className="prof-container">
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