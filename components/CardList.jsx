import React from "react";
import {useEffect, useState} from 'react';

const CardList = ( {movies, genreTitle} ) => {
  const calculatePostersPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 5;
    } else if (screenWidth >= 992) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else if (screenWidth >= 576) {
      return 2;
    } else {
      return 1;
    }
  };

    const [postersPerRow, setPostersPerRow] = useState(calculatePostersPerRow());
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies.slice(0, calculatePostersPerRow()));
    useEffect(() => {
        const handleResize = () => {
          const newPostersPerRow = calculatePostersPerRow();
          setPostersPerRow(newPostersPerRow);
          setMoviesToDisplay(movies.slice(0, newPostersPerRow));
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      useEffect(() => {
        setMoviesToDisplay(movies.slice(0, postersPerRow));
      }, [postersPerRow, movies]);
  return(
    <div style={{padding: '20px', backgroundColor: '#f0f0f0'}}>
        <h2 className="movie-genre" style={{marginTop: '20px', fontSize: '24px', fontWeight: 'bold', color: "#1f4489"}}>{genreTitle}</h2>
        <div className="movie-list" style={{display: 'grid', gridTemplateColumns: `repeat(${postersPerRow}, 1fr)`, gap: '20px', marginTop: '20px'}}>
            {moviesToDisplay.map((movie, index) => (
            <div key={index} className="movie-poster" style={{position: "relative", width: "100%", height: "auto", overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
                <img src={movie.image_url} alt="Movie Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div className='poster-info' style={{position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '10px', textAlign: 'center'}}> 
                <p className="movie-title" style={{fontSize: '16px', fontWeight: 'bold', color: "#fcb900"}}>{movie.title}</p>
                <p className='movie-description' style={{fontSize: '14px', marginTop: '5px'}}>{movie.description}</p>
                </div>
            </div>
            ))}
        </div>
        
    </div>
  )
};

export default CardList;
