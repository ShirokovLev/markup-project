import React from "react";
import AddCardForm from "../add-card-form";
import './overlay.scss'

const Overlay = ()=>{
    return (
        <div className="overlay">
            <AddCardForm/>
        </div>
    )
}

export default Overlay