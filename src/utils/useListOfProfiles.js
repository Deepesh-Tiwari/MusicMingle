import {useState, useEffect} from "react"

const useListOfProfiles = () => {

    // local state variable = super powerful variable   
    // always declare usestate at the top of the component
    const [listofProfiles,setlistofProfiles] = useState([]);

    useEffect(() =>{
        fetchData();
        console.log("use effect called")
    },[]);

    const fetchData = async() => {

        const data = await fetch(
            "https://randomuser.me/api/?results=20"
        );
        const jsonData = await data.json();

        // Map API data to a format usable by ProfileCard (or directly if already suitable)
        const profiles = jsonData.results.map(user => ({
          pid: user.login.uuid, 
          name: `${user.name.first} ${user.name.last}`, 
          email: user.email, 
          phone: user.phone, 
          picture: user.picture.large, 
          age: user.dob.age, 
          location: `${user.location.city}, ${user.location.country}`  
        }));
    
        
        setlistofProfiles(profiles);
        //console.log(data);
    }

    return listofProfiles;
}

export default useListOfProfiles;