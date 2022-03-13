import React from "react";
import './add-card-form.scss';
import SvgCross from "../../assets/svg/SvgCross";
import { addCard, hidePopup } from "../../actions";
import { useDispatch } from "react-redux";
import SvgArrow from "../../assets/svg/SvgArrow";


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
        dispatch(hidePopup())
    }

    const closeModalHandler = (e)=>{
        e.preventDefault()
        dispatch(hidePopup())
    }

    return(
        <form action="" className="add-card-form" onSubmit={addCardHandler}>
            <a href="#" className="add-card-form__close" onClick={closeModalHandler}>
                <SvgCross width="20" height="20" fill="#000000"/>
            </a>
            <p className="add-card-form__caption caption caption_size_medium caption_weight_medium caption_color_black">Add a card</p>
            <div className="add-card-form__grid">
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Title
                    </p>
                    <input type="text" className="input" name="title" placeholder="Title"/>    
                </div>
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Category
                    </p>
                    <div className="input-item select-item">
                        <select className="select-item__select" name="genre">
                            <option value="Action RPG">Action RPG</option>
                            <option value="Multiplayer RPG">Multiplayer RPG</option>
                            <option value="Action">Action</option>
                            <option value="Shooter">Shooter</option>
                            <option value="Card Game">Card Game</option>
                        </select>
                        <SvgArrow className="select-item__arrow" width="8" height="4" fill="#101828"/>
                    </div>
                </div>
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Rating
                    </p>
                    <input type="number" className="input" name="rating" max="5" min="0" placeholder="Rating"/> 
                </div>
                
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Votes
                    </p>
                    <input type="number" className="input" min="0" name="votes" placeholder="Votes count"/>   
                </div>
                
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Price
                    </p>
                    <input type="number" className="input" min="0" name="price" placeholder="Price"/>    
                </div> 
                
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Old Price
                    </p>
                    <input type="number" className="input" min="0" name="oldPrice" placeholder="Old Price"/>
                </div>
                
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Discount
                    </p>
                    <input type="number" min="-100" max="0" className="input" name="discount" placeholder="Discount"/> 
                </div>
                
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        URL of image
                    </p>
                    <input type="text" className="input" name="picUrl" placeholder="URL of image"/> 
                </div>
            </div>
            <div className="input-block">
                <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                    Description
                </p>
                <textarea className="textarea add-card-form__textarea" name="description" cols="30" rows="10" placeholder="Description"></textarea>
            </div>
            <button className="button button_color_purple">
                Submit
            </button>
        </form>
    )
}

export default AddCardForm