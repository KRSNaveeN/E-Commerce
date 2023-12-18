const MoviesList = ({movies})=>{
    console.log(movies);
    return <>
    <div style={{margin: "auto", textAlign:'center'}}>
        {movies.map((item)=>{
            return <div key={Math.random()} style={{backgroundColor:"grey", margin: " 5px auto"}}>
               <li>{item.title}</li>
               <li>{item.director}</li>
               <li>{item.episode_id}</li>
            </div>
        })}
    </div>
    </>
};

export default MoviesList;