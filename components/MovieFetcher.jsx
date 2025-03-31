import { useState, useEffect } from 'react';

const MovieFetcher = () => {
  const [movies, setMovies] = useState([]);
  const genre = 'action';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`
          https://www.omdbapi.com/?apikey=${apiKey}&s=${genre}&type=movie&page=1`
        )
        const data = await response.json();

        // Omdbapi will return a Search Array of Movie Objects
        if(data.Search){
          const filteredMovies = data.Search.filter((movie) => 
          movie.Genre.toLowerCase().includes(genre.toLowerCase()));
          setMovies(movies);
        } else {
          console.error(`No movies found for this genre: ${genre}`);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []); // empty array only runs once when the page loads

  return (
    <div>
        <h2>{genre} Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
    </div>
  )
}

export default MovieFetcher