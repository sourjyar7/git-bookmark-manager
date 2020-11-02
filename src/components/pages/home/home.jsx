import React from 'react'
import Card from '../../utils/card/card';
import SearchBar from '../../utils/searchBar/searchBar';
import Sidebar from '../../utils/sidebar/sidebar';
import Jumbotron from '../../utils/jumbotron/jumbotron';

const Home = (props) => {
    
    
    const titleText = "# Bookmarked Repositories";

    return ( 
        <div className="container-fluid">
           <div className="row">
                  <div className="col-md-3" style={{padding : '0px'}}> 
                      <Sidebar/>
                  </div>

                  <div className="col-md-9">
                      <Jumbotron/>
                      <SearchBar placeholder="Search repositories...."/>
                      <Card titleText={titleText}></Card>
                  </div>
           </div>
        </div>
     );
}
 
export default Home;