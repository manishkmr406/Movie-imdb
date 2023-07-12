import React, { useEffect, useState } from 'react'
import Cards from '../card/card';
import { useParams } from 'react-router-dom';

const Search = () => {
    const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=4e44d9029b1270a757cddc766a1bcb63&query=";
    const {searchInput}=useParams();
    const [searchResults,setSearchResults]=useState([]);
    
    useEffect(()=>{
        fetch(SEARCHAPI+searchInput)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setSearchResults(data.results);
        });
    },[searchInput])
    console.log(searchResults);
    return (
    <div>
    <h1>Results Found: {searchResults.length}</h1>
    {searchResults.length>0 ? (searchResults.map(((movie,i)=>(
        <Cards movie={movie} key={i}/>
    ))) ): (<h1> No Results Found!</h1>)}
    </div>
  )
}

export default Search;
