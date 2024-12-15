import {useState} from "react";

const Section = ({title, description, isVisible,setIsVisible}) => {

    return(
        <div className= "border border-black bg-red-100 p-2 m-2 text-center">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        {isVisible ? 
        (<button onClick={() => setIsVisible(false)} className="cursor-pointer underline">Hide</button>) :
        (<button onClick={() => setIsVisible(true)} className="cursor-pointer underline">Show</button>)
        }
        {isVisible && <p>{description}</p>}

        </div>
    )
}
const PremiumUsers = () => {

    const [visibleSection, setVisibleSection] = useState("none")
    return(
        <div>
            <Section 
            title ={"YOU ARE A PREMIUM USER"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible = {visibleSection === "puser"}
            setIsVisible = {(show) => setVisibleSection( show ? "puser" : "none")}
            />

            <Section 
            title ={"CARRERS"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible = {visibleSection === "carrer"}
            setIsVisible = {(show) => setVisibleSection( show ? "carrer" : "none")}
            />

        <Section 
            title ={"BENIFITS OF PREMIUM USERS"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible = {visibleSection === "benefits"}
            setIsVisible = {(show) => setVisibleSection( show ? "benefits" : "none")}
            />
            <h1>This is the list of 100 of users</h1>
            <h1>this itself is a very heavy page</h1>
        </div>
    )
}

export default PremiumUsers;