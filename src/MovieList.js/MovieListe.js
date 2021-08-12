import React from 'react'
import MovieCard from '../component/MovieCard'

const MovieListe = ({films}) => {
    return (
        <div className="movie-list">
            {
                films.map((el) => <MovieCard Card = {el} />

                )
            }
        </div>
    )
}

export default MovieListe

