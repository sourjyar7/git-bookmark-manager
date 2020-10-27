import React from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

const Item = ({ item, isHome }) => {
    
   return ( 
        
       
           <li className="list-group-item onHoverLi">{item}
           {isHome?(<span className="float-right onHoverIcons"><FaTrashAlt/></span>):
           (<span className="float-right onHoverIcons"><FaPlus/></span>)}
           </li>
       
       
       )
     }
 
export default Item;