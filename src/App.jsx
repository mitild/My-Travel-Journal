import Nav from '/src/Components/Nav'
import Card from '/src/Components/Card'
import Data from '/src/Data'

export default function App() {
    const places = Data.map(place => {
        return <Card 
                    key={place.id}
                    place={place}
                />
    })
    return (
        <div className="container">
            <Nav />
            {places}
        </div>
    )
}
