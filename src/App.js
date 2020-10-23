import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/utils/card/card';



function App() {

  const list = ['suor','abcd','qwer','asd'];
  const titleText = "# Bookmark Manager";

  return (
    <div className="App">
      <Card titleText={titleText} list={list} isHome={true}></Card>
    </div>
  );
}

export default App;
