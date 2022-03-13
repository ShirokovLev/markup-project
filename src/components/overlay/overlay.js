import React from "react";
import AddCardForm from "../add-card-form";
import './overlay.scss'
import { hidePopup } from "../../actions";
import { useDispatch } from "react-redux";

const Overlay = ()=>{

    const dispatch = useDispatch()

    const closeOverlayHandler = (e)=>{
        e.target.className === 'overlay' && dispatch(hidePopup())
    }

    return (
        <div className="overlay" onClick={closeOverlayHandler}>
            <AddCardForm/>
        </div>
    )
}

export default Overlay