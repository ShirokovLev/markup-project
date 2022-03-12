import React from "react";
import './footer.scss'

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="row footer__mailing-row">
                    <div className="col-lg-6 col-12">
                    <p className="text text_color_white text_size_medium">Join our newsletter</p>
                    <p className="text text_color_light-gray text_size_regular">We’ll send you a nice letter one per week. No spam.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                    <form action="" className="mailing-form footer__mailing-form">
                        <input type="text" className="input" placeholder="Enter email"/>
                        <button className="button button_color_purple">Subscribe</button>
                    </form>
                    </div>
                </div>
                <div className="row footer__links-row">
                    <div className="col-md-3 col-12">
                        <div className="footer-menu">
                            <p className="text text_color_light-gray text_size_regular text_weight_medium footer-menu__caption">Categories</p>
                            <ul className="footer-menu__list">
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Strategy</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Action</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Shooter</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Card Game</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Simulator</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">RPG</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Multiplayer</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="footer-menu">
                            <p className="text text_color_light-gray text_size_regular text_weight_medium footer-menu__caption">Company</p>
                            <ul className="footer-menu__list">
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">About us</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Careers</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Press</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">News</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-12">
                        <div className="footer-menu">
                            <p className="text text_color_light-gray text_size_regular text_weight_medium footer-menu__caption">Company</p>
                            <ul className="footer-menu__list">
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Terms</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Privacy</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Cookies</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Licenses</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="footer-menu">
                            <p className="text text_color_light-gray text_size_regular text_weight_medium footer-menu__caption">Legal</p>
                            <ul className="footer-menu__list">
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Twitter</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Facebook</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">Dribbble</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link text text_weight_medium text_size_regular text_color_white">GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text text_size_regular text_weight_regular text_color_light-gray">Copyright © GameVendor, 2022</p>
            </div>
        </footer>
    )
}

export default Footer
