import React from 'react'

const MovieCard = ({Card}) => {
    console.log(Card);
    return (
        <div className="card-movie">
     <p> rate </p>

     <img src={Card.image} alt="" />
     <h1> {Card.name} </h1>
     <p> {Card.date} </p>
     
        </div>
    ) 
}

export default MovieCard



