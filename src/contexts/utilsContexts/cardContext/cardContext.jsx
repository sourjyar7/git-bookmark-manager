import React, { createContext , useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {

    const [ isHome, setisHome ] = useState(true);

    return ( 
        <CardContext.Provider value={{ isHome , setisHome }}>
            {props.children}
        </CardContext.Provider>
     );
}
 
export default CardContextProvider;
