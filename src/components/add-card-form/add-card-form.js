import React from "react";
import './add-card-form.scss';
import SvgCross from "../../assets/svg/SvgCross";
import { addCard, hidePopup } from "../../actions";
import { useDispatch } from "react-redux";


const AddCardForm = ()=>{
    
    const dispatch = useDispatch()

    const addCardHandler = (e)=>{
        e.preventDefault()
        dispatch(
            addCard(
                e.target.elements.title.value,
                e.target.elements.genre.value,
                e.target.elements.rating.value,
                e.target.elements.description.value,
                e.target.elements.votes.value,
                e.target.elements.price.value,
                e.target.elements.oldPrice.value,
                e.target.elements.discount.value,
                e.target.elements.picUrl.value,
            )
        )
    }

    const closeFormHandler = (e)=>{
        e.preventDefault()
        dispatch(hidePopup())
    }

    return(
        <form action="" className="add-card-form" onSubmit={addCardHandler}>
            <a href="#" className="add-card-form__close" onClick={closeFormHandler}>
                <SvgCross width="20" height="20" fill="#000000"/>
            </a>
            <p className="add-card-form__caption caption caption_size_medium caption_weight_medium caption_color_black">Add a card</p>
            <div className="add-card-form__grid">
                <input type="text" className="input" name="title" placeholder="Title"/>    
                <input type="text" className="input" name="genre" placeholder="Genre"/>
                <input type="number" className="input" name="rating" max="5" min="0" placeholder="Rating"/> 
                <input type="number" className="input" name="votes" placeholder="Votes count"/>    
                <input type="number" className="input" name="price" placeholder="Price"/>    
                <input type="number" className="input" name="oldPrice" placeholder="Old Price"/>
                <input type="number" min="-100" max="0" className="input" name="discount" placeholder="Discount"/> 
                <input type="text" className="input" name="picUrl" placeholder="URL of image"/> 
            </div>
            <textarea className="textarea add-card-form__textarea" name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
            <button className="button button_color_purple">
                Submit
            </button>
        </form>
    )
}

export default AddCardForm