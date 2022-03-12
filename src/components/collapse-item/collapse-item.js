import React, { useState } from "react";
import './collapse-item.scss'

const CollapseItem = ({title, children})=>{

    const [textVisible, toggleTextVisible] = useState(false)

    return(
        
        <div className="collapse-item">
            <a href="#" className="collapse-item__header" onClick={(e)=> {e.preventDefault(); toggleTextVisible(!textVisible)}}>
                <span className="collapse-item__caption text text_size_medium text_weight_semibold text_color_black">{title}</span>
                <span className={`collapse-item__trigger ${textVisible? 'collapse-item__trigger_active' : ''}`}></span>
            </a>
            <div className={`collapse-item__text-block text-block collapse-block ${textVisible? 'collapse-block_visible' : ''}`}>
                { children }
            </div>
        </div>
    
    )

}

export default CollapseItem