import React from 'react'
import Card from '../../utils/card/card';
import SearchBar from '../../utils/searchBar/searchBar';

const Home = (props) => {
    
    const list = ['sour','abcd','qwer','asd'];
    const titleText = "# Bookmarked Repositories";

    return ( 
        <div className="container">
        <SearchBar placeholder="Search repositories...."/>
        <Card titleText={titleText} list={list}></Card>
        </div>
     );
}
 
export default Home;