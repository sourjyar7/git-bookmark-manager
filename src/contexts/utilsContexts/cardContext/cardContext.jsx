import React, { createContext , useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {

    const [ isHome, setisHome ] = useState(true);

    return ( 
        <CardContextProvider value={{ isHome , setisHome }}>
            {props.children}
        </CardContextProvider>
     );
}
 
export default CardContextProvider;
