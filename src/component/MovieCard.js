import React from 'react'
import { Link } from 'react-router-dom';
import Staertrating from './Staertrating';

const MovieCard = ({Card}) => {
    console.log(Card);
    return (
        <div className="movie-card">
     <Staertrating rate={Card.rating} />
     <img src={Card.image} alt="" />
     <h1> {Card.name} </h1> <br></br>
     <p> {Card.date} </p>
     <Link to = { `/description/${Card.name}  ` } > <button className= "btn btn-primary" > see descreptions</button>
     </Link >
        </div>
    ) 
}

export default MovieCard



