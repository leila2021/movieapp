import React from 'react'
import Staertrating from './Staertrating';

const MovieCard = ({Card}) => {
    console.log(Card);
    return (
        <div className="movie-card">
     <Staertrating rate={Card.rating} />
     <img src={Card.image} alt="" />
     <h1> {Card.name} </h1> <br></br>
     <p> {Card.date} </p>
        </div>
    ) 
}

export default MovieCard



