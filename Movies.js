import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
// let x = 0;
const Movies = ()=>{
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
const [interval, setinter] = useState();
const[count,setCount] =useState(0);
// let x;
//  useEffect(()=>(let x=0),[])

function removeHandler(){
    clearInterval(interval);
    console.log("removed");
    
}
useEffect(()=>{clearInterval(interval)}, [count]);

function MoviesHandler(){
 setinter(setInterval(async () => {
    console.log("called every 5 sec");
        setLoading(true);
        try{
        let response = await fetch("https://swapi.dev/api/film/");
        if(!response.ok){
            throw new Error("trying to reconnect");
            
        }
        let data = await response.json();
        setCount((pre)=>pre+1)
        setMovies(data.results);
        }
        catch(error)
        {
            
            setError(error.message)
        }
        setLoading(false);
    }, 5000));
};

// if(count >1){
//     console.log(interval);
//    clearInterval(interval);
// }



    return <>
    <section style={{textAlign:"center"}}>
        <button  onClick={MoviesHandler}>Fetch Movies</button>
    </section>
    <section>
        {loading && <h2>loading....</h2>}
        {!loading && error && <h2>{error}</h2>}
        { error && <button onClick={removeHandler}>Cancel</button>}
       {movies.length >0 && <MoviesList movies={movies}/>} 
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