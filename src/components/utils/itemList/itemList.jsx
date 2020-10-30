import React , { useContext } from 'react';
import { ItemListContext } from '../../../contexts/utilsContexts/itemListContext/itemListContext';
import Item from '../item/item';

const ItemList = (props) => {

    const { itemList } = useContext(ItemListContext);

    return ( 
             
              <ul className="list-group list-group-flush">
               {itemList.map((item,index)=> <Item key={index} item={item}/>)}   
              </ul>
             
     );
}
 
export default ItemList;