import React from "react";
import SvgArrow from "../../assets/svg/SvgArrow";
import './pagination.scss'

const Pagination = ({className})=>{
    return(
        <>
            <div className={`${className} pagination-block d-none d-md-flex`}>
                <button className="pagination-block__nav-button pagination-block__prev">
                    <SvgArrow width="9" height="6" fill="#D0D5DD"/>    
                </button>
                <ul className="pagination-list">
                    <li>
                        <a href="#" className="pagination-block-link pagination-block-link_active">1</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-block-link">2</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-block-link">3</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-block-link">4</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-block-link">5</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-block-link">...</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-block-link">99</a>
                    </li>
                </ul>
                <button className="pagination-block__nav-button pagination-block__next">
                    <SvgArrow width="9" height="6" fill="#101828"/>    
                </button>
            </div>
            <a href="#" className="button pagination-button button_color_white d-flex d-md-none">Show more</a>
        </>
    )
}

export default Pagination