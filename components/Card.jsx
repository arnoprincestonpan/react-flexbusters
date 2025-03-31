import React from 'react'

const Card = ( {posterImageUrl, movieTitle, movieDescription, posterHeight, posterWidth} ) => {

  return (
    <div className="movie-poster" style={{position: "relative", width: posterWidth, height: posterHeight, overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
      <img src={posterImageUrl} alt="Movie Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      <div className='poster-info' style={{position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '10px', textAlign: 'center'}}> 
        <p className="movie-title" style={{fontSize: '16px', fontWeight: 'bold'}}>{movieTitle}</p>
        <p className='movie-description' style={{fontSize: '14px', marginTop: '5px'}}>{movieDescription}</p>
      </div>
    </div>
  )
}

export default Card