import React from 'react'
import Card from '../../utils/card/card';
import SearchBar from '../../utils/searchBar/searchBar';

const Home = (props) => {
    
    
    const titleText = "# Bookmarked Repositories";

    return ( 
        <div className="container-fluid">
           <SearchBar placeholder="Search repositories...."/>
           <Card titleText={titleText}></Card>
        </div>
     );
}
 
export default Home;