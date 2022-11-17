import React from "react";


const Slider = ({valueSlider, handleChange, min, max, step}) => {
    return ( 
        <div>
            
            <input 
            type="range" 
            defaultValue={valueSlider}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            ></input>


        </div>
     );
}
 
export default Slider;