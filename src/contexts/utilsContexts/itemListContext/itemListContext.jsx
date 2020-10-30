import React, { createContext , useState } from 'react';

export const ItemListContext = createContext();

const ItemListContextProvider = (props) => {

    const [ itemList , setitemList ] = useState(['sour','abcd','qwer','asd']);

    return ( 
        <ItemListContext.Provider value={{ itemList, setitemList }}>
            {props.children}
        </ItemListContext.Provider>
     );
}
 
export default ItemListContextProvider;