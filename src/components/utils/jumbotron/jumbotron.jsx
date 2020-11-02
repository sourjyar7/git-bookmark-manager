import React from 'react'

const Jumbotron = (props) => {
    return ( 
        <div className="jumbotron">
            <h1 className="display-6 text-center">Manage your GitHub watchlist the right way !</h1>
            <hr className="my-4"/>
            <p className="text-center">Add , Remove and Search for your favourite repositories and customise your watchlist </p>
            <p className="lead text-center">
                <a className="btn btn-primary btn-lg" href="#" role="button">Explore Repositories -></a>
            </p>
        </div>
     );
}
 
export default Jumbotron;