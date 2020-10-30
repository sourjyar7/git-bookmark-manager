import React from 'react';
import ItemList from '../itemList/itemList';
import './card.css';

const Card = ({ titleText }) => {
    return ( 
        <div className="container my-4">
        <div className="card rounded">
            
            <div className="card-header bg-dark text-light">
                <h5 className="card-title">{titleText}</h5>
            </div>
           
            <ItemList/>
            
            
        </div>
        </div>
     );
}
 
export default Card;