import './App.css';
import { useState } from 'react';
import { movieData } from './component/Data';
import MovieListe from './MovieList.js/MovieListe';
import Search from './component/Search';
import AddMovie from './component/AddMovie';


function  App() {
  const [ movies, setmovies] = useState(movieData)
  const [state, setstate] = useState("")
  const handleadd=(newmovie) => {
    setmovies([...movies,newmovie ])}
  
  return (

   <div className = "app">
     <Search/>
     <MovieListe films= { movies } /> 
     <AddMovie handleadd={handleadd} />
    </div>
  );
}

export default App;
