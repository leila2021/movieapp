import "./App.css";
import { useState } from "react";
import { movieData } from "./component/Data";
import MovieListe from "./MovieList.js/MovieListe";
import Search from "./component/Search";
import AddMovie from "./component/AddMovie";

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
      <Search
        searchvalue={searchvalue}
        handlesearch={handlesearch}
        searchrate={seartchrate}
        handlerate={setSeartchrate}
      />
      <MovieListe
        films={movies.filter((movie) =>
          movie.name.toLowerCase().includes(searchvalue.toLowerCase().trim()
          )&&
          movie.rating>=seartchrate
        )}
      />
      <AddMovie handleadd={handleadd} />
    </div>
  );
}
export default App;
