import React from "react";
import SvgHome from "../../assets/svg/SvgHome";
import SvgCompass from "../../assets/svg/SvgCompass";
import SvgSearch from "../../assets/svg/SvgSearch";
import SvgShopping from "../../assets/svg/SvgShopping";
import SvgUser from "../../assets/svg/SvgUser";
import './xs-navigation.scss';

const XsNavigation = ()=>{
    return(
        <div className="xs-navigation d-grid d-lg-none">
            <a href="#" className="xs-navigation__link xs-navigation__link_is-active">
                <SvgHome width="14" height="16" fill="#7F56D9"/>
                <span>Home</span>
            </a>
            <a href="#" className="xs-navigation__link">
                <SvgCompass width="16" height="16" fill="#101828"/>
                <span>Browse</span>
            </a>
            <a href="#" className="xs-navigation__link">
                <SvgSearch width="16" height="16" fill="#101828"/>
                <span>Search</span>
            </a>
            <a href="#" className="xs-navigation__link">
                <SvgUser width="14" height="16" fill="#101828"/>
                <span>Account</span>
            </a>
            <a href="#" className="xs-navigation__link">
                <SvgShopping width="14" height="16" fill="#101828"/>
                <span>Cart</span>
            </a>
        </div>
    )
}

export default XsNavigation