import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../context/StateProvider';
import useGoogleSearch from '../../hooks/useGoogleSearch';
import Response from '../../response';
import Search from '../../components/search/Search';
import { Link } from 'react-router-dom';

function SearchPage() {
    const [ { term }, dispatch ] = useStateValue();
    //Live API call
    //const { data } = useGoogleSearch(term);

    const data = Response;
    console.log("this is data", data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                </div>
            </div>
            <div className="searchPage__results">
            </div>
        </div>
    )
}

export default SearchPage
