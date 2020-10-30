import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './sidebar.css';
import { FaGithubSquare } from 'react-icons/fa';


const Sidebar = (props) => {
    
    const [ stars, setStars ] = useState(18);
    const [ size, setSize ] = useState(50);
    const [ forks, setForks ] = useState(8);

    const handleStarChange = (value) =>{
        setStars(value);
    }

    const handleSizeChange = (value) =>{
        setSize(value);
    }

    const handleForkChange = (value) =>{
        setForks(value);
    }

    return ( 
        <div className="sidebar">
            <div className="header bg-dark">
                <div className="d-block text-center mt-2">
                  <FaGithubSquare size="4em" style={{color: 'white'}}/>
                </div>
                <div className="d-block text-center mt-2 mb-2 text-light">
                    Git Bookmark Manager
                </div>
            </div>
            <div className="text-center">
                Filter Repositories
            </div>
            <hr/>
            <div className="m-4">
                <span className="text-center">Number Of Stars</span>   
                <Slider value={stars} onChange={handleStarChange} 
                labels={{ 0: '0', 50: '50', 100: '100>'}}
                tooltip={true}
                />
             </div>
             <div className="mx-4 my-5">
                <span className="text-center">Number Of Forks</span>   
                <Slider value={forks} onChange={handleForkChange} 
                labels={{ 0: '0', 50: '50', 100: '100>'}}
                tooltip={true}
                />
             </div>
             <div className="mx-4 my-5">
                <span className="text-center">Repo Size</span>   
                <Slider value={size} onChange={handleSizeChange} 
                labels={{ 0: '0', 50: '50', 100: '100>'}}
                tooltip={true}
                />
             </div>
             <div className="mx-4 my-5 text-center">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false">
                    Language Used
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item">Java</a>
                    <a className="dropdown-item">Javascript</a>
                    <a className="dropdown-item">Python</a>
                    <a className="dropdown-item">C++</a>
                    <a className="dropdown-item">Others</a>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;