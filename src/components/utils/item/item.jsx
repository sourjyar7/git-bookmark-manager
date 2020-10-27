import React, { useContext } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { CardContext } from '../../../contexts/utilsContexts/cardContext/cardContext';

const Item = ({ item }) => {

  const { isHome } = useContext(CardContext);
    
   return ( 
        
       
           <li className="list-group-item onHoverLi">{item}
           {isHome?(<span className="float-right onHoverIcons"><FaTrashAlt/></span>):
           (<span className="float-right onHoverIcons"><FaPlus/></span>)}
           </li>
       
       
       )
     }
 
export default Item;