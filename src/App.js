import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/home';
import Sidebar from './components/utils/sidebar/sidebar';
import CardContextProvider from './contexts/utilsContexts/cardContext/cardContext';
import ItemListContextProvider from './contexts/utilsContexts/itemListContext/itemListContext';


function App() {

  return (
    <div className="App">
      <CardContextProvider>
        <ItemListContextProvider> 
         <Home/>
        </ItemListContextProvider>
      </CardContextProvider>
    </div>
  );
}

export default App;
