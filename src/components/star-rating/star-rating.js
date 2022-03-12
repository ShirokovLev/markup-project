import React from "react";
import SvgStar from '../../assets/svg/SvgStar'

const StarRating = ({rating})=>{
    return(
        <div className="star-rating">
            {
                [...Array(5)].map((item, i)=>{
                    return(
                        <SvgStar width="12" height="10" fill={ i+1 <= rating ? "#FEC84B" : "#EAECF0"} key={i}/>
                    )
                })
            }
            
        </div>
    )
}

export default StarRating