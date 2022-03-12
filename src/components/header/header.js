import React from "react"
import MessagesSlider from "../messages-slider"
import SvgLocation from '../../assets/svg/SvgLocation'
import SvgLogo from '../../assets/svg/SvgLogo'
import SvgSearch from '../../assets/svg/SvgSearch'
import SvgUser from '../../assets/svg/SvgUser'
import SvgShopping from '../../assets/svg/SvgShopping'

import './header.scss';

const Header = ()=>{
    return(
        <header className="header">
            <MessagesSlider/>
            <nav className="header__top-nav">
                <div className="container">
                    <div className="header__top-menu">
                        <a href="#" className="header__location-link location-link d-none d-lg-flex">
                            <SvgLocation width="13" height="16" fill="#101828"/>
                            <span className="text text_size_small text_weight_regular text_color_gray">Dublin, Republic of Ireland</span>
                        </a>
                        <a href="/" className="logo header__logo">
                            <SvgLogo width="154" height="24"/>
                        </a>
                        <ul className="main-nav header__main-nav d-none d-lg-flex">
                            <li>
                                <a href="#" className="main-nav__link">
                                    <SvgSearch width="16" height="16" fill="#101828"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="main-nav__link">
                                    <SvgUser width="14" height="16" fill="#101828"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="main-nav__link">
                                    <SvgShopping width="18" height="16" fill="#101828"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="header__bottom-menu d-none d-lg-block">
                <div className="container">
                    <ul className="main-links header__main-links">
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Discover</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Browse</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Store</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Platforms</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Releases</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Mobile</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Articles</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">News</a>
                        </li>
                        <li>
                            <a href="#" className="header__main-link text text_size_regular text_weight_medium text_color_black">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
    
}

export default Header