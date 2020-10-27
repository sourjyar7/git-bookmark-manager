import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/home';
import CardContextProvider from './contexts/utilsContexts/cardContext/cardContext';

function App() {

  return (
    <div className="App">
      <CardContextProvider>
        <Home/>
      </CardContextProvider>
    </div>
  );
}

export default App;
