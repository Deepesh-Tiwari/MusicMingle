import React from "react";

const CartCard = (props) => {

    const {name, age, email, location, picture} = props.carddata;
    return (
    <div className="w-[230px] p-2 m-2 shadow-md bg-blue-50 ml-3">
        <img className="w-48" alt="prof-logo" src={picture} />
        <h4 className="font-semibold">NAME OF USER : {name}</h4>
        {/* <h4>{pid}</h4> */}
        <h4>AGE OF USER : {age}</h4>
        <h4>EMAIL OF USER : {email}</h4>
        <h4>ADDRESS OF USER : {location}</h4>
        <h4>favourite aritists</h4>
    </div>
    );
};

export default CartCard;
