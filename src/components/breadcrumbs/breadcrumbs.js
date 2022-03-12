import React from "react";
import './breadcrumbs.scss'
import SvgArrow from "../../assets/svg/SvgArrow";

const Breadcrumbs = ()=>{
    return(
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a href="/" className="breadcrumbs__link text text_size_small text_weight_medium text_color_gray">
                        Home
                    </a>
                    <SvgArrow width="8" height="5" fill="#D0D5DD"/>
                </li>
                <li className="breadcrumbs__item">
                    <a href="" className="breadcrumbs__link text text_size_small text_weight_medium text_color_gray">
                        Discover
                    </a>
                    <SvgArrow width="8" height="5" fill="#D0D5DD"/>
                </li>
                <li className="breadcrumbs__item">
                    <p className="breadcrumbs__current text text_size_small text_weight_medium text_color_light-gray">Games</p>    
                </li>
            </ul>
        </nav>
    )
}

export default Breadcrumbs