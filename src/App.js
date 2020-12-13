import React , {useState } from "react";

import "./App.css";
import { Movie } from "./components/movie/Movie";
import SearchBox from './components/searchContainer/SearchBox';
import { getMovies } from './service/index'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setIsLoading(true);
    const value = e.toUpperCase();
    if(value){
			const fetchAPI = async () => {
        setMovies(await getMovies(value));
        setIsLoading(false)
			};
			fetchAPI();
    }else{
      setMovies([]);
      setIsLoading(false);
    }
  }

	return (
  <div className='container'>
    <div className='row mt-4 mb-4 inputContainer'>
      <SearchBox setSearchValue={handleChange}/>
    </div>
    <Movie movieList={movies} isLoading = {isLoading}/>
  </div>
	);
};

export default App;
