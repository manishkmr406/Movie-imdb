import React, { useEffect, useState } from 'react'
import Cards from '../card/card';

const Search = ({searchInput}) => {
    const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=4e44d9029b1270a757cddc766a1bcb63&query=";
    
    const [searchResults,setSearchResults]=useState([]);

    useEffect(()=>{
        fetch(SEARCHAPI + searchInput)
        .then((res) => res.json())
        .then((data) => {
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
