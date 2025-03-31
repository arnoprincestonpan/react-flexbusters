import React from 'react'

const Card = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
        <img
        style={{ maxWidth: "220px", maxHeight: 'auto', objectFit: 'cover', }}
        src="https://doodleipsum.com/220x310/hand-drawn?bg=D98D63&i=fc84b0151f143a4e725c989e09fdb89c"
        alt="movie poster"
        />
        <div style={{ minWidth: '210px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            <h3>Movie Title</h3>
        </div>
    </div>
  )
}

export default Card