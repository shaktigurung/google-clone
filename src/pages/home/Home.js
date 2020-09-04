import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../../components/search/Search';

function Home() {
    return (
        <div className='home'>  
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>   
            <div className='home__body'>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
                <div className="home__body__inputContainer">
                    <Search />
                </div>
            </div> 
            <div className="home__footerTop">
                <p> Australia </p>
            </div>
            <div className="home__footer">
                <div className='home__footerLeft'>
                    <Link to='/advertising'>Advertising</Link>
                    <Link to='/business'>Business</Link>
                    <Link to='/how-search-work'>How Search works</Link>
                </div>
                <div className='home__footerRight'>
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/terms'>Terms</Link>
                    <Link to='/settings'>Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
