import React from "react";
import StarRating from "../star-rating";
import './game-card.scss'
import emptyPic from '../../assets/images/empty-pic.jpg'

const GameCard = ({id, picUrl, genre, title, rating, votes, description, price, oldPrice, discount})=>{
    return(
        <div key={id} className="game-card">
            <img className="game-card__image" src={picUrl ? picUrl : emptyPic} decoding="async" loading="lazy" alt="{title}" width="256" height="200"/>
            <p className="game-card__genre" data-genre={genre}>
                {genre}
            </p>
            <div className="game-card__info">
                <p className="game-card__title text text_size_medium text_weight_semibold text_color_black">
                    {title}
                </p>
                <div className="game-card__rating">
                    <div className="game-card__stars">
                        <StarRating rating={rating}/>
                    </div>
                    <p className="game-card__votes">
                        {votes}
                    </p>
                </div>
                <p className="game-card__description text text_size_small text_weight_regular text_color_gray">
                    {description}
                </p>
                <div className="game-card__bottom">
                    {oldPrice && <p className="game-card__old-price">{oldPrice}</p>}
                    <p className="game-card__price">{price}</p>
                    {discount && <p className="game-card__discound">{discount}</p>}  
                </div>
            </div>
        </div>
    )
}

export default GameCard
