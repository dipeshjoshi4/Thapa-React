
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
    return (
        <ul>
            {
                seriesData.map((curElem) => {
                    return (
                        <li key={curElem.id}>
                            <div><img src={curElem.img_url} alt={curElem.name} width="60%" height="60%" /></div>

                            <div>
                                <h2>Name:{curElem.name}</h2>
                                <h3>Rating:{curElem.rating}</h3>
                                <p>{curElem.description}</p>
                                <h4>Genre:{curElem.genre}</h4>
                                <p>Cast:{curElem.cast}</p>
                                <a href={curElem.watch_url} target="_blank">
                                    <button>Watch Now</button>
                                </a>
                            </div>
                        </li>
                    )

                })
            }

        </ul>
    )
}

export default NetflixSeries;