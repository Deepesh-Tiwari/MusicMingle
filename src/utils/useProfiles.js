import {useState, useEffect} from "react";
import { FETCH_USER_PROFILE } from "./constants";

const useProfiles = () => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchuser();
    }, [])

    const fetchuser = async() => {
        const data = await fetch(FETCH_USER_PROFILE);
        const jsonData = await data.json();

        const user =jsonData.results[0];
        const userData = {
            pid: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            phone: user.phone,
            picture: user.picture.large,
            age: user.dob.age,
            location: `${user.location.city}, ${user.location.country}`
        };

        setProfile(userData);
    }

    return profile;
}

export default useProfiles;