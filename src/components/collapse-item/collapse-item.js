import React, { useState } from "react";
import './collapse-item.scss'
import { Collapse, Button } from "react-bootstrap";

const CollapseItem = ({title, children})=>{

    const [textVisible, toggleTextVisible] = useState(false)

    return(
        
        <div className="collapse-item">
            <a href="#" className="collapse-item__header" aria-controls="example-collapse-text" onClick={(e)=> {e.preventDefault(); toggleTextVisible(!textVisible)}}>
                <span className="collapse-item__caption text text_size_medium text_weight_semibold text_color_black">{title}</span>
                <span className={`collapse-item__trigger ${textVisible? 'collapse-item__trigger_active' : ''}`}></span>
            </a>
            <Collapse in={textVisible}>
                <div className={`collapse-item__text-block text-block collapse-block`} >
                { children }
                </div>
            </Collapse>
        </div>
    
    )

}

export default CollapseItem