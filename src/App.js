import "./App.css";
import { useState } from "react";
import { movieData } from "./component/Data";
import MovieListe from "./MovieList.js/MovieListe";
import Search from "./component/Search";
import AddMovie from "./component/AddMovie";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Description from "./component/Description";

function App() {
  const [movies, setmovies] = useState(movieData);
  const [searchvalue, setSearchvalue] = useState("");
  const [seartchrate, setSeartchrate] = useState(1);
  const handleadd = (newmovie) => {
    setmovies([...movies, newmovie]);
  };

  const handlesearch = (e) => {
    setSearchvalue(e.target.value);
  };
  const hendlerate = (newrate) => {
    setSeartchrate(newrate);
  };
  return (
    <div className="app">
      <Router>

      
      <Search
        searchvalue={searchvalue}
        handlesearch={handlesearch}
        searchrate={seartchrate}
        handlerate={hendlerate}
      />
      <Switch>
      <Route exact path = "/description/:name" render = {(props)=> <Description {...props} movies={movies} />} />
      <Route exact path = "/" render = {
        () =>  <MovieListe
        films={movies.filter((movie) =>
          movie.name.toLowerCase().includes(searchvalue.toLowerCase().trim()
          )&&
          movie.rating>=seartchrate
        )}
      />
      }
      />
     
      </Switch>
      <AddMovie handleadd={handleadd} />
      </Router>
    </div>
  );
}
export default App;
