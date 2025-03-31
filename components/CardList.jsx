import React from "react";

const CardList = () => {
  const horrorMovies = [
    {
      title: "The Babadook",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjE0Nzg5NjEzMl5BMl5BanBnXkFtZTgwMTkzNjEwMzE@._V1_FMjpg_UX1000_.jpg",
      description:
        "A single mother and her child find a disturbing children's book in their home, and its presence soon manifests into a terrifying entity.",
    },
    {
      title: "Hereditary",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BOTU5Nzc4OTQyMV5BMl5BanBnXkFtZTgwODQzNTEzNzM@._V1_FMjpg_UX1000_.jpg",
      description:
        "Following the death of their secretive grandmother, a family begins to unravel terrifying secrets and face a horrifying fate.",
    },
    {
      title: "The Witch",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjMwMzc5Nzc3MV5BMl5BanBnXkFtZTgwMzc1MzQyNzE@._V1_FMjpg_UX1000_.jpg",
      description:
        "In 1630s New England, a devout family is torn apart by suspicion and terror when their newborn son vanishes and their crops fail.",
    },
    {
      title: "It Follows",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1NjM5Ml5BMl5BanBnXkFtZTgwNzMzODk2NDE@._V1_FMjpg_UX1000_.jpg",
      description:
        "A young woman is cursed with a supernatural entity that relentlessly pursues her after a sexual encounter.",
    },
    {
      title: "The Conjuring",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjcwMzY4MV5BMl5BanBnXkFtZTgwMTQ1NDI3NzE@._V1_FMjpg_UX1000_.jpg",
      description:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    },
    {
      title: "A Quiet Place",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjI1NzU0MzIxMV5BMl5BanBnXkFtZTgwNjk4ODM1NTM@._V1_FMjpg_UX1000_.jpg",
      description:
        "In a post-apocalyptic world, a family must live in silence to avoid terrifying creatures with an acute sense of hearing.",
    },
    {
      title: "Get Out",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjYxMF5BMl5BanBnXkFtZTgwNzQwNzgyNzM@._V1_FMjpg_UX1000_.jpg",
      description:
        "A young African-American man visits his white girlfriend's family estate and discovers a sinister and disturbing secret.",
    },
    {
      title: "Sinister",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjI5Mjk0OTM2NF5BMl5BanBnXkFtZTcwMjczMjEzNA@@._V1_FMjpg_UX1000_.jpg",
      description:
        "A true crime writer finds a box of home movies in his new house that depict grisly murders, leading him and his family into danger.",
    },
    {
      title: "The Shining",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NDQ0NWFmXkEyXkFqcGdeQXVyMTUzNTYzODc2._V1_FMjpg_UX1000_.jpg",
      description:
        "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific premonitions.",
    },
    {
      title: "Insidious",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDAwOF5BMl5BanBnXkFtZTcwNzY3NzQyNA@@._V1_FMjpg_UX1000_.jpg",
      description:
        "A family seeks to help their comatose son, only to discover that his condition is the result of a demonic possession.",
    },
  ];
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
    const postersPerRow = calculatePostersPerRow();
    const moviesToDisplay = horrorMovies.slice(0, postersPerRow);
  return(
    <div>
        <h2 className="movie-genre" style={{marginTop: '20px', fontSize: '24px', fontWeight: 'bold'}}>Horror Movies</h2>
        <div className="movie-list" style={{display: 'grid', gridTemplateColumns: `repeat(${postersPerRow}, 1fr)`, gap: '20px', marginTop: '20px'}}>
            {moviesToDisplay.map((movie, index) => (
            <div key={index} className="movie-poster" style={{position: "relative", width: "100%", height: "auto", overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
                <img src={movie.image_url} alt="Movie Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                <div className='poster-info' style={{position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '10px', textAlign: 'center'}}> 
                <p className="movie-title" style={{fontSize: '16px', fontWeight: 'bold'}}>{movie.title}</p>
                <p className='movie-description' style={{fontSize: '14px', marginTop: '5px'}}>{movie.description}</p>
                </div>
            </div>
            ))}
        </div>
        
    </div>
  )
};

export default CardList;
