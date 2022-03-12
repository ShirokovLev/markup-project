import React from "react";
import CollapseItem from "../collapse-item";

const CollapseList = ()=>{
    return(
        <ul className="collapse-list">
            <li>
                <CollapseItem title="How does work?">
                  <p className="text text_size_regular text_weight_regular text_color_gray">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.</p>
                  <ul className="dot-list">
                    <li><p className="text text_size_regular text_weight_regular text_color_gray">motion sensing device,</p></li>
                    <li><p className="text text_size_regular text_weight_regular text_color_gray">controller,</p></li>
                    <li><p className="text text_size_regular text_weight_regular text_color_gray">keyboard,</p></li>
                    <li><p className="text text_size_regular text_weight_regular text_color_gray">joystick.</p></li>
                  </ul>
                  <p className="text text_size_regular text_weight_medium">
                    Visual feedback.
                  </p>
                  <p className="text text_size_regular text_weight_regular text_color_gray">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback.</p>
                </CollapseItem>
            </li>
            <li>
                <CollapseItem title="What is a game?">
                    <p className="text text_size_regular text_weight_regular text_color_gray">Sample Text</p>
                </CollapseItem>
            </li>
            <li>
                <CollapseItem title="Is there a free trial available?">
                    <p className="text text_size_regular text_weight_regular text_color_gray">Sample Text</p>
                </CollapseItem>
            </li>
            <li>
                <CollapseItem title="How does billing work?">
                    <p className="text text_size_regular text_weight_regular text_color_gray">Sample Text</p>
                </CollapseItem>
            </li>
          
        </ul>
    )
}

export default CollapseList