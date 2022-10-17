import React from "react";
import itemlist from "../../../styles/itemlist.css";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const Rate= ({producto}) => {
    
    return ( 
           
        <Box  className='rating-class' >
            <Rating name="half-rating-read" defaultValue={producto.rating} precision={0.5} size='small' readOnly />
        </Box>
         
     );
}


 
export default Rate;
