import React from 'react'
import './banner.scss'

const Banner = ({title, description, link, linkName, picUrl, className})=>{
    return(
        <div className={className + ' ' +'banner'}>
            <div className="banner__info">
                <h2 className="caption caption_size_l text_color_white banner__caption">{title}</h2>
                <p className="text text_size_regular text_weight_semibold text_color_white banner__description">{description}</p>
                <a href={link} className="button button_color_white banner__button">{linkName}</a>
            </div>
            <img className="banner__pic d-none d-md-block" src={picUrl} decoding="async" loading="lazy" alt="" />
        </div>
    )
}

export default Banner