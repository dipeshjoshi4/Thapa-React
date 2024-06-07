export const SeriesCard = (props) => {
    return (
        <li>
            <div>
                <img src={props.curElem.img_url} alt={props.curElem.name} width="60%" height="60%" />
            </div>

            <div>
                <h2>Name:{props.curElem.name}</h2>
                <h3>Rating:{props.curElem.rating}</h3>
                <p>{props.curElem.description}</p>
                <h4>Genre:{props.curElem.genre}</h4>
                <p>Cast:{props.curElem.cast}</p>
                <a href={props.curElem.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </li>
    )
}