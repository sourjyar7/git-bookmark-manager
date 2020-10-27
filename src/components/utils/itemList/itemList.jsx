import React from 'react';
import Item from '../item/item';

const ItemList = ({ list }) => {

    return ( 
             
              <ul className="list-group list-group-flush">
               {list.map((item,index)=> <Item key={index} item={item}/>)}   
              </ul>
             
     );
}
 
export default ItemList;