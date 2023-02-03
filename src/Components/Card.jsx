export default function Card(props) {
    return (
        <main className="card">
            <img className="card--picture" src={props.place.imageUrl} />
            <div className="card--info">
                <div className="card--location">
                    <h3 className="card--country"><i className="fa-solid fa-location-dot card--icon"></i>{props.place.location}</h3>
                    <a className="card--link" href={props.place.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.place.title}</h2>
                <h3 className="card--dates">{props.place.startDate} - {props.place.endDate}</h3>
                <p className="card--text">{props.place.description}</p>
            </div>
        </main>
    )
    console.log(props.imageUrl)
}