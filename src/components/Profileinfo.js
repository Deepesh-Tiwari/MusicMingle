import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useProfiles from "../utils/useProfiles";

const Profileinfo = () => {

    const resInfo = useProfiles();
    return resInfo === null ? (<Shimmer/>) : (
        <div>
            <div><img className="prof-img" src= {resInfo.picture}/></div>
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.age}</h2>
            <ul>
                <li>{resInfo.location}</li>
                <li>{resInfo.email}</li>
                <li>{resInfo.phone}</li>
            </ul>
        </div>
    )
}
export default Profileinfo;