import { useState } from "react";
import MoviesList from "./MoviesList";

const Movies = ()=>{
 const [movies, setMovies] = useState([]);

  async function MoviesHandler(){
     let response = await fetch("https://swapi.dev/api/films/");
     let data = await response.json();
    //  console.log(data.results);
     setMovies(data.results);
    }
    return <>
    <section>
        <button onClick={MoviesHandler}>Fetch Movies</button>
    </section>
    <section>
        <MoviesList movies={movies}/>
    </section>
    </>;
};

export default Movies;

//  let updatedmovies = data.map((item)=>{
    //     return {
    //         id : item.episode_id,
    //         title : item.opening_crawl,
    //         date : item.release_date
    //     }
    //  })