import React from "react";
import { useSelector } from "react-redux";
import SvgArrow from '../../assets/svg/SvgArrow'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './messages-slider.scss'

const PrevArrow = (props)=> {
    const { onClick } = props;
    return (
        <button className="messages-slider__arrow messages-slider__arrow_type_prev" onClick={onClick}>
            <SvgArrow width="8" height="5" fill="#ffffff" />
        </button>
    );
}

const NextArrow = (props)=> {
    const { onClick } = props;
    return (
        <button className="messages-slider__arrow messages-slider__arrow_type_next" onClick={onClick}>
            <SvgArrow width="8" height="5" fill="#ffffff" />
        </button>
    );
}

const MessagesSlider = ()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    }

    const { messages } = useSelector((state) => ({
        messages: state.messages,
    }));

    return(
        <div className="messages-slider">
            <div className="messages-slider__rail">
                <Slider {...sliderSettings}>
                    {
                        messages.map((item)=>{
                            return(
                                <div key={item.id}>
                                    <p className="messages-slider__item text text_size_regular text_weight_regular text_color_white">
                                        {item.message}
                                    </p>
                                </div>
                            )  
                        })
                    }
                </Slider>
            </div>
        </div>
    )

}

export default MessagesSlider