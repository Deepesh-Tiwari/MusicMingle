import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useProfiles from "../utils/useProfiles";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Profileinfo = () => {

    const resInfo = useProfiles();

    const dispatch = useDispatch(); 
    const handleAddItem = () => {
        dispatch(addItem(resInfo));
    };
    return resInfo === null ? (<Shimmer/>) : (
        <div className="flex flex-col items-center text-center p-4">
            <div className="w-60 border border-black rounded-lg overflow-hidden">
                <img 
                    src={resInfo.picture} 
                    alt="Profile Picture" 
                    className="w-full h-auto object-cover" 
                />
            </div>
            <h1 className="text-2xl font-bold mt-4">{resInfo.name}</h1>
            <h2 className="text-xl text-gray-700 mt-2">Age: {resInfo.age}</h2>
            <ul className="mt-4 space-y-2">
                <li className="text-gray-600">Location: {resInfo.location}</li>
                <li className="text-gray-600">Email: {resInfo.email}</li>
                <li className="text-gray-600">Phone: {resInfo.phone}</li>
            </ul>
            <button
                className="p-2 m-2 bg-green-100 rounded-md"
                onClick={() => handleAddItem()}
            >Add Friend</button>
        </div>
    )
}
export default Profileinfo;