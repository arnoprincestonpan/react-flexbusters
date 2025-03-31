import { useState, useEffect } from 'react';

const MovieFetcher = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch(`https://www.freetestapi.com/api/v1/movies?limit=5`);
        const data = await response.json();
        console.log(data);
        if(data){
          setMovies(data);
        }
      } catch (error){
        console.log('Fetch Error: ', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
        <h2>Movies</h2>
        <ul style={{"display" : "flex", "flexDirection" : "row"}}>
          { movies.map((movie) => (
            <li key={movie.id}>
              <h3>Title: {movie.title}</h3>
              <img src={movie.poster} alt={movie.title + " poster."}/>
              <p>Year: {movie.year}</p>
              <p>Actors: {movie.actors.join(", ")}</p>
              <p>Genre: {movie.genre.join(", ").toLowerCase()}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MovieFetcher