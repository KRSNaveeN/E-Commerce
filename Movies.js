import { useState } from "react";
import MoviesList from "./MoviesList";

const Movies = ()=>{
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(false);

  async function MoviesHandler(){
    setLoading(true);
     let response = await fetch("https://swapi.dev/api/films/");
     let data = await response.json();
     setLoading(false);
    //  console.log(data.results);
     setMovies(data.results);
    }
    return <>
    <section style={{textAlign:"center"}}>
        <button  onClick={MoviesHandler}>Fetch Movies</button>
    </section>
    <section>
        {loading&& <h2>loading....</h2>}
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