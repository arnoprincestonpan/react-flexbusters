import Card from "./Card"

const CardList = () => {
  return (
    <div>
        <h2>Movies</h2>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <button style={{ maxWidth: '72px', maxHeight: '24px' }}>Previous</button>
            <ul style={{ display: 'flex', flexDirection: 'row',listStyleType: 'none' }}>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
            </ul>
            <button style={{ maxWidth: '72px', maxHeight: '24px' }}>Next</button>
        </div>
    </div>
  )
}

export default CardList