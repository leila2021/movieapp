import React from 'react'
import Staertrating from './Staertrating'

const Search = ({searchvalue,handlesearch,searchrate,handlerate}) => {
    return (
        <div className ="header-container">
           <h1> our movie app </h1> 
           <div className="search-container">
         
            <input type = "text" name="" value={searchvalue} className="inp" onChange={handlesearch}/>
            <Staertrating rate={searchrate} handlerate={handlerate} />

        </div>
        </div>

        
    );
}

export default Search



