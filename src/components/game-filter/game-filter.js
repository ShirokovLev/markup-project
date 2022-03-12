import React, { useState } from "react";
import SvgSearch from '../../assets/svg/SvgSearch'
import SvgArrow from '../../assets/svg/SvgArrow'
import SvgCross from '../../assets/svg/SvgCross'
import './game-filter.scss'


const GameFilter = ({className})=>{

    const [genres, setGenres] = useState([])

    const selectChangeHandler = (e)=>{
        
        const genre = e.target.value
        
        genres.includes(genre) ? 
            setGenres(genres.filter((item) => item !== genre)): 
            setGenres([...genres, genre])

    }

    const removeFromGenres = (e)=>{
        const genreToRemove = e.target.getAttribute("data-genre")

        setGenres(genres.filter((item) => item !== genreToRemove))
    }

    const openSelect = ()=>{

    }

    return(
        <form className={className + " " + "game-filter"} onSubmit={(e)=>e.preventDefault()}>
            <div className="game-filter__inputs">
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">
                        Search for games
                    </p>
                    <div className="input-item search-item">
                        <button className="search-item__button">
                            <SvgSearch width="16" height="16" fill="#98A2B3"/>
                        </button>
                        <input type="text" className="input search-item__input" placeholder="Search..." />
                    </div>
                </div>
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">Category</p>
                    <div className="input-item select-genres-item">
                        <ul className="select-genres-item__genres">
                            {
                                genres.map((item)=>{
                                    return (
                                        <li key={genres.indexOf(item)}>
                                            {item}
                                            <button className="select-genres-item__remove-button" data-genre={item} onClick={removeFromGenres}>
                                                <SvgCross width="5" height="5" fill="#7F56D9"/>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="select-genres-item__button" onClick={openSelect}>
                            <SvgArrow width="8" height="5" fill="#101828"/>
                        </button>
                        <div className="select-genres-item__select-dropdown select-genres-dropdown">
                            <input type="checkbox" className="select-genres-dropdown__input" name="genre" id="Action" value="Action" onClick={selectChangeHandler}/>
                            <label htmlFor="Action" className="select-genres-dropdown__label">
                                Action    
                            </label>
                            <input type="checkbox" className="select-genres-dropdown__input" name="genre" id="Action RPG" value="Action RPG" onClick={selectChangeHandler}/>
                            <label htmlFor="Action RPG" className="select-genres-dropdown__label">
                                Action RPG    
                            </label>
                            <input type="checkbox" className="select-genres-dropdown__input" name="genre" id="Shooter" value="Shooter" onClick={selectChangeHandler}/>
                            <label htmlFor="Shooter" className="select-genres-dropdown__label">
                                Shooter    
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input-block">
                    <p className="input-block__caption text text_size_small text_color_gray text_weight_medium">Sort by</p>
                    <div className="input-item select-item">
                        <select name="" id="" className="select-item__select">
                            <option value="Popular">Popular</option>
                            <option value="Price">Price</option>
                        </select>
                        <SvgArrow className="select-item__arrow" width="8" height="4" fill="#101828"/>
                    </div>
                </div>
            </div>
            <ul className="game-filter__genres-list">
                {
                    genres.map((item)=>{
                        return (
                            <li key={genres.indexOf(item)}>
                                <p>{item}</p>
                                <button className="genres-list__remove-button">
                                    <SvgCross width="8" height="8" fill="#7F56D9"/>
                                </button>
                            </li>
                        )
                    })
                }
                <li>
                    <p>Clear all</p>
                    <button className="genres-list__remove-button" onClick={()=>{setGenres([])}}>
                        <SvgCross width="8" height="8" fill="#7F56D9"/>
                    </button>
                </li>
            </ul>
        </form>
    )
}

export default GameFilter