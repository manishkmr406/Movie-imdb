import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = ({handleSearchInput,searchInput}) => {
    
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
            <div className="search-container">
            <input className="search-input" type="text" value={searchInput} placeholder="Search Movie" onChange={handleSearchInput}/>
            <Link to={`/movies/search`} style={{textDecoration: "none",color: 'white'}}><i className="fa-solid fa-magnifying-glass"></i></Link>
            </div>
            </div>
        </div>
    )
}

export default Header

