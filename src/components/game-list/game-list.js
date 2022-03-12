import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GameFilter from "../game-filter";
import GameCard from "../game-card";
import Pagination from "../pagination";
import './game-list.scss'
import { showPopup } from "../../actions";

const GameList = ()=>{

    const { games } = useSelector((state) => ({
        games: state.games,
    }));

    const dispatch = useDispatch();

    const popUpTrigger = (e)=>{
        e.preventDefault()
        dispatch(showPopup())
    }

    return(
        <>
            <GameFilter className="content__game-filter"/>
            <ul className="content__game-cards game-cards">
                <li>
                    <div className="add-card">
                        <p className="add-card__text text text_size_small text_weight_regular text_color_light-gray">You can add a product card by&nbsp;clicking on the button</p>
                        <a href="#" className="add-card__button button button_color_purple" onClick={popUpTrigger}>
                            <span className="add-card__plus-icon"></span>
                            <span>Add card</span>
                        </a>
                    </div>
                    
                </li>
            {
                games.map((item)=>{
                    return(
                        <li key={item.id}>
                            <GameCard 
                                genre={item.genre}
                                title={item.title}
                                rating={item.rating}
                                description={item.description}
                                votes={item.votes}
                                price={item.price}
                                oldPrice={item.oldPrice}
                                discount={item.discount}
                                picUrl={item.picUrl}
                                />
                        </li>
                    )  
                })
            }
            </ul>
            <Pagination className="content__pagination"/>
            
        </>
    )
}

export default GameList