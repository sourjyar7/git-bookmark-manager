import React from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import './card.css';

const Card = ({ titleText , list ,isHome }) => {
    return ( 
        <div className="container">
        <div className="card rounded">
            
            <div className="card-header">
                <h5 className="card-title">{titleText}</h5>
            </div>
            <ul className="list-group list-group-flush">
              { list.map((item , index) => <li key={index} className="list-group-item onHoverLi">{item}
                { isHome?(<span className="float-right onHoverIcons"><FaTrashAlt/></span>):
                  (<span className="float-right onHoverIcons"><FaPlus/></span>)
                }
                </li>
                )
              }
            </ul>
            
        </div>
        </div>
     );
}
 
export default Card;